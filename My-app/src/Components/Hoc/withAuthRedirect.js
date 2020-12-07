import { Component } from "react";
import { connect } from "react-redux";
import React from 'react';
import { Redirect  } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent
}