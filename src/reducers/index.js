import { combineReducers } from 'redux';

import {hello} from './hello-reducer';
import {currentDisplay} from './reducer-display';

const allReducers = combineReducers({
    hello: hello,
    currentDisplay : currentDisplay
});

export default allReducers;