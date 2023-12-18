import React from "react"; 
const Login = ( { login, register, handleName, handlePas, handleconPas,} ) => {
    return (
        <>
        <div className="form">
            <form onSubmit={login}>
                <h2>Please login</h2>
                <div >
                    <input 
                        onChange={({target}) => handleName(target.value)}
                        placeholder="Your login"
                        className="input"
                    />
                    <input
                        type="password"
                        onChange={({target}) => handlePas(target.value)} 
                        placeholder="Your pasword"
                        className="input"
                    />
                    <button className="submit">
                        Submit
                    </button>
                </div>
            </form>
            <form onSubmit={register}>
                <h2>Or register</h2>
                <div>
                    <input 
                        onChange={({target}) => handleName(target.value)}
                        placeholder="Your login"
                        className="input"
                    />
                    <input
                        type="password"
                        onChange={({target}) => handlePas(target.value)} 
                        placeholder="Your password"
                        className="input"
                    />
                    <input
                        type="password"
                        onChange={({target}) => handleconPas(target.value)} 
                        placeholder="Confirm your password"
                        className="input"
                    />
                    <button className="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Login