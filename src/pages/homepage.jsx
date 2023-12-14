import React, {useState} from "react";
import { Link } from "react-router-dom";
import Pokemon from "./elements/pokemonicon";
const Homepage = ({pokemon}) => {
    return (
        <>
            <div className="home-show">
                <div className="card card-packs">
                    <Link to="/Packs">
                        <div className="card-text">
                            <h1>Open packs</h1>
                            <div><p>Open pokemons and collect them in your inventory</p></div>
                        </div>
                    </Link>
                </div>
                <div className="card card-sell">
                    <Link to="/Profile">
                        <div className="card-text ">
                            <h1>Sell your pokemons</h1>
                            <div><p>You can quick sell your pokemons or sell them on trade market</p></div>
                        </div>
                    </Link>
                </div>
                {
                /*
                <div className="card card-trade">
                    <div className="card-text">
                        <h1>Buy new pokemons</h1>
                        <div><p>Buy pokemons you want on trade market instead trying to get them from packs</p></div>
                    </div>
                </div>
                */
                }
            </div>
        </>
    )
}
export default Homepage
                