import React from "react"; 
const Login = ( { login, register, handleName, handlePas, handleconPas,} ) => {
    return (
        <>
        <div>
            Please login
            <form onSubmit={login}>
                <input 
                    onChange={(item) => handleName(item.target.value)}
                    placeholder="Your login"
                >
                </input>
                <input
                    onChange={(item) => handlePas(item.target.value)} 
                    placeholder="Your pasword"
                >
                </input>
                <button className="submit">
                    Submit
                </button>
            </form>
            Or register
            <form onSubmit={register}>
                <input 
                    onChange={(item) => handleName(item.target.value)}
                    placeholder="Your login"
                >
                </input>
                <input
                    onChange={(item) => handlePas(item.target.value)} 
                    placeholder="Your password"
                >
                </input>
                <input
                    onChange={(item) => handleconPas(item.target.value)} 
                    placeholder="Confirm your password"
                >
                </input>
                <button className="submit">
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}
export default Login