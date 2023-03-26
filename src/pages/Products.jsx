import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from 'components/Card/Card';

const Home = () => {
    const { products } = useLoaderData();
    return <div className="flex flex-wrap space-between gap-8">
        {
            products.map(
                ({
                    image_front_url: img,
                    product_name_fr: name,
                    generic_name_fr: description,
                    code
                }) => <Card
                        key={code}
                        to={`/product/${code}`}
                        imageUrl={img}
                        title={name}
                        description={description}
                    />
            )
        }
    </div>
}

export default Home;