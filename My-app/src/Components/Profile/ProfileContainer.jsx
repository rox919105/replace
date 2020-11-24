import React from 'react';
import { connect } from 'react-redux'
import * as axios from 'axios'
import {setUserPage} from '../../state/profileReducer'
import Profile from './Profile';



class ProfileContainerAPI extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserPage(response.data);
            });
    }
    render(){
        
        return (
            <Profile {...this.props} />
        )

    }
   
}


const mapStateToProps = (state) => {
    
    return{
        profile: state.profilePage.profile
    }
}

const ProfileContainer = connect( mapStateToProps, {setUserPage})(ProfileContainerAPI)

export default ProfileContainer;