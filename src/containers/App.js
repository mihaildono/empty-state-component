import React, { Component } from 'react';
import logo from '../static/images/logo.png';
import '../styles/App.css';


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <a href="/">
                        <img src={logo} className="logo-img"/>
                    </a>
                    <p>ChatChamp EmptyStateView Demo</p>
                </div>
                <div className="header">
                    <h2 className="header-title">
                        Items
                    </h2>
                </div>
            </div>
        );
    }
};
