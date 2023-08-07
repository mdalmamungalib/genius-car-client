import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import checkout from '../../../assets/images/checkout/checkout.png';
import OrdersRow from './OrdersRow';
import useTitle from '../../useTitale/useTitle';


const Orders = () => {
    const { user, handleSingOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useTitle("Car Doctor-Orders");

    useEffect(() => {
        fetch(`https://class-66-67-69-genius-car-server.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Genius-Token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return handleSingOut();
                }
                return res.json()
            })
            .then(data => {
                console.log("reside", data)
                setOrders(data)
            })
    }, [user?.email, handleSingOut]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, You want to cancel this order");
        if (proceed) {
            fetch(`https://class-66-67-69-genius-car-server.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Genius-Token")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remaining = orders.filter(ord => ord._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    };

    const handleStatusUpdate = id => {
        fetch(`https://class-66-67-69-genius-car-server.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem("Genius-Token")}`
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(ord => ord._id !== id);
                const approving = orders.find(ord => ord._id === id);
                approving.status = "Approved";
                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            })
    }

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
                        <span className='text-orange-700 mt-32 text-lg font-semibold'>Home-Product Details</span>
                    </div>
                </div>
            </div>

            <div className='text-center mt-10'>
                <h1 className='text-4xl font-bold'>You are adding <span className='text-orange-700'>{orders.length}</span> products</h1>
            </div>

            <div className="overflow-x-auto mt-20 mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product Name/price</th>
                            <th>User Name/Message</th>
                            <th>User Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;