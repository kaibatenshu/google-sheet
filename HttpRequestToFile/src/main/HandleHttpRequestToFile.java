package main;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class HandleHttpRequestToFile implements Runnable {

	public static String saveFolder;

	private final Socket socket;
	private final int fileID;

	public HandleHttpRequestToFile(Socket _socket, int _fileID) {
		socket = _socket;
		fileID = _fileID;
	}

	@Override public void run() {
		try (InputStream is = socket.getInputStream();OutputStream os = socket.getOutputStream()) {
			socket.setSoTimeout(10_000);
			byte[] request = readHttpRequest(is);
			if(request!=null && request.length>0)
				Files.write(Path.of(saveFolder + "/" + fileID), request);
			// HTTP 200 OK
			os.write("HTTP/1.1 200 OK\r\nContent-Length: 0\r\nConnection: close\r\n\r\n".getBytes(StandardCharsets.US_ASCII));
			os.flush();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				socket.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	private static byte[] readHttpRequest(InputStream is) throws IOException {

		ByteArrayOutputStream output = new ByteArrayOutputStream();

		/*
		 * Đọc HTTP header cho tới:
		 *
		 * \r\n\r\n
		 */
		byte[] headerEnd = {
			'\r', '\n', '\r', '\n'
		};

		int match = 0;

		while (true) {

			int b = is.read();

			if (b == -1)
				break;

			output.write(b);

			if (b == headerEnd[match]) {
				match++;

				if (match == headerEnd.length)
					break;
			} else {
				match = (b == headerEnd[0]) ? 1 : 0;
			}
		}

		byte[] headerBytes = output.toByteArray();
		String headers = new String(headerBytes, StandardCharsets.ISO_8859_1);

		/*
		 * Content-Length
		 */
		long contentLength = getContentLength(headers);

		if (contentLength >= 0) {

			copyExactly(
				is,
				output,
				contentLength
			);

		} else if (isChunked(headers)) {

			readChunkedBody(
				is,
				output
			);
		}

		return output.toByteArray();
	}

	private static long getContentLength(String headers) {

		String[] lines = headers.split("\r\n");

		for (String line : lines) {

			int index = line.indexOf(':');

			if (index <= 0)
				continue;

			String name = line.substring(0, index).trim();

			if (name.equalsIgnoreCase("Content-Length")) {

				String value = line.substring(index + 1).trim();

				try {
					return Long.parseLong(value);
				} catch (NumberFormatException e) {
					return -1;
				}
			}
		}

		return -1;
	}

	private static boolean isChunked(String headers) {

		String[] lines = headers.split("\r\n");

		for (String line : lines) {

			int index = line.indexOf(':');

			if (index <= 0)
				continue;

			String name = line.substring(0, index).trim();

			if (name.equalsIgnoreCase("Transfer-Encoding")) {

				String value = line.substring(index + 1).trim();

				return value.toLowerCase()
						.contains("chunked");
			}
		}

		return false;
	}

	private static void copyExactly(
			InputStream is,
			ByteArrayOutputStream output,
			long length) throws IOException {

		byte[] buffer = new byte[8192];

		long remaining = length;

		while (remaining > 0) {

			int read = is.read(
				buffer,
				0,
				(int) Math.min(buffer.length, remaining)
			);

			if (read == -1)
				throw new IOException(
					"HTTP request body bị ngắt trước Content-Length"
				);

			output.write(buffer, 0, read);

			remaining -= read;
		}
	}

	private static void readChunkedBody(
			InputStream is,
			ByteArrayOutputStream output) throws IOException {

		while (true) {

			/*
			 * Đọc chunk-size line.
			 *
			 * Ví dụ:
			 *
			 * 1A\r\n
			 */
			String line = readLine(is);

			int semicolon = line.indexOf(';');

			if (semicolon >= 0)
				line = line.substring(0, semicolon);

			long chunkSize;

			try {
				chunkSize = Long.parseLong(
					line.trim(),
					16
				);
			} catch (NumberFormatException e) {
				throw new IOException(
					"Chunk size không hợp lệ: " + line
				);
			}

			/*
			 * Chunk cuối:
			 *
			 * 0\r\n
			 */
			if (chunkSize == 0) {

				// Đọc trailer tới \r\n\r\n
				while (true) {

					String trailer = readLine(is);

					if (trailer.isEmpty())
						break;
				}

				break;
			}

			copyExactly(
				is,
				output,
				chunkSize
			);

			/*
			 * Sau mỗi chunk phải có:
			 *
			 * \r\n
			 */
			int r1 = is.read();
			int r2 = is.read();

			if (r1 != '\r' || r2 != '\n') {
				throw new IOException(
					"Chunk không kết thúc bằng CRLF"
				);
			}

			output.write(r1);
			output.write(r2);
		}
	}

	private static String readLine(InputStream is)
			throws IOException {

		ByteArrayOutputStream line =
			new ByteArrayOutputStream();

		int previous = -1;

		while (true) {

			int b = is.read();

			if (b == -1)
				throw new IOException(
					"HTTP request kết thúc bất ngờ"
				);

			if (previous == '\r' && b == '\n') {

				byte[] data = line.toByteArray();

				// Bỏ \r cuối line
				if (data.length > 0 &&
					data[data.length - 1] == '\r') {

					return new String(
						data,
						0,
						data.length - 1,
						StandardCharsets.ISO_8859_1
					);
				}

				return new String(
					data,
					StandardCharsets.ISO_8859_1
				);
			}

			line.write(b);

			previous = b;
		}
	}
}