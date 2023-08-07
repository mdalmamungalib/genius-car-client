import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const [orderService, setOrderService] = useState({});
    const { _id, productName, productPrice, customerEmail, customerName, customerMessage, customerId, status } = order;

    useEffect(() => {
        fetch(`https://class-66-67-69-genius-car-server.vercel.app/services/${customerId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
            .catch(error => { console.error(error) })
    }, [customerId]);

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn bg-slate-700 text-sm font-bold text-white'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">Price: ${productPrice}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{customerMessage}</span>
            </td>
            <td>{customerEmail}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn bg-orange-600 text-white hover:text-black">{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrdersRow;