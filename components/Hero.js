import React from 'react';
import { Smartphone } from 'react-feather';


const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Пиццерия MyPizza</h2>

                        <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                            Мы находимся в прекрасном городе Кохтла-Ярве, Ахтме.
                            Местоположение пиццерии: Йидла, Ахтме Кескус по адресу Estonia pst 30a.
                            У нас вы сможете вкусно покушать и прекрасно провести время. Разнообразное меню, вежливый персонал и приятная атмосфера.
                        </p>

                        <div className="flex items-center mt-6 -mx-2">
                            <a className="mx-2" href="#" aria-label="Twitter">
                                <Smartphone />
                            </a>
                            <p className="mx-3">Заказвайте пиццу с доствкой через наше <a
                                className="font-bold text-yellow-500 dark:text-yellow-400" href="#">веб-приложение</a>.</p>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="max-w-lg">
                                <img className="w-full h-full max-w-2xl"
                                     src="/assets/pizza-share.png"
                                     alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
