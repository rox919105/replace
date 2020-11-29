import React from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {setAuthUserData} from '../../state/authReducer'



class HeaderContainer extends React.Component{

    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                
                if (response.data.resultCode === 0) {
                    debugger
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render(){
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        login: state.auth.login,
        isAuth: state.auth.isAuth,
     }
}

export default connect ( mapStateToProps, { setAuthUserData } ) (HeaderContainer);