import React from 'react';

const FormAction = () => {
    const handleActionForm =(formData)=>{
        console.log(formData.get("name"))
        console.log(formData.get("email"))
    }
    return (
        <div>
            <form action={handleActionForm}>
                <input type="text" name="name" placeholder='Name' id="" /> <br /> <br />
                <input type="email" name="email" placeholder='Email' id="" /> <br /> <br />

                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;