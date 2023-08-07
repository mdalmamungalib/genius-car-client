import React from 'react';
import { GoStarFill } from "react-icons/go";

const PopularProductCard = ({ product }) => {
    const { name, price, img } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex text-orange-400'>
                    <GoStarFill></GoStarFill>
                    <GoStarFill></GoStarFill>
                    <GoStarFill></GoStarFill>
                    <GoStarFill></GoStarFill>
                    <GoStarFill></GoStarFill>
                </div>
                <h2 className="card-title font-semibold">{name}</h2>
                <p className='text-xl font-bold text-orange-600'>${price}.00</p>
            </div>
        </div>
    );
};

export default PopularProductCard;