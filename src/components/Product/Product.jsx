import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const { product } = useLoaderData();
    return <div>{product?.product_name}</div>
};

export default Product;