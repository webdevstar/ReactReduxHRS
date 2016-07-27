import React from 'react';
import { connect } from 'react-redux'
import { Router, browserHistory, Link, withRouter } from 'react-router'

import * as _ from 'lodash'
import {notify} from '../../services/index'

import Menu from '../../components/generic/Menu'
import LoadingIcon from '../../components/generic/LoadingIcon'
import UsersList from '../../components/attendance/UsersList'

import * as actions_login from '../../actions/login/index'
import * as actions_usersList from '../../actions/user/usersList'
import * as actions_monthlyAttendance from '../../actions/user/monthlyAttendance'
import * as actions_userDaySummary from '../../actions/user/userDaySummary'

import * as actions_workingHoursSummary from '../../actions/admin/workingHoursSummary'



import WorkingHoursSummary from '../../components/attendance/WorkingHoursSummary'

import UserDaySummary from '../../components/attendance/UserDaySummary'

class ManageWorkingHours extends React.Component {
    constructor( props ){
        super( props );

        this.props.onIsAlreadyLogin()

        this.state = {
            "defaultUserDisplay" : "",
            "daysummary_userid" : "",
            "daysummary_date" : "",
        }

        this.onWorkingHoursChange = this.onWorkingHoursChange.bind( this )
    }
    componentWillMount(){
        let d = new Date();
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        this.props.onWorkingHoursSummary( year, month )
    }
    componentWillReceiveProps( props ){
        if( props.logged_user.logged_in == -1 ){
            this.props.router.push('/logout');
        }else{
            if( props.logged_user.role == 'Admin' || props.logged_user.role == 'Guest' ){
                //this.props.onUsersList( )
            }else{
                this.props.router.push('/monthly_attendance');    
            }
        }

        if( props.workingHoursSummary.status_message != ''){
            notify( props.workingHoursSummary.status_message ); 
        }

    }
    onWorkingHoursChange( date, hours ){
        if( hours == '' ){

        }else{
            this.props.onUpdateDayWorkingHours( date, hours ).then( 
            (data) => {
                
            },(error) => {
                notify( error );
            })    
        }
        
    }
  	render(){
		return(
    		<div>
    			<Menu {...this.props }/>

                <UserDaySummary userid={this.state.daysummary_userid} date={this.state.daysummary_date} {...this.props}/>



  				<div id="content" className="app-content box-shadow-z0" role="main">
    				<div className="app-header white box-shadow">
						<div className="navbar">
    						<a data-toggle="modal" data-target="#aside" className="navbar-item pull-left hidden-lg-up">
      							<i className="material-icons">&#xe5d2;</i>
    						</a>
    						<div className="navbar-item pull-left h5" id="pageTitle">Manage Working Hours</div>
						</div>
    				</div>
					<div className="app-footer">
  						<div></div>
					</div>
    				<div className="app-body" id="view">

            			<div className="row">
            				<div className="col-12">
            					<LoadingIcon {...this.props}/>
            				</div>
            			</div>
						<div className="padding">
							
                            <div className="row">
                                <div className="col-md-12">
                                    <WorkingHoursSummary {...this.props}  onWorkingHoursChange = { this.onWorkingHoursChange }/>
                                </div>
                            </div>
	            		</div>
							
						</div>
					</div>
    			
    		</div>
    	)
    }
}

function mapStateToProps( state ){
	return {
        frontend : state.frontend.toJS(),
        logged_user : state.logged_user.toJS(),
        //monthlyAttendance : state.monthlyAttendance.toJS(),
        userDaySummary : state.userDaySummary.toJS(),
        workingHoursSummary : state.workingHoursSummary.toJS()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIsAlreadyLogin : () => {
            return dispatch( actions_login.isAlreadyLogin(  ))
        },
        onWorkingHoursSummary : ( year, month ) => {
            return dispatch( actions_workingHoursSummary.get_working_hours_summary( year, month ))
        },
        onUpdateDayWorkingHours : ( date, time ) => {
            return dispatch( actions_workingHoursSummary.update_day_working_hours( date, time ))
        }
    }
}

const VisibleManageWorkingHours = connect(
  mapStateToProps,
  mapDispatchToProps
)( ManageWorkingHours )

const RouterVisibleManageWorkingHours= withRouter( VisibleManageWorkingHours )

export default RouterVisibleManageWorkingHours