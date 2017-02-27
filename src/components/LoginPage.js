/**
 * Created by tanDong on 2017/2/27.
 */
import React from "react"
import Login from "./Login"
import * as Ons from "react-onsenui"
import {connect} from "react-redux"
import Register from "../containers/Register"
import * as ons from "onsenui"
const LoginSuccessPage = (props) => {
    return (
        <Ons.Page renderToolbar={() => <Ons.Toolbar>
            <div className="left"><Ons.BackButton/></div>
            <div className="center">登入成功</div>
        </Ons.Toolbar>}>
            <h1 style={{textAlign: "center"}}>{props.user}登入成功</h1>
        </Ons.Page>
    )
}
const LoginPage = (props) => {
    const {userName, password}=props
    const handleSubmit = (value) => {
        if (userName === value.username) {
            props.navigator.pushPage({
                comp: LoginSuccessPage,
                props: {key: "success", user: userName}
            })
        } else {
            ons.notification.alert("用户名错误，登入失败")
        }
    }
    return (
        <Ons.Page renderToolbar={() => (
            <Toolbar>
                <div className="left"><Ons.BackButton/></div>
                <div className="content">登入</div>
                <div><Ons.Button onClick={() => props.navigator.pushPage({
                    comp: Register,
                    props: {key: "register"}
                })}>注册</Ons.Button></div>
            </Toolbar>
        )}>
            <Login onSubmit={handleSubmit}/>
        </Ons.Page>
    )
}