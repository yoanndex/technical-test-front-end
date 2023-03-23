import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Product from 'components/Product/Product';
import Products from 'components/Products/Products';

import { getProduct, getProducts } from 'api/OpenFoodFacts';
import Root from 'routes/root';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/products/:searchTerm",
                loader: getProducts,
                element: <Products />
            },
            {
                path: "/product/:code",
                loader: getProduct,
                element: <Product />
            }
        ]
    }
]);

export default router;