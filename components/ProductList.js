import React from 'react';

const ProductList = () => {
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
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-45 rounded w-full object-cover object-center mb-6"
                                 src="/assets/AMORE MIO.png" alt="content"/>
                            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">ПИЦЦА</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">AMORE MIO</h2>
                            <p className="leading-relaxed text-base">Соус, Cыр Моцарелла, Фарш, Бекон, Лук, Маринованные
                                огурцы.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-45 rounded w-full object-cover object-center mb-6"
                                 src="/assets/KREVE.png" alt="content"/>
                            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">ПИЦЦА</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">KREVE PIZZA</h2>
                            <p className="leading-relaxed text-base">Соус Чесночный, Сыр Моцарелла, Креветки, Курица,
                                Паприка.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-45 rounded w-full object-cover object-center mb-6"
                                 src="/assets/MAFIOZO.png" alt="content"/>
                            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">ПИЦЦА</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">MAFIOZO</h2>
                            <p className="leading-relaxed text-base">Соус, Cыр Моцарелла, Ветчина, Бекон, Паприка,
                                Томат, Лук, Оливки.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-45 rounded w-full object-cover object-center mb-6"
                                 src="/assets/4JUUSTU.png" alt="content"/>
                            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">ПИИЦА</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">PIZZA 4 JUUSTU</h2>
                            <p className="leading-relaxed text-base">Соус, Сыр, Моцарелла, Сыр с синей плесенью,
                                Копчёный сыр.</p>
                        </div>
                    </div>
                </div>
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

export default ProductList;
