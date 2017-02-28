/**
 * Created by tanDong on 2017/2/27.
 */
import React from "react"
import {connect} from "react-redux"
import Register from "../components/Register"
import * as Ons from "react-onsenui"
import {Field, reduxForm} from "redux-form"
import {login} from"../action"
const RegisterData = (props) => {
    const {login}=props
    const handleSubmit = (value) => {
        login(value)
    }
    return (
        <Register onSubmit={handleSubmit}/>
    )
}
export default connect(state=>({userName:state.loginReducer.userName}),{login})(RegisterData)


