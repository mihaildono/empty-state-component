import React, { Component } from 'react';
import EmptyState from '../components/EmptyState';
import logo from '../static/images/logo.png';
import '../styles/App.css';

const CHATCHAMP_URL = 'https://www.chatchamp.com/'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        window.open(CHATCHAMP_URL, '_blank')
    }

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
                <EmptyState
                    type="empty"
                    textCollection={[
                        "You have no new items!",
                        "Take this time to explore new ways to improve your marketing."
                    ]}
                    buttonInfo={{
                        handler: this.handleOnClick,
                        text: "Explore"
                    }}
                />
            </div>
        );
    }
};
