import React from 'react';
import chack from '../../../assets/icons/check.svg';
import dayliveryt from '../../../assets/icons/deliveryt.svg';
import group from '../../../assets/icons/group.svg';
import person from '../../../assets/icons/person.svg';
import Wrench from '../../../assets/icons/Wrench.svg';
import { BsStopwatch } from "react-icons/bs";

const CoreFeatures = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 my-5 font-semibold'>Core Features</p>
                <h2 className='text-5xl font-semibold '>Why Choose Us</h2>
                <p className='text-slate-500 my-5'>Auto Trade International Limited is a well-established multi-brand automobile service center <br /> that has built a reputation for providing exceptional service.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 justify-items-center font-semibold gap-5'>
                <div className="card card-compact w-44 bg-base-100 hover:bg-orange-600 hover:text-white py-5 shadow-xl">
                    <figure><img src={group} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-semibold">Expert Team</h2>
                    </div>
                </div>
                <div className="card card-compact w-44 bg-base-100 hover:bg-orange-600 hover:text-white py-5 shadow-xl">
                    <figure><BsStopwatch className='text-6xl font-semibold'></BsStopwatch></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-semibold">Timely Delivery</h2>
                    </div>
                </div>
                <div className="card card-compact w-44 bg-base-100 hover:bg-orange-600 hover:text-white py-5 shadow-xl">
                    <figure><img src={person} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-semibold">24/7 Support</h2>
                    </div>
                </div>
                <div className="card card-compact w-44 bg-base-100 hover:bg-orange-600 hover:text-white py-5 shadow-xl">
                    <figure><img src={Wrench} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-semibold">Best Equipment</h2>
                    </div>
                </div>
                <div className="card card-compact w-44 bg-base-100 hover:bg-orange-600 hover:text-white py-5 shadow-xl">
                    <figure><img src={chack} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-semibold">100% Guranty</h2>
                    </div>
                </div>
                <div className="card card-compact w-44 bg-base-100 hover:bg-orange-600 hover:text-white py-5 shadow-xl">
                    <figure><img src={dayliveryt} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-semibold">Timely Delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;