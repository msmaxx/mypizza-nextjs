import React from 'react';

const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div
                    className="lg:w-2/3 md:w-1/2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Адрес</h2>
                            <p className="mt-1">Estonia pst. 30a, Ahtme. Ahtme Kaubakeskus.</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
                            <a className="text-yellow-500 leading-relaxed">info@my-pizza.ee</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Номер телефона</h2>
                            <p className="leading-relaxed">+372 53 57 02 07</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">График работы</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Обратите внимание на время работы пиццерии MyPizza.</p>

                    <p className="italic text-xl">
                        Понедельник - Четверг 12:00 - 19:00
                    </p>
                    <p className="italic text-xl">
                        Пятница - Суббота 12:00 - 19:00
                    </p>
                    <p className="italic text-xl">
                        Воскресенье - 12:00 - 17:00
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
