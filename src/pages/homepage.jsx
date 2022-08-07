import React, {useState} from "react";
import { Link } from "react-router-dom";
import Pokemon from "../elements/pokemonicon";
const Homepage = ({pokemon}) => {
    return (
        <>
            <div className="home-show">
                <div className="card card-packs">
                    <Link to="/Packs">
                        <div className="card-text">
                            <h1>Open packs</h1>
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quam earum amet ullam possimus?</p></div>
                        </div>
                    </Link>
                </div>
                <div className="card card-sell">
                    <Link to="/Profile">
                        <div className="card-text ">
                            <h1>Sell your pokemons</h1>
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quam earum amet ullam possimus?</p></div>
                        </div>
                    </Link>
                </div>
                <div className="card card-trade">
                    <div className="card-text">
                        <h1>Buy new pokemons</h1>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quam earum amet ullam possimus?</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage