import { useEffect, useState } from "react"
import Pokemon from "./elements/pokemonicon"
const Packpage = ({ props, user }) => {
    const Packcollection = () => (props.items.map((item, itemid) => <Pokemon key={itemid} pokemon={item}/>))
    const [pokemon, setPokemon] = useState()
    const [drop, setDrop] = useState([])
    const hadleOpening = async () => {
        const smth = Math.floor(Math.random() * 151)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${smth}`, {
            method: `GET`,
        })
        const data = (await response.json())
        const holder = {
            id: data.id,
            name: data.name,
            image: data.sprites.other[`official-artwork`].front_default
        }
        console.log(data)
        setPokemon(holder)
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
                {displayDrop.slice(-10)}
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
            {pokemon && <Pokemon pokemon={pokemon}/>}
            <h2>You've gotten so far:</h2>
            {drop && <Drop/>}
        </>
    )
}
export default Packpage
