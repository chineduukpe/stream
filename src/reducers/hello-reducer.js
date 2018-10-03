import {NOTIFICATION_BUTTON_CLICKED, PROFILE_BUTTON_CLICKED, SETTING_BUTTON_CLICKED} from "../actions/types";

const initial_state =
   { message : "HELLO WORLD!"}
;

export const hello = (state = initial_state, action) =>{
    switch (action.type) {
        case SETTING_BUTTON_CLICKED:{
            return {message : "HEY THERE! You clicked the Settings!"}
            break;
        }
        case PROFILE_BUTTON_CLICKED:
            return {message : "SWEET! Now Change your profile here!"}
            break;
        case NOTIFICATION_BUTTON_CLICKED:
            return {message : "ALRIGHT HORSE! How do you like your information?"}

        default:
            return state;
    }
    return state;
}