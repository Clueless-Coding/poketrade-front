import { useEffect, useState } from "react"
import Pokemon from "./elements/pokemonicon"
import { API } from "../const"
const Packpage = ({ props, user, api }) => {
    const token = localStorage.getItem('token')
    const Packcollection = () => (props.items.map((item, itemid) => <Pokemon key={itemid} pokemon={item}/>))
    const [pokemon, setPokemon] = useState()
    const [drop, setDrop] = useState([])
    /*
    const getItems = async () => {
        const response = await fetch(`${API}/packs/items`, {
            method: `GET`,
        })
        const data = (await response.json())
        const Packcollection = () => (data.items.map((item, itemid) => <Pokemon key={itemid} pokemon={item}/>))
    }
    */
    const hadleOpening = async () => {
        const response = await fetch(`${API}/packs/open`, {
            method: `POST`,
            headers: {
                'x-access-token': token
            },
        })
        const data = (await response.json())
        setPokemon(data.pokemon)
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
            {pokemon && <Pokemon pokemon={pokemon}/>}
            <h2>You've gotten so far:</h2>
            {drop && <Drop/>}
        </>
    )
}
export default Packpage
