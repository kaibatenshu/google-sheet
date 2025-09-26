export const LanguageCode:string[] = ['en','vi','zh_TW','zh_CN','hi','es','es_la','fr_FR','ar','bn_IN','ru','pt_PT','pt_BR','ja_JP','ko_KR','af','th_TH','ms_MY','de_DE','nl_NL','tl_PH','lo_LA','km_KH','developing'];
export const LanguageName:string[] = ['English','Tiếng Việt','中 文 ( 台 灣 )','中 文 ( 简 体 )','हिदी','Español (España)','Español','Français (France)','‏العربية','বাংলা','Русский','Português (Portugal)','Português (Brasil)','日本語','한국어','Afrikaans','ภาษาไทย','Bahasa Melayu','Deutsch','Nederlands','Filipino','ພາສາລາວ','ភាសាខ្មែរ','Developer'];
export const Language:string[] = [];

export function setLanguage(languageID:number) {
	Language[3]="Home";Language[4]="My equipment";Language[5]="Leave request";Language[6]="Employees";Language[7]="Announcements";Language[8]="Human Resources";Language[9]="Recruitment";Language[10]="Shifts";Language[11]="Time tracker";Language[12]="Equipment";Language[13]="Leave Tracker";Language[14]="Attendance";Language[15]="Financial accounting";Language[16]="Fund account";Language[17]="Receivable";Language[18]="Submit fund";Language[19]="Expenditure planning";Language[20]="Payable";Language[21]="Expenses";Language[22]="PayrollClerk";Language[23]="Report";Language[24]="Nginx";Language[25]="Public domain";Language[26]="Private domain";Language[27]="website";Language[28]="Change Password";Language[29]="Cấu hình gmail cho hệ thống";Language[30]="Inflow";Language[31]="Outflow";Language[32]="aaaaaa";Language[33]="a";Language[34]="a";Language[35]="a";Language[36]="Entry-Level";Language[37]="Intern";Language[38]="Junior Associate";Language[39]="Assistant";Language[40]="Individual Contributor";Language[41]="Specialist";Language[42]="Analyst";Language[43]="Engineer";Language[44]="Senior Specialist/Senior Analyst/Senior Engineer";Language[45]="Team Lead/Supervisor";Language[46]="Coordinator";Language[47]="Supervisor";Language[48]="Team Lead";Language[49]="Manager";Language[50]="Assistant Manager/Deputy Manager";Language[51]="Manager";Language[52]="Project Manager";Language[53]="Director";Language[54]="Associate Director";Language[55]="Director";Language[56]="Senior Director";Language[57]="Vice President";Language[58]="Executive Vice President";Language[59]="Vice President";Language[60]="Senior Vice President";Language[61]="C-Suite / Executive Leadership";Language[62]="President";Language[63]="Chief Executive Officer";Language[64]="Chief Financial Officer";Language[65]="Chief Operating Officer";Language[66]="Chief Technology Officer";Language[67]="Chief Human Resources Officer";Language[68]="aaa";Language[69]="aaa";Language[70]="aaa";Language[71]="aaa";Language[72]="aaa";Language[73]="aaaaaa";Language[74]="Campaign";
	switch (languageID) {
		case 1:Language[3]="Trang chủ";Language[4]="Thiết bị của tôi";Language[5]="Nghỉ phép";Language[6]="Quản lý nhân viên";Language[7]="Thông báo";Language[8]="Hành chính nhân sự";Language[9]="Tuyển dụng";Language[10]="Ca làm";Language[11]="Quản lý giờ chấm công";Language[12]="Công cụ dụng cụ";Language[13]="Ngày phép";Language[14]="Chuyên cần";Language[15]="Tài chính kế toán";Language[16]="Tài khoản quỹ";Language[17]="Nợ phải thu";Language[18]="Nộp tiền";Language[19]="Kế hoạch chi";Language[20]="Nợ phải trả";Language[21]="Chi phí";Language[22]="Kế toán lương";Language[23]="Báo cáo";Language[28]="Đổi mật khẩu";Language[30]="Dòng thu";Language[31]="Dòng chi";Language[32]="ddddddddsfsdf";Language[36]="Cấp độ nhập môn";Language[37]="Thực tập sinh";Language[38]="Chuyên viên cấp dưới";Language[39]="Trợ lý";Language[40]="Chuyên viên độc lập";Language[41]="Chuyên viên";Language[42]="Chuyên viên phân tích";Language[43]="Kỹ sư";Language[44]="Chuyên viên cao cấp";Language[45]="Trưởng nhóm/Giám sát";Language[46]="Điều phối viên";Language[47]="Giám sát";Language[48]="Trưởng nhóm";Language[49]="Quản lý/Trưởng phòng";Language[50]="Trợ lý quản lý/Phó phòng";Language[51]="Quản lý";Language[52]="Quản lý dự án";Language[53]="Giám đốc";Language[54]="Phó Giám đốc";Language[55]="Giám đốc";Language[56]="Giám đốc cấp cao";Language[57]="Phó Chủ tịch/Phó Tổng Giám đốc";Language[58]="Phó Chủ tịch Điều hành";Language[59]="Phó Chủ tịch";Language[60]="Phó Chủ tịch cấp cao";Language[61]="Ban lãnh đạo cấp cao";Language[62]="Chủ tịch";Language[63]="Tổng Giám đốc điều hành";Language[64]="Giám đốc tài chính";Language[65]="Giám đốc vận hành";Language[66]="Giám đốc công nghệ";Language[67]="Giám đốc nhân sự";Language[68]="bbb";Language[69]="ccc";Language[70]="ddd";Language[71]="eee";Language[72]="fff";Language[73]="bbbb";Language[74]="Chiến dịch";
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
		case 23:Language[3]="4 Home";Language[4]="5 My equipment";Language[5]="6 Leave request";Language[6]="7 Employees";Language[7]="8 Announcements";Language[8]="9 Human Resources";Language[9]="10 Recruitment";Language[10]="11 Shifts";Language[11]="12 Time tracker";Language[12]="13 Equipment";Language[13]="14 Leave Tracker";Language[14]="15 Attendance";Language[15]="16 Financial accounting";Language[16]="17 Fund account";Language[17]="18 Receivable";Language[18]="19 Submit fund";Language[19]="20 Expenditure planning";Language[20]="21 Payable";Language[21]="22 Expenses";Language[22]="23 PayrollClerk";Language[23]="24 Report";Language[24]="25 Nginx";Language[25]="26 Public domain";Language[26]="27 Private domain";Language[27]="28 website";Language[28]="29 Change Password";Language[29]="30 Cấu hình gmail cho hệ thống";Language[30]="31 Inflow";Language[31]="32 Outflow";Language[32]="33 aaaaaa";Language[33]="34 a";Language[34]="35 a";Language[35]="36 a";Language[68]="69 aaa";Language[69]="70 aaa";Language[70]="71 aaa";Language[71]="72 aaa";Language[72]="73 aaa";
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
	static JobLevel_10 = 36;
	static JobLevel_11 = 37;
	static JobLevel_12 = 38;
	static JobLevel_13 = 39;
	static JobLevel_20 = 40;
	static JobLevel_21 = 41;
	static JobLevel_22 = 42;
	static JobLevel_23 = 43;
	static JobLevel_24 = 44;
	static JobLevel_30 = 45;
	static JobLevel_31 = 46;
	static JobLevel_32 = 47;
	static JobLevel_33 = 48;
	static JobLevel_40 = 49;
	static JobLevel_41 = 50;
	static JobLevel_42 = 51;
	static JobLevel_43 = 52;
	static JobLevel_50 = 53;
	static JobLevel_51 = 54;
	static JobLevel_52 = 55;
	static JobLevel_53 = 56;
	static JobLevel_60 = 57;
	static JobLevel_61 = 58;
	static JobLevel_62 = 59;
	static JobLevel_63 = 60;
	static JobLevel_70 = 61;
	static JobLevel_71 = 62;
	static JobLevel_72 = 63;
	static JobLevel_73 = 64;
	static JobLevel_74 = 65;
	static JobLevel_75 = 66;
	static JobLevel_76 = 67;
	static Home_Employee_1 = 68;
	static Home_Employee_2 = 69;
	static Home_Owner_1 = 70;
	static Employees_1 = 71;
	static Employees_2 = 72;
	static Recruitment_aaaa = 73;
	static Recruitment_Campaign = 74;
}
