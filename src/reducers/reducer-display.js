import {
    HOME_BUTTON_CLICKED,
    NOTIFICATION_BUTTON_CLICKED,
    PROFILE_BUTTON_CLICKED,
    SETTING_BUTTON_CLICKED
} from "../actions/types";
import Home from '../components/home';

export const currentDisplay = (state = null, action) =>{
    switch (action.type) {
        case HOME_BUTTON_CLICKED:
        {
            return {display: 'home'};
        }
        case SETTING_BUTTON_CLICKED:
            return {display: 'settings'};
        case PROFILE_BUTTON_CLICKED:
            return {display: 'profile'};
        case NOTIFICATION_BUTTON_CLICKED:
            return {display: 'notifications'}
        default:
    }
    return state;
}