import React, { Component } from 'react';
import logo from './communityBank.svg';
import './Login.css';


export default class Login extends Component {
    render() {
        return (
            <div className='App'>
                <img src={logo} alt=""/>
                <a href="https://daveguymon.auth0.com/login?client=XG4xGX2Rx49V75BHuAqTBOpFMszx3gys&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2Fauth%2Fcallback&response_type=code&state=qHDcSV-go9f9BDAi2ZIokYFQiizsMWpR"><button>Login</button></a>
            </div>
        )
    }
}
