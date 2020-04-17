import { combineReducers } from 'redux';

import counter from "./counter";
import waiting from "./waiting";
import todo from "./todo";

import base from './base';
import contacts from './contacts';
import modal from './modal';

export default combineReducers({
    counter,
    waiting,
    todo,
    base,
    contacts,
    modal,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});