import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [product,setProduct]=useState([]);

    const handleAddToProduct =(newProduct)=>{
        const newProducts=[...product,newProduct]
        setProduct(newProducts);
    }
    return (
        <div>
            <ProductForm handleAddToProduct={handleAddToProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;