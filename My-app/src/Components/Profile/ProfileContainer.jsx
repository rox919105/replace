import React from 'react';
import { connect } from 'react-redux'
import {setUserProfile, SetProfile} from '../../state/profileReducer'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12933
        };
        this.props.SetProfile(userId)
    }
    render(){
       /*  if (!this.props.isAuth) return <Redirect to={'/login'} /> */
       
        

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )

    }
   
}

const mapStateToProps = (state) => {
    
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,        
    }
}

export default compose (
    connect( mapStateToProps, {setUserProfile, SetProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

