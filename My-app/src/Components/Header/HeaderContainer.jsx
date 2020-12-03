import React from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import {setAuthUserData, SetAuthorithationData} from '../../state/authReducer'



class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.SetAuthorithationData()
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

export default connect ( mapStateToProps, { setAuthUserData, SetAuthorithationData } ) (HeaderContainer);