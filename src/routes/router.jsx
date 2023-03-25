import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Product from 'components/Product/Product';
import Products from 'pages/Products';

import { getProduct, getProducts } from 'api/OpenFoodFacts';
import MainLayout from 'layouts/MainLayout';
import Home from 'pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
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