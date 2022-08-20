import React from "react";
import { createRoot } from "react-dom/client"
import Page from "./Page";
import "./styles/main.scss"
const App = () => (
    <Page/>
)
const container = document.getElementById("root")
const root  = createRoot(container)
root.render(<App/>)