import { connect } from 'react-redux';
import React, {Component} from 'react';

/*USED COMPONENTS*/
import Notifications from '../components/notification';
import Settings from '../components/settings';
import Profile from '../components/profile';
import Home from '../components/home';

class Hello extends Component {

    display = () => {
        if (!this.props.display){
            return "Click a Navigation to get started!";
        }
        switch (this.props.display.display) {
            case "settings":
                return <Settings/>;
            case "profile":
                return <Profile/>;
            case "notifications":
                return <Notifications/>;
            default:
                return <Home/>
        }
    }

    render() {
        return (
            <div>
                <h2>{ this.props.hello.message }</h2>
                {this.display()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        hello: state.hello,
        display: state.currentDisplay,
    }
}


export default connect(mapStateToProps)(Hello);