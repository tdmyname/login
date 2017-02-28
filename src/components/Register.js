/**
 * Created by tanDong on 2017/2/27.
 */
import React from "react"
import * as Ons from "react-onsenui"
import {Field, reduxForm} from "redux-form"
const renderField = ({input, type, placeholder}) => {
    return (
        <Ons.Input {...input} type={type} placeholder={placeholder}/>
    )
}
const validate = (value) => {
    const error = {}
    if (!value.userNameR) {
        error.username = "Required"
    }
    if (!value.passwordR) {
        error.password = "Required"
    }
    return error
}
const Register = (props) => {
    const {handleSubmit, onSubmit, invalid, submitting}=props
    return (
        <Ons.Page renderToolbar={() => (
            <Ons.Toolbar>
                <div className="left"><Ons.BackButton/></div>
                <div className="center">注册{props.name}</div>
            </Ons.Toolbar>
        )}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Ons.List modifier="inset signIn">
                    <Ons.ListItem>
                        <div className="center">
                            <Field name="userNameR" component={renderField} placeholder="输入账号"/>
                        </div>
                    </Ons.ListItem>
                    <Ons.ListItem>
                        <div className="center">
                            <Field name="passwordR" component={renderField} placeholder="输入密码"/>
                        </div>
                    </Ons.ListItem>
                </Ons.List>
                <Ons.Button onClick={props.submit} modifier="large marginTLR"
                            disabled={invalid | submitting}>注册</Ons.Button>
            </form>
        </Ons.Page>
    )
}
export default reduxForm({
    form:"register" ,validate
})(Register)