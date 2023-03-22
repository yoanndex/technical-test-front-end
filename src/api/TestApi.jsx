import React from 'react';
import { useQuery } from 'react-query';
import { getProducts, getProduct } from "./OpenFoodFacts";

const TestApi = () => {
    const productsQuery = useQuery(['search', 'chicken', 5], () => getProducts('chicken', 5));
    const productQuery = useQuery(['product', 8852018101024], () => getProduct(8852018101024));

    if (productsQuery.isLoading || productQuery.isLoading) {
        return <div>Loading...</div>
    }

    if (productsQuery.isError || productQuery.isError) {
        return <div>Error! {productsQuery.error.message + productQuery.isError}</div>
    }
    return (
        <>
            <h1>TEST API:</h1>
            <div style={{ display: 'flex' }}>
                <div>
                    <h3>getProducts: chicken</h3>
                    {productsQuery.data.products.map(({ product_name: pn, code }) => <p key={code}>{pn}</p>)}
                </div>
                <div>
                    <h3>getProduct: 8852018101024 </h3>
                    {productQuery.data.product.product_name}
                </div>
            </div>
        </>
    );
}

export default TestApi;
