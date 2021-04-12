import React from 'react';

const WorkTime = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                                <p className="leading-relaxed">Понедельник - Четверг</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">12:00 - 19:00</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                                <p className="leading-relaxed">Пятница - Суббота</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">12:00 - 19:00</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                                <p className="leading-relaxed">Воскресенье</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">12:00 - 17:00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkTime;
