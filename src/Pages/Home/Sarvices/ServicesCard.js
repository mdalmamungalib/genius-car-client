import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className=''><img className='h-64 p-6 rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link>
                        <FaArrowRight className='text-2xl text-orange-600 font-bold'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;