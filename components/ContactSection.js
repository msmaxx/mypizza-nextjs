import React from 'react';

import {PhoneCall} from 'react-feather';
import {Mail, MapPin} from 'react-feather';

const ContactSection = () => {
    return (
        <section class="text-gray-700 body-font">
            <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
                <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
                    <img class="object-cover object-center rounded" alt="hero"
                         src="/assets/contact.png"/>
                </div>
                <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
                    <h2 class="mb-1 text-xs font-medium tracking-widest text-black title-font">ПИЦЦЕРИЯ</h2>
                    <h1 class="mb-8 text-2xl font-bold tracking-tighter text-left text-black title-font">
                        MyPizza Ahtme</h1>
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-700">MyPizza находится в городе Йидла,
                        Ahtme Kaubakeskus по адресу Estonia pst 30a.</p>
                    <p class="flex mb-2 text-gray-600"><span
                        class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <PhoneCall/>
                        </span>+372 53 57 02 07
                    </p>
                    <p class="flex mb-2 text-gray-600"><span
                        class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <Mail/></span>info@my-pizza.ee
                    </p>
                    <p class="flex mb-6 text-gray-600"><span
                        class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <MapPin/>
                    </span>Estonia pst 30a, Ahtme, Ida-Viru maakond
                    </p>
                </div>
            </div>
        </section>
    )
        ;
};

export default ContactSection;
