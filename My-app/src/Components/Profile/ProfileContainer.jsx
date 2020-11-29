import React from 'react';
import { connect } from 'react-redux'
import {setUserProfile} from '../../state/profileReducer'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../Api/Api';



class ProfileContainer extends React.Component {
    componentDidMount() {
     
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12933
        }
        usersAPI.setProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }
    render(){
        
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )

    }
   
}


const mapStateToProps = (state) => {
    
    return{
        profile: state.profilePage.profile,        
    }
}

let withRouterUrl = withRouter(ProfileContainer)

export default connect( mapStateToProps, {setUserProfile})(withRouterUrl)
