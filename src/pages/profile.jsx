import React from "react";
import Pokemon from "./elements/pokemonicon";
import { avatar } from "../const";
import { API } from "../const";
const Profile = ({user}) => {
    const logOut = () => {
        localStorage.clear("token")
        window.location.reload()
    }
    const handleSell = async (props) => {
        console.log(props)
        //Will be API call for quick sell
    }
    const Inventory = () => (user.pokemons && user.pokemons.map((item, itemid) => <Pokemon key={itemid} pokemon={item} sell={handleSell}/>))
    return (
    <>
        <div className="profile">
            <div className="profile-user">
                <img alt="" src={avatar}/>
                <h2>Name: {user.name}</h2>
                <h2>Balance: {user.balance}</h2>
                <h3>Amount: {user.pokemons && user.pokemons.length}</h3>
            </div>
            <button className="submit" onClick={logOut}>Log out</button>
            <h1>{user?.pokemons?.length ? "Your collection" : "You dont have yet any pokemons"}</h1>
            <div className="inventory">
                <Inventory/>
            </div>
        </div>
    </>
    )
}
export default Profile
