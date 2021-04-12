import React from 'react';

import PizzaMenu from "./PizzaMenu";
import SnackMenu from "./SnackMenu";

const MenuList = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Наше меню</h1>
                        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Мы стремимся удовлетворить наших
                        клиентов вкусной едой и отличным сервисом. Мы предлагаем широкий выбор вкусных блюд.</p>
                </div>

                <div className="overflow-x-auto">
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Пиццы
                    </button>
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Горячие закуски
                    </button>
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Супы
                    </button>
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Основные блюда
                    </button>
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Блинчики
                    </button>
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Алкоголь
                    </button>
                    <button className="inline-block px-6 py-2 mr-4 mb-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none">
                        Безалкогольные напитки
                    </button>

                </div>

                <React.Fragment>
                    <PizzaMenu/>,
                    <SnackMenu/>
                </React.Fragment>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Посмотреть полный список нашего меню и заказать доставку вы сможете у нас в приложении.</h1>
                        <button
                            className="flex-shrink-0 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg mt-10 sm:mt-0">Перейти в приложение
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default MenuList;
