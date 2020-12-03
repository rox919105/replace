import React from 'react';
import { connect } from 'react-redux'
import {setUserProfile, SetProfile} from '../../state/profileReducer'
import Profile from './Profile';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
    componentDidMount() {
     
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12933
        }
        this.props.SetProfile(userId)
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

export default connect( mapStateToProps, {setUserProfile, SetProfile})(withRouterUrl)
