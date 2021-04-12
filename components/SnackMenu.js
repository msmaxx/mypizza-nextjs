import React from 'react';

import ProductCard from "./cards/ProductCard";

const SnackMenu = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 my-6 sm:text-3xl sm:truncate">
                Горячие закуски
            </h2>

            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <ProductCard name="Луковые кольца с соусом"
                                 image="/assets/snacks/LUKK.png"
                                 priceFrom="3.50"
                                 category="закуски"
                                 Variant="8 шт."
                                 priceVariant="3.50"
                    />
                    <ProductCard name="Сырные шарики с соусом"
                                 image="/assets/snacks/CHEESEBALLS.png"
                                 priceFrom="3.50"
                                 category="закуски"
                                 Variant="8 шт."
                                 priceVariant="3.50"
                    />
                    <ProductCard name="Кольца кальмара с соусом"
                                 image="/assets/snacks/CALMAR.png"
                                 priceFrom="4.50"
                                 category="закуски"
                                 Variant="8 шт."
                                 priceVariant="4.50"
                    />
                    <ProductCard name="Куриные крылышки с соусом"
                                 image="/assets/snacks/CHICKENWINGS.png"
                                 priceFrom="5.50"
                                 category="закуски"
                                 Variant="6 шт."
                                 priceVariant="5.50"
                    />
                    <ProductCard name="Сухарики с чесночным соусом"
                                 image="/assets/snacks/SUHARIKI.png"
                                 priceFrom="3.00"
                                 category="закуски"
                                 Variant="150 г."
                                 priceVariant="3.00"
                    />
                </div>
            </div>
        </div>
    );
};

export default SnackMenu;
