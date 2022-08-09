import React from "react";
import Pack from "./elements/packicon";
const Packs = ({packs, user}) => {
    const Packlist= () => (packs.map((item, i) => <Pack props={item} key={i}/>))
    return(
        <>
            <div>
                <h4>Your balance: {user.balance}</h4>
            </div>
            <div className="pack-page-content">
                <Packlist/>
            </div>
        </>
    )
}
export default Packs
