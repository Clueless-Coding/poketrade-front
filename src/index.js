import React from "react";
import ReactDOM from "react-dom/client"
import Page from "./Page";
import "./styles/main.scss"
const App = () => (
    <Page/>
)
const container = document.getElementById("root")
const root  = ReactDOM.createRoot(container)
root.render(<App/>)