import React from "react";
import { Routes, Route } from "react-router-dom";
import Pack from "../elements/packicon";
import Packpage from "./packopen";
const Packs = ({props}) => {
    const packPages = props.map((item, i) => <Route key={i} path={`/${item.name}`} element={<Packpage props={item}/>}/>)
    const Packcollection = () => (props.map((item, i) => <Pack props={item} key={i}/>))
    return(
        <>
            <Routes>
                {packPages}
            </Routes>
            <Packcollection/>
        </>
    )
}
export default Packs
