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
import {API} from "./const"
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
    /*
    const getPacks = async () => {
        const response = await fetch(`${API}` ,{
            method: `GET`,
        })
    holder = await response.json()
    }
    */
    //Login API call 
    const login = async (event) => {
        event.preventDefault()
        const response = await fetch(`${API}/auth/login`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:  userAuth.username,
                password: userAuth.password,
            })
        })
        const data = await response.json()
        if(response.status === 201){ 
            setToken(data.accessToken)
            localStorage.setItem("token", data.accessToken)
            window.location.reload();
        }
    }
    //Register API call
    const register = async (event) => {
        event.preventDefault()
        const response = await fetch(`${API}/auth/register`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userAuth.username,
                password: userAuth.password,
                confirmPassword: userAuth.cPassword
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
        //getPacks()
    }, [])
    
    //Getting user's info
    const getUser = async(props) => {
        const response = await fetch(`${API}/users/me`, {
            method: `GET`,
            headers: {
                'x-access-token': props
            }
        })
        const data = (await response.json())
        response.status === 200 ? setUser({...data}) : localStorage.removeItem("token")
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
                                        api={API}
                            />}
                        />
                        <Route
                            path="/Profile"
                            element={
                                token ?
                                    <Profile user={user} /> :
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
/*
                      uuuuuuuuuuuuuuuuuuuuu.
                   .u$$$$$$$$$$$$$$$$$$$$$$$$$$W.
                 u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Wu.
               $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
              $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         `    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
           .i$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
           $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W
          .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W
         .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
         #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$.
         W$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$u       #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$~
$#      `"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$i        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$        #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#$.        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#
 $$      $iW$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$!
 $$i      $$$$$$$#"" `"""#$$$$$$$$$$$$$$$$$#""""""#$$$$$$$$$$$$$$$W
 #$$W    `$$$#"            "       !$$$$$`           `"#$$$$$$$$$$#
  $$$     ``                 ! !iuW$$$$$                 #$$$$$$$#
  #$$    $u                  $   $$$$$$$                  $$$$$$$~
   "#    #$$i.               #   $$$$$$$.                 `$$$$$$
          $$$$$i.                """#$$$$i.               .$$$$#
          $$$$$$$$!         .   `    $$$$$$$$$i           $$$$$
          `$$$$$  $iWW   .uW`        #$$$$$$$$$W.       .$$$$$$#
            "#$$$$$$$$$$$$#`          $$$$$$$$$$$iWiuuuW$$$$$$$$W
               !#""    ""             `$$$$$$$##$$$$$$$$$$$$$$$$
          i$$$$    .                   !$$$$$$ .$$$$$$$$$$$$$$$#
         $$$$$$$$$$`                    $$$$$$$$$Wi$$$$$$#"#$$`
         #$$$$$$$$$W.                   $$$$$$$$$$$#   ``
          `$$$$##$$$$!       i$u.  $. .i$$$$$$$$$#""
             "     `#W       $$$$$$$$$$$$$$$$$$$`      u$#
                            W$$$$$$$$$$$$$$$$$$      $$$$W
                            $$`!$$$##$$$$``$$$$      $$$$!
                           i$" $$$$  $$#"`  """     W$$$$
                                                   W$$$$!
                      uW$$  uu  uu.  $$$  $$$Wu#   $$$$$$
                     ~$$$$iu$$iu$$$uW$$! $$$$$$i .W$$$$$$
             ..  !   "#$$$$$$$$$$##$$$$$$$$$$$$$$$$$$$$#"
             $$W  $     "#$$$$$$$iW$$$$$$$$$$$$$$$$$$$$$W
             $#`   `       ""#$$$$$$$$$$$$$$$$$$$$$$$$$$$
                              !$$$$$$$$$$$$$$$$$$$$$#`
                              $$$$$$$$$$$$$$$$$$$$$$!
                            $$$$$$$$$$$$$$$$$$$$$$$`
                             $$$$$$$$$$$$$$$$$$$$"
*/