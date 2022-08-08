import React from "react";
const Pokemon = ({ pokemon, style }) => {
    return (
        <div style={style && style} className="pokemon-ico">
            <img alt="" src={pokemon.image}/>
            Name: {pokemon.name}
            <br></br>
            Id: {pokemon.id}
        </div>
) 
}
export default Pokemon