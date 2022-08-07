import React from "react";
import Pack from "./elements/packicon";
const Packs = ({packs}) => {
    const Packcollection = () => (packs.map((item, i) => <Pack props={item} key={i}/>))
    return(
        <>
            <Packcollection/>
        </>
    )
}
export default Packs
