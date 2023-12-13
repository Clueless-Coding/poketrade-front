import React from "react";
import {Link} from "react-router-dom"
const Nav = (props) => {
    return (
    <div className="nav--con">
        <ul>
            <li>
                <Link to="/">
                    <div id="nav-pic" className="nav-tab">
                        <img alt="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"/>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div id="nav-home" className="nav-tab">
                        Homepage
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/Packs">
                    <div id="nav-packs" className="nav-tab">
                        Packs
                    </div>
                </Link>
            </li>
            <li>
                <Link  to="/Profile">
                    <div id="nav-profile" className="nav-tab">
                        {props.token ? "Profile" : "Login"}
                    </div>
                </Link>
            </li>
        </ul>
    </div>
    )
}
export default Nav
