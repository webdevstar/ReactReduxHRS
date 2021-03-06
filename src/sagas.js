import {takeLatest} from 'redux-saga/effects';
import * as constants from './redux/constants';
import {loginRequest, isAlreadyLoggedIn, forgotPassword, logout} from './redux/auth/actions';
import {holidayList, addHoliday, holidayType, deleteHoliday} from './redux/holidays/actions';
import {getAttendanceUploadSettings, addAttendanceUploadSettings, deleteAttendanceUploadSettings, requestResetPasswordSetting, requestResetPasswordStatus, requestClearResetPasswordData } from './redux/settings/actions';
import { getTeamStats, getMonthlyReportAllUsers, getEmployeLifeCycle, getEmployeeHours, getEmployeeMonthlyHours, getEmployeePerformance, getUserIdList, getLeastActiveEmp} from './redux/manageUsers/actions/dashboard';
import {userMonthlyAttendance} from './redux/attendance/actions/monthlyAttendance';
import {getUserDayAttendance, userAttendanceStatus} from './redux/attendance/actions/attendanceRequests';
import {getUserDaySummary, updateUserDaySummary, empUpdateDaySummary} from './redux/attendance/actions/userDaySummary';
import {getUsersList} from './redux/generic/actions/usersList';
import {fetchUserPolicyDocument, submitPolicyDocs, updateReadStatus, fetchPolicyDocument} from './redux/policyDocuments/actions/index';
import {getTeamList, saveTeam, getTeam} from './redux/team/actions/teamList';
import {healthStatsRequest, healthStatsSecretKeyListRequest, healthStatsAddSecretKeyRequest, healthStatsDeleteSecretKeyRequest, healthStatsRegenerateSecretKeyRequest, deleteHealthStats, requestStatsHistory, requestStatsLeave} from './redux/healthStats/actions/healthStats';

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.IS_ALREADY_LOGGED_IN, isAlreadyLoggedIn);
  yield takeLatest(constants.REQUEST_FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(constants.REQUEST_LOGOUT, logout);

  yield takeLatest(constants.REQUEST_HOLIDAYSLIST, holidayList);
  yield takeLatest(constants.REQUEST_ADDHOLIDAYS, addHoliday);
  yield takeLatest(constants.REQUEST_HOLIDAYTYPE, holidayType);
  yield takeLatest(constants.REQUEST_DELETEHOLIDAYS, deleteHoliday);

  yield takeLatest(constants.REQUEST_USER_ATTENDANCE, userMonthlyAttendance);
  yield takeLatest(constants.REQUEST_USER_DAY_SUMMARY, getUserDaySummary);
  yield takeLatest(constants.REQUEST_UPDATE_USER_DAY_SUMMARY, updateUserDaySummary);

  yield takeLatest(constants.REQUEST_USER_ATTENDANCE_REQUEST, getUserDayAttendance);
  yield takeLatest(constants.REQUEST_USER_ATTENDANCE_STATUS, userAttendanceStatus);
  yield takeLatest(constants.REQUEST_UPDATE_EMP_DAY_SUMMARY, empUpdateDaySummary);

  yield takeLatest(constants.REQUEST_USERSLIST, getUsersList);
  yield takeLatest(constants.REQUEST_HEALTH_STATS, healthStatsRequest);
  yield takeLatest(constants.DELETE_HEALTH_STATS, deleteHealthStats);
  yield takeLatest(constants.REQUEST_STATS_HISTORY,requestStatsHistory)
  yield takeLatest(constants.REQUEST_HEALTH_STATS_SECRET_KEY_LIST, healthStatsSecretKeyListRequest);
  yield takeLatest(constants.REQUEST_HEALTH_STATS_ADD_SECRET_KEY, healthStatsAddSecretKeyRequest);
  yield takeLatest(constants.REQUEST_HEALTH_STATS_DELETE_SECRET_KEY, healthStatsDeleteSecretKeyRequest);
  yield takeLatest(constants.REQUEST_HEALTH_STATS_REGENERATE_SECRET_KEY, healthStatsRegenerateSecretKeyRequest);
  yield takeLatest(constants.REQUEST_STATS_LEAVE_HISTORY, requestStatsLeave);
  

  yield takeLatest(constants.REQUEST_TEAM_STATS, getTeamStats);
  yield takeLatest(constants.REQUEST_MONTHLY_REPORT_ALL_USERS, getMonthlyReportAllUsers);
  yield takeLatest(constants.REQUEST_EMP_LIFE_CYCLE, getEmployeLifeCycle);
  yield takeLatest(constants.REQUEST_EMP_HOURS, getEmployeeHours);
  yield takeLatest(constants.REQUEST_EMP_MONTHLY_HOURS, getEmployeeMonthlyHours);
  yield takeLatest(constants.REQUEST_EMP_PERFORMANCE, getEmployeePerformance);
  yield takeLatest(constants.REQUEST_USER_LIST, getUserIdList);
  yield takeLatest(constants.REQUEST_LEAST_ACTIVE_EMP, getLeastActiveEmp);
  
  yield takeLatest(constants.REQUEST_USER_POLICY_DOCUMENT, fetchUserPolicyDocument);

  yield takeLatest(constants.REQUEST_SUBMIT_DOCS, submitPolicyDocs);
  yield takeLatest(constants.REQUEST_UPDATE_READ, updateReadStatus);

  yield takeLatest(constants.REQUEST_POLICY_DOCUMENT, fetchPolicyDocument);
  yield takeLatest(constants.REQUEST_TEAM_LIST, getTeamList);
  yield takeLatest(constants.REQUEST_ADD_TEAM, saveTeam);
  yield takeLatest(constants.REQUEST_GET_TEAM, getTeam);

  yield takeLatest(constants.REQUEST_GET_ATTANDANCE_UPLOAD_SETTING, getAttendanceUploadSettings);
  yield takeLatest(constants.REQUEST_ADD_ATTANDANCE_UPLOAD_SETTING, addAttendanceUploadSettings);
  yield takeLatest(constants.REQUEST_DELETE_ATTANDANCE_UPLOAD_SETTING, deleteAttendanceUploadSettings);


  yield takeLatest(constants.REQUEST_RESET_PASSWORD_SETTING, requestResetPasswordSetting);
  yield takeLatest(constants.REQUEST_RESET_PASSWORD_STATUS, requestResetPasswordStatus);
  yield takeLatest(constants.REQUEST_CLEAR_RESET_PASSWORD_DATA, requestClearResetPasswordData);

}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
