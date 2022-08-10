import React from "react";
const Pokemon = ({ pokemon, style, sell}) => {
    return (
        <div style={style && style} className="pokemon-ico">
            <img alt="" src={pokemon.image}/>
            Name: {pokemon.name}
            <br></br>
            Id: {pokemon.id}
            {sell && <button className="submit" onClick={() => sell(pokemon)}>Quick sell</button>}
        </div>
    ) 
}
export default Pokemon