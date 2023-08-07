import React from 'react';
import checkout from "../../../assets/images/checkout/checkout.png"
import Sarvices from './Sarvices';

const Srvc = () => {
    
    return (
        <div>
            <div className="w-full ">
            <div className=" relative w-full">
                <div className='carousel-img carousel-img2'>
                    <img src={checkout} alt='' style={{ height: 280, width: 1280 }} />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-5xl mt-10 font-semibold text-white'>
                        Check Out
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <span className='text-orange-700 mt-32 text-lg font-semibold'>Home-Services</span>
                </div>
            </div>
        </div>

        <Sarvices></Sarvices>
            
        </div>
    );
};

export default Srvc;