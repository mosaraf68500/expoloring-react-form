import React from 'react';

const ProductForm = () => {

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

        console.log(newProduct)

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
        </div>
    );
};

export default ProductForm;