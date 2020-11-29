import React from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import {setAuthUserData} from '../../state/authReducer'
import { usersAPI } from '../../Api/Api'



class HeaderContainer extends React.Component{

    componentDidMount() {
        
        usersAPI.setAuth()
            .then(data => {
                
                if (data.resultCode === 0) {
                    debugger
                    let {id, email, login} = data.data;
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
        isAuth: state.auth.login,
     }
}

export default connect ( mapStateToProps, { setAuthUserData } ) (HeaderContainer);