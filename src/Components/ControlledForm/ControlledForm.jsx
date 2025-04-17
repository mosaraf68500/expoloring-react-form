import React, { useState } from 'react';

const ControlledForm = () => {

    const [password, setPassword]=useState("");
    const [error, setError]=useState("");

    const handleControlledForm=(e)=>{
        e.preventDefault()
        console.log("submit")

    }

    const handlePasswordOnchange=e=>{
        console.log(e.target.value)
        setPassword(e.target.value);

        if(password.length < 6){
            setError("password must be 6 character or longer");
        }

        else{
            setError("")
        }
    }


    return (
        <div>
            <form onSubmit={handleControlledForm}> 
                <input type="email" name="email" placeholder='Email' required id="" /> <br />
                <input type="password" onChange={handlePasswordOnchange} defaultValue={password} name="password" required placeholder='Password' id="" /> <br />
                <input type="submit" value="submit" />
                <p>{error}</p>
            </form>
            
        </div>
    );
};

export default ControlledForm;