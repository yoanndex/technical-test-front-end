import axios from 'axios';

/**
 * Get products by string
 * @param {String} searchTerm The term to search
 * @param {Number} pageSize number of products
 * @returns Object
 */
export const getProducts = async ({ params }) => {
    const { searchTerm, pageSize = 24 } = params;
    const queryParams = {
        search_terms: searchTerm,
        search_simple: 1,
        action: 'process',
        fields: 'code,product_name_fr,image_front_url,generic_name_fr',
        json: 1,
        page: 1,
        page_size: pageSize
    }
    const { data } = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl`, { params: queryParams });
    return data;
}

/**
 * Get product by code
 * @param {Number} code Number to identify the product
 * @returns Object
 */
export const getProduct = async ({ params }) => {
    const { code } = params;
    const queryParams = {
        fields: 'product_name,categories,image_front_url,allergens_hierarchy,ingredients_text_fr,generic_name_fr'
    }
    const { data } = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`, { params: queryParams });
    return data;
}
