package main;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.ValueRange;

import backendgame.com.core.BGUtility;

public class SheetsQuickstart {
    private static final byte[] CREDENTIALS = new byte[] {123, 34, 105, 110, 115, 116, 97, 108, 108, 101, 100, 34, 58, 123, 34, 99, 108, 105, 101, 110, 116, 95, 105, 100, 34, 58, 34, 54, 55, 51, 48, 57, 48, 54, 55, 55, 49, 48, 50, 45, 99, 114, 52, 115, 101, 106, 105, 54, 107, 108, 98, 56, 106, 56, 97, 51, 102, 103, 52, 49, 57, 116, 49, 104, 110, 108, 118, 57, 116, 108, 105, 50, 46, 97, 112, 112, 115, 46, 103, 111, 111, 103, 108, 101, 117, 115, 101, 114, 99, 111, 110, 116, 101, 110, 116, 46, 99, 111, 109, 34, 44, 34, 112, 114, 111, 106, 101, 99, 116, 95, 105, 100, 34, 58, 34, 99, 114, 97, 99, 107, 45, 109, 101, 114, 105, 100, 105, 97, 110, 45, 52, 51, 50, 56, 50, 51, 45, 106, 56, 34, 44, 34, 97, 117, 116, 104, 95, 117, 114, 105, 34, 58, 34, 104, 116, 116, 112, 115, 58, 47, 47, 97, 99, 99, 111, 117, 110, 116, 115, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 111, 47, 111, 97, 117, 116, 104, 50, 47, 97, 117, 116, 104, 34, 44, 34, 116, 111, 107, 101, 110, 95, 117, 114, 105, 34, 58, 34, 104, 116, 116, 112, 115, 58, 47, 47, 111, 97, 117, 116, 104, 50, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 46, 99, 111, 109, 47, 116, 111, 107, 101, 110, 34, 44, 34, 97, 117, 116, 104, 95, 112, 114, 111, 118, 105, 100, 101, 114, 95, 120, 53, 48, 57, 95, 99, 101, 114, 116, 95, 117, 114, 108, 34, 58, 34, 104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 46, 99, 111, 109, 47, 111, 97, 117, 116, 104, 50, 47, 118, 49, 47, 99, 101, 114, 116, 115, 34, 44, 34, 99, 108, 105, 101, 110, 116, 95, 115, 101, 99, 114, 101, 116, 34, 58, 34, 71, 79, 67, 83, 80, 88, 45, 104, 102, 105, 72, 85, 84, 81, 97, 45, 116, 103, 95, 110, 75, 95, 73, 95, 112, 55, 77, 80, 68, 110, 112, 51, 82, 57, 65, 34, 44, 34, 114, 101, 100, 105, 114, 101, 99, 116, 95, 117, 114, 105, 115, 34, 58, 91, 34, 104, 116, 116, 112, 58, 47, 47, 108, 111, 99, 97, 108, 104, 111, 115, 116, 34, 93, 125, 125};
    private static final String spreadsheetId = "14h3Ebq30NOLO7ckLcuBpQK_03OAIgO7uNMMJE8V63i0";
    private static final String range = "employee!A4:C5";
	
	
    private static final String APPLICATION_NAME = "Google Sheets API Java Quickstart";
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
   // Đây là đường dẫn thư mục sẽ lưu tạo file xác thực khi bạn đăng nhập lần đầu tiên
    private static final String TOKENS_DIRECTORY_PATH = "./";

    /**
     * Đây là thuộc tính chỉ phạm vi quyền thực hiện với trang tính, hiện đang để là chỉ đọc
     * Nếu sửa đổi quyền thì bạn cần xóa thư mục  tokens/ để đăng nhập lại
     */
    private static final List<String> SCOPES = Collections.singletonList(SheetsScopes.SPREADSHEETS_READONLY);
//    private static final String CREDENTIALS_FILE_PATH = ".\\credentials.json";
    /**
     * Đây là function để lấy quyền xác thực 
     *Creates an authorized Credential object.
     * @param HTTP_TRANSPORT The network HTTP Transport.
     * @return An authorized Credential object.
     * @throws IOException If the credentials.json file cannot be found.
     */
    private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
//        // Load client secrets.
//        InputStream in = SheetsQuickstart.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
//        if (in == null) {
//            throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
//        }
//        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
    	ByteArrayInputStream bis = new ByteArrayInputStream(CREDENTIALS);
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(bis));

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
                .setAccessType("offline")
                .build();
        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }

    /**
      *Tương tác thử với một bảng tính để đọc dữ liệu bên trong
     * Prints the names and majors of students in a sample spreadsheet:
     * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
     */
    public static void main(String... args) throws IOException, GeneralSecurityException {
    	
//    	File file = new File("./");
//    	for(File f:file.listFiles())
//    		System.out.println(f.toPath());
//    	FileInputStream fis = new FileInputStream("./credentials.json");
//    	byte[] data=new byte[fis.available()];
//    	fis.read(data);
//    	System.out.println(Arrays.toString(data));
    	
    	
    	
    	
    	
        // Build a new authorized API client service.
        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
        Sheets service = new Sheets.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
                .setApplicationName(APPLICATION_NAME)
                .build();
        ValueRange response = service.spreadsheets().values()
                .get(spreadsheetId, range)
                .execute();
        List<List<Object>> values = response.getValues();
        if (values == null || values.isEmpty()) {
            System.out.println("No data found.");
        } else {
            System.out.println("Name, Major");
            for (List row : values) {
                // Print columns A and E, which correspond to indices 0 and 4.
                System.out.printf("%s, %s, %s\n", row.get(0), row.get(1), row.get(2));
            }
            BGUtility.trace(values);
        }
    }
}
