import React, { useState } from "react";

export default function LoginApp(){
     const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e)=>{
      e.preventDefault();

      if(userName === "user" && password === "password"){
        // setUserName(e.target.value);
        // setPassword(e.target.value);
        setError('');
        setSubmit(true);
      }else{
        setError("Invalid username or password");
        setSubmit(false);
      }
    }

    return(
        <div>
        <h1>Login Page</h1>
        {submit ? (<div>Welcome, {userName}</div>) : 
        (<form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label htmlFor="username">UserName:</label>
            <input type="text"
             value={userName}
            placeholder="username"
            onChange={(e)=>setUserName(e.target.value)}
            required/>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password}
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <button type="submit">Submit</button>
        </form>)}
        </div>
    )
}