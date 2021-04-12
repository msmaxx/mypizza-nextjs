import {Circle} from "react-feather";

function PizzaCard({name, image,ingredients, priceFrom, price20cm, price28cm, price40cm}) {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <a className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className=" p-6 overflow-hidden">
                    <img className="h-45 rounded w-full object-cover object-center mb-6"
                         src={image}
                         alt=""/>
                </div>
                <div className="p-4">
                    <span className="inline-block py-1 font-semibold uppercase tracking-wide text-xs">ПИЦЦА</span>
                    <h2 className="mt-2 mb-2  font-bold">{name}</h2>
                    <p className="text-sm">{ingredients}</p>
                    <div className="mt-3 flex items-center">
                        <span className="text-sm font-semibold">от</span>&nbsp;<span
                        className="font-bold text-xl">{priceFrom}</span>&nbsp;<span
                        className="text-sm font-semibold">€</span>
                    </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                              <span className="flex items-center mb-1">
                                <Circle size={12}/>
                                <p className="text-sm mx-2">20 см - {price20cm} €</p>
                              </span>

                    <span className="flex items-center mb-1">
                                <Circle size={12}/>
                                <p className="text-sm mx-2">28 см - {price28cm} €</p>
                              </span>

                    <span className="flex items-center mb-1">
                                <Circle size={12}/>
                                <p className="text-sm mx-2">40 см - {price40cm} €</p>
                              </span>
                </div>
            </a>
        </div>
    )
}

export default PizzaCard;