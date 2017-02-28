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
const Login = (props) => {
    const {handleSubmit, onSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Ons.List modifier="inset signIn">
                <Ons.ListItem>
                    <div className="center">
                        <Field type="text" name="userName" component={renderField} placeholder="输入账号"/>
                    </div>
                </Ons.ListItem>
                <Ons.ListItem>
                    <div className="center">
                        <Field type="text" name="password" component={renderField} placeholder="输入密码"/>
                    </div>
                </Ons.ListItem>
                <Ons.Button onClick={props.submit} modifier="large marginTLR" disabled={submitting}>登陆</Ons.Button>
            </Ons.List>
        </form>
    )
}
export default reduxForm({
    form: "login"
})(Login)
