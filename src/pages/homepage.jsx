import React, {useState} from "react";
import Pokemon from "../elements/pokemonicon";
const Homepage = ({pokemon}) => {
    const [test, setTest] = useState(false)
    const Test2 = () => (
        <div className="test-div">
            Hello
        </div>
    )
    return (
        <>
            <div className="home-show">
                <div className="card card-packs">
                    <div className="card-text">
                        <h1>Open packs</h1>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quam earum amet ullam possimus?</p></div>
                    </div>
                </div>
                <div className="card card-sell">
                    <div className="card-text ">
                        <h1>Sell your pokemons</h1>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quam earum amet ullam possimus?</p></div>
                    </div>
                </div>
                <div className="card card-trade">
                    <div className="card-text">
                        <h1>Buy new pokemons</h1>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis quam earum amet ullam possimus?</p></div>
                    </div>
                </div>
            </div>
            <button className="submit" onClick={() => setTest(prevState => !prevState)}>See animation</button>
            {test && <Test2/>}
        </>
    )
}
export default Homepage