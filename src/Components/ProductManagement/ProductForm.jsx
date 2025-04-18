import React, { useState } from 'react';

const ProductForm = ({handleAddToProduct}) => {

    const [error,setError]=useState("");

    const handleSubmitForm =(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
        const newProduct={
            name,
            price,
            quantity,
        }

        if(name.length==0){
            setError("please provided the product name..");
            return;
        }
        else if(price<=0){
            setError("please provided the valided product price .. ");
            return;
        }

        else if(quantity<=0){
            setError("please provided the valid product quantity..");
            return;
        }

        else{
            setError("")
        }

        handleAddToProduct(newProduct);

    }
    return (
        <div>
            <h1>add to the product in the Table</h1>
            <form onSubmit={handleSubmitForm}>
            <input type="text" name="name" placeholder='Name' /> <br /><br />
            <input type="text" name="price" placeholder='Price' /> <br /><br />
            <input type="text" name="quantity" placeholder='Quantity' /> <br /><br />
            <input type="submit" value="submit" />


            </form>

            <p><small style={{color:'red'}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;