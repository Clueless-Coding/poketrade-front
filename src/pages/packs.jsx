import React from "react";
import Pack from "../elements/packicon";
const Packs = ({props}) => {
    const Packlayout = () => (props.map((item, i) => <Pack props={item} key={i}/>))
    return(
        <>
            <Packlayout/>
        </>
    )
}
export default Packs