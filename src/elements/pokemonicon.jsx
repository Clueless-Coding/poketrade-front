import React from "react";
const Pokemon = ({ pokemon }) => {
    return (
        <div className="pokemon-ico">
            <img alt="" src={pokemon.image}/>
            Name: {pokemon.name}
            <br></br>
            Id: {pokemon.id}
        </div>
) 
}
export default Pokemon