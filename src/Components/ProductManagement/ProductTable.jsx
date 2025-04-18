import React from 'react';

const ProductTable = ({product}) => {
    return (
        <div>
            <h1>Products:{product.length}</h1>
            <table border="2" cellSpacing="0">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Product Name</th>
                    <th>Product price</th>
                    <th>Product quantity</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
               {
                product.map((product,index) =><tr key={index}>
                <td>{index+1} </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td></td>
               </tr>)
               }
            </tbody>

            </table>
        </div>
    );
};

export default ProductTable;