import { useEffect, useState } from "react"
import Pokemon from "./elements/pokemonicon"
const Packpage = ({ props, user }) => {
    const Packcollection = () => (props.items.map((item, itemid) => <Pokemon key={itemid} pokemon={item}/>))
    const holder2 = {
                id: 1,
                name: "bulbasaur",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    }
    const openingAnimation ={
        "animationName": "openingAnimation",
        "animationDuration": "0.5s",
        "position": "relative",
    } 

    const [pokemon, setPokemon] = useState()
    const [drop, setDrop] = useState([])
    const hadleOpening = () => {
        setPokemon(holder2)
    } 

    useEffect(() => {
        pokemon && setDrop(prevState => ([ ...prevState, pokemon]))
    }, [pokemon])

    const Button = () => {
        return (
            <button onClick={hadleOpening} className="submit">
                Open pack for {props.price}
            </button>
        )
    }
    
    const Drop = () => {
        const displayDrop = drop.map((item, i) => <Pokemon pokemon={item} key={i}/>)
        return (
            <div className="drop">
                {displayDrop.slice(-7)}
            </div>
        )
    }
    return (
        <>
            <h1>{props.name}</h1>
            <div className="pack-collection">
                <h2>This pack contains:</h2>
                <Packcollection/>
            </div>
            <h4>Your balance: {user.balance}</h4>
            {user.name ? <Button/> : <h4>Please login to open packs</h4>}
            <Button/>
            {pokemon && <Pokemon style={openingAnimation} pokemon={pokemon}/>}
            {drop && <Drop/>}
        </>
    )
}
export default Packpage
