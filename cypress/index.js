import * as helpers from './helper';
import * as visits from './visitRoutes';

export const click = helpers.click;
export const type = helpers.type;
export const scrollTo = helpers.scrollTo;
export const wait = helpers.wait;
export const contains = helpers.contains;
export const signin = helpers.signin;
export const shouldBeVisible = helpers.shouldBeVisible;
export const shouldNotBeVisible = helpers.shouldNotBeVisible;

export const visitMailTemplates = visits.visitMailTemplates;

export const urls = {
  baseUrl:                'http://localhost:3000/#/',
  login:                  'page_login',
  home:                   'home',
  ManageDashboard:        'PageManageDashboard',
  monthlyAttendance:      'monthly_attendance',
  manageWorkingHours:     'manage_working_hours',
  logout:                 'logout',
  holidays:               'holidays',
  teamView:               'team_view',
  applyLeave:             'apply_leave',
  manageLeaves:           'manage_leaves',
  myLeaves:               'my_leaves',
  disabledEmployes:       'disabled_employes',
  manageUserWorkingHours: 'manage_user_working_hours',
  manageUserPendingHours: 'manage_user_pending_hours',
  leavesSummary:          'leaves_summary',
  salary:                 'salary',
  manageSalary:           'manage_salary',
  myProfile:              'my_profile',
  myInventory:            'my_inventory',
  manageUsers:            'manage_users',
  manageRoles:            'manage_roles',
  managePayslips:         'manage_payslips',
  forgotPassword:         'forgot_password',
  documents:              'documents',
  uploadAttendance:       'uploadAttendance',
  viewSalary:             'view_salary',
  policyDocuments:        'policy_documents',
  uploadPolicyDocuments:  'upload_policy_documents',
  addVariables:           'add_variables',
  mailTemplates:          'mail_templates',
  inventorySystem:        'inventoryOverviewDetail',
  attendanceReq:          'attendanceReq'
};

export const monthName = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const month = (month) => {
  return monthName[(new Date()).getMonth() + month];
};
export const year = (year) => {
  return (new Date()).getFullYear() + year;
};

export const user = {
  admin: {
    username: 'arun',
    password: 'java@123'
  },
  user: {
    username: 'atul',
    password: 'java@123'
  },
  userWhiteSpace: {
    username: 'atul       ',
    password: 'java@123'
  },
  hr: {
    username: 'deepak',
    password: 'java@123'
  },
  hrWrongPassword: {
    username: 'deepak',
    password: 'wrongpassword'
  },
  userWrongPassword: {
    username: 'atul',
    password: 'wrongpassword'
  },
  adminWrongPassword: {
    username: 'admin',
    password: 'wrongpassword'
  },
  blankField: {
    username: ' ',
    password: ' '
  }
};

export const apiUrls = {
  BASE_URL:              'http://dev.hr.excellencetechnologies.in/',
  apiUrl:                'http://dev.hr.excellencetechnologies.in/hr/attendance/API_HR/api.php',
  otherApiUrl:           'http://dev.hr.excellencetechnologies.in/hr/attendance/sal_info/api.php',
  apiUrlSalary:          'http://dev.hr.excellencetechnologies.in/hr/attendance/sal_info',
  loginPageUrl:          'http://dev.hr.excellencetechnologies.in/hr',
  uploadUrl:             'http://dev.hr.excellencetechnologies.in/hr/attendance/sal_info/upload_file.php',
  uploadLeaveUrl:        'http://dev.hr.excellencetechnologies.in/hr/attendance/API_HR/upload_leave_doc.php',
  uploadAttendanceUrl:   'http://dev.hr.excellencetechnologies.in/hr/attendance/upload_form.php',
  pdfUrl:                'http://dev.hr.excellencetechnologies.in/hr/attendance/sal_info/',
  uploadEmailAttachment: 'http://dev.hr.excellencetechnologies.in/hr/attendance/sal_info/upload_file_attachment.php',
  transferLink:          'http://dev.hr.excellencetechnologies.in/hr/attendance/sal_info/display_user_info.php',
  expressApiUrl:         'http://dev.hr.excellencetechnologies.in/hr/attendance/API_HR/express_api_call.php',
  expressRequestUrl:     'http://5.9.144.226:3017'
};
