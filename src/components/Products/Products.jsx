import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const { products, count } = useLoaderData();
    return <>
        <div>Resultats: {count}</div>
        {products.map((product) => <p key={product.code}>{product.product_name_fr}</p>)}
    </>
}

export default Products;