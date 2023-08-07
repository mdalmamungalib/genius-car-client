import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../useTitale/useTitle';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fastName.value} ${form.lestName.value}`;
        const phone = form.phone.value;
        const email = user?.email || "Unregistered"
        const message = form.message.value;

        const order = {
            customerId: _id,
            productName: title,
            productPrice: price,
            customerName: name,
            customerPhone: phone,
            customerEmail: email,
            customerMessage: message
        };

        fetch("https://class-66-67-69-genius-car-server.vercel.app/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Order placed successfully");
                    form.reset();
                    navigate("/service")
                }
            })
            .catch(err => console.error(err))

    };

    useTitle("Car Doctor-Checkout");

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
                </div>
            </div>

            <div className='border bg-slate-300 p-20 rounded-md mt-20 mb-20'>
                <form onSubmit={handlePlaceOrder}>
                    <h2 className='text-4xl font-bold'>You ar about to order: <span className='text-orange-600'>{title}</span></h2>
                    <h2 className='text-4xl mt-3 font-semibold'>Price: <span className='text-orange-600'>${price}</span></h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center mt-7'>
                        <input name='fastName' type="text" placeholder="First Name" className="input input-bordered w-full " required />
                        <input name='lestName' type="text" placeholder="Last Name" className="input input-bordered w-full " required />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " required />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered w-full mt-5 h-60" placeholder="Your Message" required></textarea>
                    <input type="submit" className='btn bg-orange-600 w-full text-white hover:text-black' value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;