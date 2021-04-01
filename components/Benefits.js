import React from 'react';

import {Star} from 'react-feather';
import {Smile} from 'react-feather';
import {Truck} from 'react-feather';


const Benefits = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" class="object-cover object-center h-full w-full"
                         src="/assets/pizza-maker.png"/>
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div class="flex flex-col mb-10 lg:items-start items-center">
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-200 text-yellow-500 mb-5">
                            <Star/>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Стандарт качества</h2>
                            <p class="leading-relaxed text-base">Мы готовим пиццу только из свежих и качественных
                                ингредиентов.</p>
                        </div>
                    </div>
                    <div class="flex flex-col mb-10 lg:items-start items-center">
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-200 text-yellow-500 mb-5">
                            <Smile/>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Мы заботимся о Ваших
                                вкусах</h2>
                            <p class="leading-relaxed text-base">Вы можете убрать любой ингредиент по Вашему
                                желанию.</p>
                        </div>
                    </div>
                    <div class="flex flex-col mb-10 lg:items-start items-center">
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-200 text-yellow-500 mb-5">
                            <Truck/>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Доставляем пиццу горячей</h2>
                            <p class="leading-relaxed text-base">Нам очень важно, чтобы пицца передавалась Вам такой температуры, при которой сохраняются все её вкусовые качества.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
