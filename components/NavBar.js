import React, {useState} from 'react';

import { PhoneCall } from 'react-feather';
import { Mail } from 'react-feather';
import { Truck } from 'react-feather';

import Link from "next/link";

export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const handleClick = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="w-full text-white bg-yellow-500">
                <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex">

                        <PhoneCall />
                        <p className="mx-3">+372 53 57 02 07</p>

                        <Mail />
                        <p className="mx-3">info@my-pizza.ee</p>

                        <Truck />
                        <p className="mx-3">Доставка в Йыхви - 2.50€</p>
                    </div>
                </div>
            </div>
            <div className="container px-6 py-3 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <img className="lg:block h-8 w-auto"
                                 src="/assets/logo.png"
                                 alt="MyPizza Logo"/>

                        </div>

                        <div className="flex md:hidden">
                            <button type="button" onClick={handleClick}
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd"
                                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={"flex-1 md:flex md:items-center md:justify-between" + (navbarOpen ? " md:flex" : " hidden")}>
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <Link href="/"><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Главная</a></Link>

                            <Link href="/menu"><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Меню</a></Link>

                            <Link href="/delivery"><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Доставка</a></Link>

{/*
                            <Link href="/gallery"><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Галерея</a></Link>
*/}

{/*
                            <Link href="/vacancies"><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Вакансии</a></Link>
*/}

{/*
                            <Link href="/promotions"><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Акции</a></Link>
*/}

                            <Link href="/contact" ><a className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Контакты</a></Link>
                        </div>

                        {/*<div className="flex items-center mt-4 md:mt-0">*/}
                        {/*    <button type="button" className="flex items-center focus:outline-none"*/}
                        {/*            aria-label="toggle profile dropdown">*/}
                        {/*        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">*/}
                        {/*            <img*/}
                        {/*                src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"*/}
                        {/*                className="object-cover w-full h-full" alt="avatar" />*/}
                        {/*        </div>*/}

                        {/*        <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">Khatab*/}
                        {/*            wedaa</h3>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;