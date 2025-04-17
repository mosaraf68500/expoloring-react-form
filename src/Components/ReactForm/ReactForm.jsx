import React from 'react';

const ReactForm = () => {

    const handleForm=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleForm}>

                <input type="text" name="name" placeholder='Your Name' id="" /> <br /> <br />
                <input type="email" name="email" placeholder='Your email' id="" /> <br /> <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default ReactForm;