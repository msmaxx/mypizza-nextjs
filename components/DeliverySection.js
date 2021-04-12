import React from 'react';

const DeliverySection = () => {
    return (
        <section className="text-gray-600 body-font relative">
                <div
                    className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                    <div className="w-full md:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">MyPizza предлагает своим клиентам услугу по доставке еды!
                            </h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Мы доставим ваш заказ в пределах Таммику, Пуру, Йыхви, Кукрузе, Кохтла-Ярве, Сомпа, Тойла, Ору.
                                Остальные города по договорённости с клиентом.</p>
                            <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>

                                    <span>Ийдла-Пуру - 2.00€</span>
                                </div>

                                <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>

                                    <span>Йыхви - 2.50€</span>
                                </div>

                                <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>

                                    <span>Кукрузе - 4.00€</span>
                                </div>

                                <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>

                                    <span>Кохтла-Ярве - 5.00€</span>
                                </div>

                                <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>

                                    <span>Кохтла-Нымме - 6.00€</span>
                                </div>

                                <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>

                                    <span>Сомпа - 5.00€</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-auto md:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md"
                             src="/assets/delivery.png"
                             alt="delivery photo" />
                    </div>
                </div>
        </section>
    );
};

export default DeliverySection;