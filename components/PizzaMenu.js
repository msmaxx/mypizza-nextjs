import React from 'react';

import PizzaCard from "./cards/PizzaCard";

const PizzaMenu = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 my-6 sm:text-3xl sm:truncate">
                Пиццы
            </h2>

            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">

                    <PizzaCard name="4 JUUSTU"
                               image="/assets/pitsad/4JUUSTU.png"
                               ingredients="Соус, Сыр, Моцарелла, Сыр с синей плесенью, Копчёный сыр."
                               priceFrom="4.50"
                               price20cm="4.50"
                               price28cm="7.50"
                               price40cm="12.00"
                    />

                    <PizzaCard name="SALAAMI"
                               image="/assets/pitsad/SALAMI.png"
                               ingredients="Соус, Сыр Моцарелла, Салями, Оливки."
                               priceFrom="4.90"
                               price20cm="4.90"
                               price28cm="7.90"
                               price40cm="15.80"
                    />


                    <PizzaCard name="FIRENZE"
                               image="/assets/pitsad/FIRENZE.png"
                               ingredients="Соус, Cыр Моцарелла, Курица, Ананас, Паприка."
                               priceFrom="4.70"
                               price20cm="4.70"
                               price28cm="7.70"
                               price40cm="15.40"
                    />

                    <PizzaCard name="VENECIA"
                               image="/assets/pitsad/VENECIA.png"
                               ingredients="Соус, Сыр Моцапелла, Ветчина, Оливки, Лук."
                               priceFrom="4.90"
                               price20cm="4.90"
                               price28cm="7.90"
                               price40cm="15.80"
                    />

                    <PizzaCard name="ROYAL PIZZA"
                               image="/assets/pitsad/ROYALPIZZA.png"
                               ingredients="Соус, Cыр Моцарелла, Копчёная курица, Ветчина, Паприка, Шампиньоны, Ананас."
                               priceFrom="4.90"
                               price20cm="4.90"
                               price28cm="7.90"
                               price40cm="15.80"
                    />

                    <PizzaCard name="MEXICO 🌶️🌶️🌶️"
                               image="/assets/pitsad/MEXICO.png"
                               ingredients="Соус Сальса, Cыр Моцарелла, Курица, Халапеньо, Пепперони, Лук."
                               priceFrom="4.90"
                               price20cm="4.90"
                               price28cm="7.90"
                               price40cm="15.80"
                    />

                    <PizzaCard name="HOT MY PIZZA 🌶️🌶️🌶️"
                               image="/assets/pitsad/HOTMYPIZZA.png"
                               ingredients="Соус Сальса, Cыр Моцарелла, Лук, Салями, Чеснок, Халапеньо, Паприка."
                               priceFrom="5.30"
                               price20cm="5.30"
                               price28cm="8.30"
                               price40cm="16.80"
                    />

                    <PizzaCard name="ALLA POLLO"
                               image="/assets/pitsad/ALLAPOLO.png"
                               ingredients="Соус, Cыр Моцарелла, Копчёная курица, Паприка, Кукуруза, Ананас."
                               priceFrom="5.10"
                               price20cm="5.10"
                               price28cm="8.10"
                               price40cm="16.20"
                    />


                    <PizzaCard name="MAFIOZO"
                               image="/assets/pitsad/MAFIOZO.png"
                               ingredients="Соус, Cыр Моцарелла, Ветчина, Бекон, Паприка, Томат, Лук, Оливки."
                               priceFrom="5.30"
                               price20cm="5.30"
                               price28cm="8.30"
                               price40cm="16.80"
                    />

                    <PizzaCard name="AMORE MIO"
                               image="/assets/pitsad/AMOREMIO.png"
                               ingredients="Соус, Cыр Моцарелла, Фарш, Бекон, Лук, Маринованные огурцы."
                               priceFrom="5.00"
                               price20cm="5.00"
                               price28cm="8.00"
                               price40cm="16.00"
                    />

                    <PizzaCard name="FRUTTI DI MARE"
                               image="/assets/pitsad/FRUTTIDIMARE.png"
                               ingredients="Соус, Cыр Моцарелла, Тунец, Креветки, Мидии, Паприка, Ананас."
                               priceFrom="5.60"
                               price20cm="5.60"
                               price28cm="8.60"
                               price40cm="17.20"
                    />

                    <PizzaCard name="VEGATARIANA"
                               image="/assets/pitsad/VEGE.png"
                               ingredients="Соус, Cыр Моцарелла, Паприка, Оливки, Томат, Лук, Шампиньоны, Кукуруза."
                               priceFrom="4.70"
                               price20cm="4.70"
                               price28cm="7.70"
                               price40cm="13.80"
                    />


                    <PizzaCard name="PEEKONI PIZZA"
                               image="/assets/pitsad/PEEKONI.png"
                               ingredients="Соус, Cыр Моцарелла, Бекон, Фарш, Сыр с синей плесенью, Лук, Оливки."
                               priceFrom="5.50"
                               price20cm="5.50"
                               price28cm="8.50"
                               price40cm="17.10"
                    />

                    <PizzaCard name="RIA PIZZA"
                               image="/assets/pitsad/RIAPIZZA.png"
                               ingredients="Соус, Cыр Моцарелла, Креветки, Ветчина, Сыр с синей плесенью, Шампиньоны, Ананас."
                               priceFrom="5.60"
                               price20cm="5.60"
                               price28cm="8.60"
                               price40cm="17.20"
                    />

                    <PizzaCard name="KEBABI PIZZA ️🌶️🌶"
                               image="/assets/pitsad/KEBAB.png"
                               ingredients="Соус BBQ, Cыр Моцарелла, Копчёный сыр, Кебаб, Кукуруза, Томат, Лук, Халапеньо."
                               priceFrom="5.40"
                               price20cm="5.40"
                               price28cm="8.40"
                               price40cm="17.00"
                    />

                    <PizzaCard name="NAPOLETANA"
                               image="/assets/pitsad/NAPOLETANA.png"
                               ingredients="Соус, Cыр Моцарелла, Тунец, Ветчина, Паприка, Лук, Оливки."
                               priceFrom="5.30"
                               price20cm="5.30"
                               price28cm="8.30"
                               price40cm="16.80"
                    />

                    <PizzaCard name="MERICIA"
                               image="/assets/pitsad/MERICIA.png"
                               ingredients="Соус, Cыр Моцарелла, Креветки, Мидии, Паприка, Шампиньоны."
                               priceFrom="5.30"
                               price20cm="5.30"
                               price28cm="8.30"
                               price40cm="16.80"
                    />

                    <PizzaCard name="HAKKLIHA PIZZA"
                               image="/assets/pitsad/HAKKLIHA.png"
                               ingredients="Соус, Cыр Моцарелла, Фарш, Ветчина, Томат, Паприка, Чеснок."
                               priceFrom="5.00"
                               price20cm="5.00"
                               price28cm="8.00"
                               price40cm="16.00"
                    />


                    <PizzaCard name="KREVE PIZZA"
                               image="/assets/pitsad/KREVE.png"
                               ingredients="Соус Чесночный, Сыр Моцарелла, Креветки, Курица, Паприка."
                               priceFrom="5.20"
                               price20cm="5.20"
                               price28cm="8.20"
                               price40cm="16.50"
                    />

                    <PizzaCard name="PEPPERONI"
                               image="/assets/pitsad/PEPPERONI.png"
                               ingredients="Соус, Сыр Моцарелла, Пепперони."
                               priceFrom="4.90"
                               price20cm="4.90"
                               price28cm="7.90"
                               price40cm="15.80"
                    />

                    <PizzaCard name="MARGHERITA"
                               image="/assets/pitsad/MARGHERITA.png"
                               ingredients="Соус, Cыр Моцарелла, Томат."
                               priceFrom="3.90"
                               price20cm="3.90"
                               price28cm="5.90"
                               price40cm="11.90"
                    />


                    <PizzaCard name="LASTE PIZZA"
                               image="/assets/pitsad/LASTE.png"
                               ingredients="Соус, Сыр, Детская Колбаса."
                               priceFrom="4.20"
                               price20cm="4.20"
                               price28cm="7.20"
                               price40cm="14.40"
                    />

                </div>
            </div>
        </div>
    );
};

export default PizzaMenu;
