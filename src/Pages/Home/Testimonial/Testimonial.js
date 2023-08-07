import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
const Testimonial = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 my-5 font-bold'>Testimonial</p>
                <h2 className='text-5xl font-bold '>What Customer Says</h2>
                <p className='text-slate-500 my-5'>Auto Trade International Limited is a well-established multi-brand automobile service center <br /> that has built a reputation for providing exceptional service.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center '>
                <div className='my-10 justify-items-center'>
                    <div className='flex w-96'>
                        <div className='flex gap-5'>
                            <div>
                                <img className='rounded-full w-12' src="https://i.ibb.co/n8GnN8k/Screenshot-2023-07-17-094804.png" alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>Awlad Hossain</h2>
                                <p className='font-semibold'>Businessman</p>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <FaQuoteRight className='text-5xl text-red-200'></FaQuoteRight>
                        </div>
                    </div>
                    <div className='w-96 mt-5'>
                        <p>Exceptional Garage Services You Can Trust! Skilled technicians, quality care, fair pricing, and customer satisfaction make ST Monial the top choice for all your automotive needs.</p>
                        <div className='flex mt-5 text-orange-400'>
                            <GoStarFill></GoStarFill>
                            <GoStarFill></GoStarFill>
                            <GoStarFill></GoStarFill>
                            <GoStarFill></GoStarFill>
                            <GoStarFill></GoStarFill>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                <div className='flex w-96'>
                    <div className='flex gap-5'>
                        <div>
                            <img className='rounded-full w-12' src="https://i.ibb.co/JKZh1Xw/Screenshot-2023-07-17-102610.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Awlad Hossain</h2>
                            <p className='font-semibold'>Businessman</p>
                        </div>
                    </div>
                    <div className='ml-20'>
                        <FaQuoteRight className='text-5xl text-red-200'></FaQuoteRight>
                    </div>
                </div>
                <div className='w-96 mt-5'>
                    <p>Exceptional Garage Services You Can Trust! Skilled technicians, quality care, fair pricing, and customer satisfaction make ST Monial the top choice for all your automotive needs.</p>
                    <div className='flex mt-5 text-orange-400'>
                        <GoStarFill></GoStarFill>
                        <GoStarFill></GoStarFill>
                        <GoStarFill></GoStarFill>
                        <GoStarFill></GoStarFill>
                        <GoStarFill></GoStarFill>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;