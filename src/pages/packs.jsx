import React from "react";
import { useState } from "react";
import Pack from "./elements/packicon";
const Packs = ({packs, user}) => {
    const Packlist= () => (packs.map((item, i) => <Pack props={item} key={i}/>))
    const [filtered, setFiltered] = useState([])
    const handleFilter = (props) => {
        setFiltered(packs.filter(item => item.name.toLowerCase().includes(props.toLowerCase())).map((item, i) => <Pack props={item} key={i}/>))
    }
    return(
        <>
            <h4>Find specific pack</h4>
            <input 
                placeholder="Pack name"
                className="input"
                onChange={({target}) => handleFilter(target.value)}
            />
            <div>
                <h4>Your balance: {user.balance}</h4>
            </div>
            <div className="pack-page-content">
                {filtered.length > 0 ? filtered : <Packlist/>}
            </div>
        </>
    )
}
export default Packs
