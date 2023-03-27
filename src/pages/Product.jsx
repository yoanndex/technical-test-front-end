import React from 'react';
import { useLoaderData } from 'react-router-dom';

import ProductComponent from 'components/Product/Product';


/**
 * Convert array of string to string with string transformation
 * @param {Array<String>} allergens 
 * @returns String
 */
const allergensToString = (allergens) => allergens.map((allergen) => {
    const regex = /[^:]*$/gm;
    const str = allergen.match(regex);
    return str && str[0] ? str[0] : allergen;
}).join(', ');


const Product = () => {
    const { product } = useLoaderData();
    const {
        product_name: name,
        image_front_url: image,
        generic_name_fr: description,
        ingredients_text_fr: ingredients,
        allergens_hierarchy: allergens,
        categories
    } = product;

    const strAllergens = allergensToString(allergens) || "Pas d'allergènes";

    return <ProductComponent
        name={name}
        categories={categories}
        image={image}
        description={description}
        allergens={strAllergens}
        ingredients={ingredients}
    />
}

export default Product;