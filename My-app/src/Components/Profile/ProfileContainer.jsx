import React from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios'
import {setUserProfile} from '../../state/profileReducer'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
    componentDidMount() {
     
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
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
