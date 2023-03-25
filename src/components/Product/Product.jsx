import React from 'react';
import { useLoaderData } from 'react-router-dom';

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

    return <div className="min-w-screen bg-blue-600 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <h1 className="font-bold uppercase text-2xl mb-0">{name}</h1>
            <div className="text-xs mb-5">{categories}</div>
            <div className="md:flex -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                        <img src={image} className="max-h-56 relative z-10" alt="" />
                    </div>
                </div>
                <div className="md:w-1/2 px-10">
                    <div className="my-10">
                        <p className="text-base font-bold">Descriptif du produit:</p>
                        <p className="text-base">{description}</p>
                        <p className="text-base font-bold mt-10 text-red-600">Allergènes:
                            <span className="pl-1 font-normal">{allergensToString(allergens)}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <p className="text-xs">
                    <span className="font-bold pr-2">Ingrédients:</span>
                    <span>{ingredients}</span>
                </p>
            </div>
        </div>
    </div>
};

export default Product;