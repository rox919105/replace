import React from 'react';
import { connect } from 'react-redux'
import {setUserProfile, SetProfile, getUserStatus, updateUserStatus} from '../../state/profileReducer'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12933
        };
        this.props.SetProfile(userId)
        this.props.getUserStatus(userId)
    }
    render(){

        return (
            <Profile {...this.props} profile={this.props.profile}
            updateUserStatus={this.props.updateUserStatus}
            status={this.props.status} />
        )

    }
   
}

const mapStateToProps = (state) => {
    
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status       
    }
}

export default compose (
    connect( mapStateToProps, {setUserProfile, SetProfile, getUserStatus, updateUserStatus}),
    withRouter)(ProfileContainer)

