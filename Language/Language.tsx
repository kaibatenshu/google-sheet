export const LanguageCode:string[] = ['en','vi','zh_TW','zh_CN','hi','es','es_la','fr_FR','ar','bn_IN','ru','pt_PT','pt_BR','ja_JP','ko_KR','af','th_TH','ms_MY','de_DE','nl_NL','tl_PH','lo_LA','km_KH','developing'];
export const LanguageName:string[] = ['English','Tiếng Việt','中 文 ( 台 灣 )','中 文 ( 简 体 )','हिदी','Español (España)','Español','Français (France)','‏العربية','বাংলা','Русский','Português (Portugal)','Português (Brasil)','日本語','한국어','Afrikaans','ภาษาไทย','Bahasa Melayu','Deutsch','Nederlands','Filipino','ພາສາລາວ','ភាសាខ្មែរ','Developer'];
export const Language:string[] = [];

export function setLanguage(languageID:number) {
	Language[3]="Home";Language[4]="My equipment";Language[5]="Leave request";Language[6]="Employees";Language[7]="Announcements";Language[8]="Human Resources";Language[9]="Recruitment";Language[10]="Shifts";Language[11]="Time tracker";Language[12]="Equipment";Language[13]="Leave Tracker";Language[14]="Attendance";Language[15]="Financial accounting";Language[16]="Fund account";Language[17]="Receivable";Language[18]="Submit fund";Language[19]="Expenditure planning";Language[20]="Payable";Language[21]="Expenses";Language[22]="PayrollClerk";Language[23]="Report";Language[24]="Nginx";Language[25]="Public domain";Language[26]="Private domain";Language[27]="website";Language[28]="Change Password";Language[29]="Cấu hình gmail cho hệ thống";Language[30]="Inflow";Language[31]="Outflow";Language[32]="aaaaaa";Language[33]="a";Language[34]="a";Language[35]="a";Language[36]="aaa";Language[37]="aaa";Language[38]="aaa";Language[39]="aaa";Language[40]="aaa";
	switch (languageID) {
		case 1:Language[3]="Trang chủ";Language[4]="Thiết bị của tôi";Language[5]="Nghỉ phép";Language[6]="Quản lý nhân viên";Language[7]="Thông báo";Language[8]="Hành chính nhân sự";Language[9]="Tuyển dụng";Language[10]="Ca làm";Language[11]="Quản lý giờ chấm công";Language[12]="Công cụ dụng cụ";Language[13]="Ngày phép";Language[14]="Chuyên cần";Language[15]="Tài chính kế toán";Language[16]="Tài khoản quỹ";Language[17]="Nợ phải thu";Language[18]="Nộp tiền";Language[19]="Kế hoạch chi";Language[20]="Nợ phải trả";Language[21]="Chi phí";Language[22]="Kế toán lương";Language[23]="Báo cáo";Language[28]="Đổi mật khẩu";Language[30]="Dòng thu";Language[31]="Dòng chi";Language[32]="ddddddddsfsdf";Language[36]="bbb";Language[37]="ccc";Language[38]="ddd";Language[39]="eee";Language[40]="fff";
		break;
		case 2:
		break;
		case 3:
		break;
		case 4:
		break;
		case 5:
		break;
		case 6:
		break;
		case 7:
		break;
		case 8:
		break;
		case 9:
		break;
		case 10:
		break;
		case 11:
		break;
		case 12:
		break;
		case 13:
		break;
		case 14:
		break;
		case 15:
		break;
		case 16:
		break;
		case 17:
		break;
		case 18:
		break;
		case 19:
		break;
		case 20:
		break;
		case 21:
		break;
		case 22:
		break;
		case 23:Language[3]="4 Home";Language[4]="5 My equipment";Language[5]="6 Leave request";Language[6]="7 Employees";Language[7]="8 Announcements";Language[8]="9 Human Resources";Language[9]="10 Recruitment";Language[10]="11 Shifts";Language[11]="12 Time tracker";Language[12]="13 Equipment";Language[13]="14 Leave Tracker";Language[14]="15 Attendance";Language[15]="16 Financial accounting";Language[16]="17 Fund account";Language[17]="18 Receivable";Language[18]="19 Submit fund";Language[19]="20 Expenditure planning";Language[20]="21 Payable";Language[21]="22 Expenses";Language[22]="23 PayrollClerk";Language[23]="24 Report";Language[24]="25 Nginx";Language[25]="26 Public domain";Language[26]="27 Private domain";Language[27]="28 website";Language[28]="29 Change Password";Language[29]="30 Cấu hình gmail cho hệ thống";Language[30]="31 Inflow";Language[31]="32 Outflow";Language[32]="33 aaaaaa";Language[33]="34 a";Language[34]="35 a";Language[35]="36 a";Language[36]="37 aaa";Language[37]="38 aaa";Language[38]="39 aaa";Language[39]="40 aaa";Language[40]="41 aaa";
		break;
		default:break;
	}
}

export class VL {
	static Sidebar_Home = 3;
	static Sidebar_MyEquipment = 4;
	static Sidebar_LeaveRequest = 5;
	static Sidebar_Employees = 6;
	static Sidebar_Announcements = 7;
	static Sidebar_Hrm = 8;
	static Sidebar_Recruitment = 9;
	static Sidebar_Shifts = 10;
	static Sidebar_Timetracker = 11;
	static Sidebar_Equipment = 12;
	static Sidebar_Leavetracker = 13;
	static Sidebar_Attendance = 14;
	static Sidebar_FinancialAccounting = 15;
	static Sidebar_FundAccount = 16;
	static Sidebar_Receivable = 17;
	static Sidebar_SubmitFund = 18;
	static Sidebar_ExpenditurePlanning = 19;
	static Sidebar_Payable = 20;
	static Sidebar_Expenses = 21;
	static Sidebar_PayrollClerk = 22;
	static Sidebar_Report = 23;
	static Sidebar_Config_Nginx = 24;
	static Sidebar_Config_PublicDomain = 25;
	static Sidebar_Config_PrivateDomain = 26;
	static Sidebar_Config_PathWebsite = 27;
	static Sidebar_Config_ChangePassword = 28;
	static Sidebar_Config_GmailSender = 29;
	static Sidebar_Inflow = 30;
	static Sidebar_Outflow = 31;
	static Sidebar_3 = 32;
	static Sidebar_4 = 33;
	static Sidebar_5 = 34;
	static Sidebar_6 = 35;
	static Home_Employee_1 = 36;
	static Home_Employee_2 = 37;
	static Home_Owner_1 = 38;
	static Employees_1 = 39;
	static Employees_2 = 40;
}
