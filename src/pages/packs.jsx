import React from "react";
import Pack from "./elements/packicon";
const Packs = ({packs}) => {
    const Packcollection = () => (packs.map((item, i) => <Pack props={item} key={i}/>))
    return(
        <>
            <div className="pack-page-content">
                <Packcollection/>
            </div>
        </>
    )
}
export default Packs
