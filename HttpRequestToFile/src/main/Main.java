package main;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
	
	public static void main(String[] args) {
		if(args!=null&&args.length>0)
			HandleHttpRequestToFile.saveFolder=args[0];
		else {
			String os=System.getProperty("os.name").toLowerCase();
			if(os.contains("win"))
				HandleHttpRequestToFile.saveFolder="C:\\HttpToFiles";
			else if(os.contains("mac")) 
				HandleHttpRequestToFile.saveFolder="/Users/Shared/HttpToFiles";
			else
				HandleHttpRequestToFile.saveFolder="/HttpToFiles";
		}
		
		if(Files.exists(Path.of(HandleHttpRequestToFile.saveFolder))==false)
			try {
				Files.createDirectories(Path.of(HandleHttpRequestToFile.saveFolder));
			} catch (IOException e) {
				e.printStackTrace();
			}
		
		
		ServerSocket serverSocket=null;
		try {
			serverSocket = new ServerSocket(8080);
			System.out.println("Server is listening on port 8080, saving files to: "+HandleHttpRequestToFile.saveFolder);
			int fileID=0;
			while(true){
				Socket socket = serverSocket.accept();
				new Thread(new HandleHttpRequestToFile(socket,fileID)).start();
				fileID++;
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		if(serverSocket!=null)
			try {serverSocket.close();} catch (IOException e) {e.printStackTrace();}
	}

}
