import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {homeClicked, notificationClicked, profileClicked, settingClicked} from "../actions/action-navigation";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li onClick={() => this.props.home()}>Home</li>
                    <li onClick={() => this.props.setting()}>Settings</li>
                    <li onClick={() => this.props.notification()}>Notifications</li>
                    <li onClick={() => this.props.profile()}>Profile</li>
                </ul>
            </nav>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        home: homeClicked,
        setting: settingClicked,
        notification : notificationClicked,
        profile: profileClicked
    },dispatch);
}

export default connect(null,matchDispatchToProps)(Navigation);