/**
 * Created by tanDong on 2017/2/27.
 */
import React from "react"
import * as Ons from "react-onsenui"
import Navigator from "./Navigator"
import LoginPage from "./LoginPage"
const Test = () => {
    return (
        <h1>Td</h1>
    )
}
const renderTabs = (appNavigator) => {
    return [
        {
            content: <Ons.Page key="login">
                <Navigator initialRoute={{comp: LoginPage, props: {key: "login"}}} app={appNavigator}/>
            </Ons.Page>,
            tab: <Ons.Tab key="login" label="登入" icon="ion-home"/>
        },
        {
            content: <Ons.Page key="home">
                <Navigator initialRoute={{comp: Test, props: {key: "test"}}} app={appNavigator}/>
            </Ons.Page>,
            tab: <Ons.Tab key="test" label="测试" icom="ion-plus"/>
        }
    ]
}
const Tabs = (props) => {
    return (
        <Ons.Page>
            <Ons.Tabbar index={props.index} renderTabs={() => renderTabs(props.navigator)}/>
        </Ons.Page>
    )
}
export default Tabs