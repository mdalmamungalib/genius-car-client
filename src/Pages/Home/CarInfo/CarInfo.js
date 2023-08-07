import React from 'react';
import { IoLocationSharp, IoCall, IoCalendarSharp } from "react-icons/io5";

const CarInfo = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 rounded-lg w-full bg-black my-10 p-20">

            <div className="stat text-white flex align-middle justify-center">
                <IoCalendarSharp className='text-3xl mt-3 text-amber-500'></IoCalendarSharp>
                <div>
                    <p>We are open monday-friday</p>
                    <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>

            <div className="stat text-white flex align-middle justify-center">
                <IoCall className='text-3xl mt-3 text-red-500'></IoCall>
                <div>
                    <p>Have a question?</p>
                    <h2 className='text-2xl font-bold'>+25462512658</h2>
                </div>
            </div>

            <div className="stat text-white flex align-middle justify-center">
                <IoLocationSharp className='text-3xl mt-3 text-cyan-600'></IoLocationSharp>
                <div>
                    <p>Need a repair? our address</p>
                    <h2 className='text-2xl font-bold'>Liza street, New york</h2>
                </div>
            </div>

        </div>
    );
};

export default CarInfo;