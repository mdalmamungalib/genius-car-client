import React from 'react';
import checkout from "../../../assets/images/checkout/checkout.png"
import useTitle from '../../useTitale/useTitle';

const AddServices = () => {

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.serviceName.value;
        const price = form.servicePrice.value;
        const img = form.serviceIMG.value;

        const services = {
            title: title,
            price: price,
            img: img
        };

        fetch("https://class-66-67-69-genius-car-server.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Services add successfully");
                    form.reset();
                }
            })
    };

    useTitle("Car Doctor-Add Service");
    return (
        <div className=''>
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
                        <span className='text-orange-700 mt-32 text-lg font-semibold'>Home-Add Your Services</span>
                    </div>
                </div>
            </div>

            <div className='border bg-slate-300 p-20 rounded-md mt-20 mb-20'>
                <form onSubmit={handleAddServices}>
                    <h2 className='text-4xl text-center font-bold text-orange-600'>Add Your won Services</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center mt-7'>
                        <input name='serviceName' type="text" placeholder="Add your service Name" className="input input-bordered w-full " required />
                        <input name='servicePrice' type="text" placeholder="Add your service Price" className="input input-bordered w-full " required />
                        <input name='serviceIMG' type="text" placeholder=" Add your service Photo URL" className="input input-bordered w-full " required />
                    </div>
                    <input type="submit" className='btn bg-orange-600 mt-10 w-full text-white hover:text-black' value="Add Your Services" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;