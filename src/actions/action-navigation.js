
import {
    HOME_BUTTON_CLICKED,
    NOTIFICATION_BUTTON_CLICKED,
    PROFILE_BUTTON_CLICKED,
    SETTING_BUTTON_CLICKED
} from "./types";

export const homeClicked = () => {
    return{
        type: HOME_BUTTON_CLICKED,
        payload: null
    }
}

export const settingClicked = () => {
    return{
        type: SETTING_BUTTON_CLICKED,
        payload: null
    }
}

export const profileClicked = () => {
    return{
        type: PROFILE_BUTTON_CLICKED,
        payload: null
    }
}

export const notificationClicked = () => {
    return{
        type: NOTIFICATION_BUTTON_CLICKED,
        payload: null
    }
}