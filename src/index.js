/**
 * Created by tanDong on 2017/2/27.
 */
import ReactDOM from "react-dom"
import React from "react"
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "./reducers"
import "../node_modules/onsenui/css/onsenui.css"
import "./css/couponStyle.css"
import "./css/onsen-css-components.css"
const elem = document.createElement("div")
document.body.appendChild(elem)
const Hello = () => {
    return <h1>Hello,world</h1>
}
const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    elem
)