/**
 * Created by tanDong on 2017/2/27.
 */
import {combineReducers} from "redux"
import {createReducer} from "redux-act"
import {reducer as form} from "redux-form"
import {login} from "../action"
const loginReducer = createReducer({
    [login]: (state, payload) => {
        return {userName: payload.userNameR, password: payload.passwordR}
    }
}, {userName: 'lhy', password: '123'})
export default combineReducers({form, loginReducer})