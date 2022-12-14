import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Nav from "./Navbar";
import Profile from "./pages/profile";
import Login from "./pages/loginpage";
import Footer from "./footer";
import Packs from "./pages/packs";
import Packpage from "./pages/packopen";
import FooterExp from "./footer_expansion";
const Page = () => {

    const holder = [{
        name: "Default",
        price:  0,
        items: [
            {
                id: 1,
                name: "bulbasaur",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
            {
                id: 1,
                name: "bulbasaur",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            }
        ]
    },
    {       
        name: "Second",
        price:  0,
        items: [
            {
                id: 1,
                name: "bulbasaur",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
            {
                id: 1,
                name: "bulbasaur",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            }
        ]
    }]
    //there are no packs yet

    const [token, setToken] = useState()
    //const [pokemon, setPokemon] = useState()
    const [userAuth, setUserAuth] = useState({})
    const [user, setUser] = useState({})
    //Would be better if I could get rid of it

    const handleName = (value) => {
        setUserAuth(prevState => ({...prevState, username: value}))
    }
    const handlePas = (value) => {
        setUserAuth(prevState => ({...prevState, password: value}))
    }
    const handleconPas = (value) => {
        setUserAuth(prevState => ({...prevState, cPassword: value}))
    }

    const packPages = holder.map((item, i) => 
        <Route
            key={i}
            path={`/${item.name}`}
            element={<Packpage props={item}
            user={user}/>
            }
        />
    )

    //Login API call 
    const login = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://poketrade-production.up.railway.app/auth/login`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login:  userAuth.username,
                password: userAuth.password,
            })
        })
        const data = await response.json()
        if(data.success){ 
            setToken(data.data)
            localStorage.setItem("token", data.data)
            window.location.reload();
        }
    }
    //Register API call
    const register = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://poketrade-production.up.railway.app/auth/register`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: userAuth.username,
                password: userAuth.password,
                confirm_password: userAuth.cPassword
            })
        })
        const token = (await response.json()).data
        localStorage.setItem("token", token)
        console.log("succesfully registered") 
        window.location.reload();
    }
    //Checking if user logged in on page rendering
    const savedToken = localStorage.getItem("token")
    useEffect(() => {
        savedToken && getUser(savedToken)
        savedToken && setToken(savedToken)
    }, [])
    
    //Getting user's info
    const getUser = async(props) => {
        const response = await fetch(`https://poketrade-production.up.railway.app/users/@me`, {
            method: `GET`,
            headers: {
                'x-access-token': props
            }
        })
        const data = (await response.json())
        data.success ? setUser({...data.data}) : localStorage.removeItem("token")
    }
    return (
        <>
        <div className="canvas">
            <Router>
                <Nav token={token}/>
                <div className="content">
                    <Routes >
                        <Route 
                            path="/"
                            element={<Homepage/>}
                        />
                        <Route
                            path="/packs/*"
                            element={<Packs 
                                        packs={holder}
                                        user={user}
                            />}
                        />
                        <Route
                            path="/Profile"
                            element={token ?
                                <Profile user={user}/> :
                                <Login
                                    handlePas={handlePas}
                                    handleName={handleName}
                                    handleconPas={handleconPas}
                                    login={login}
                                    register={register}
                                />
                            }
                        />
                        {packPages}
                    </Routes>
                </div>
            </Router>
            <Footer/>
        </div>
        </>
    )
}
export default Page