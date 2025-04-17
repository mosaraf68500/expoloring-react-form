import React, { useState } from 'react';

const ControlledForm = () => {

    const [password, setPassword]=useState("");

    const handleControlledForm=(e)=>{
        e.preventDefault()
        console.log("submit")

    }

    const handlePasswordOnchange=e=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleControlledForm}> 
                <input type="email" name="email" placeholder='Email' required id="" /> <br />
                <input type="password" onChange={handlePasswordOnchange} defaultValue={password} name="password" required placeholder='Password' id="" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledForm;