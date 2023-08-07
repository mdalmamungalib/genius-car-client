import React, { useContext, useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Sarvices = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://class-66-67-69-genius-car-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete the card?");
        if (proceed) {
            fetch(`https://class-66-67-69-genius-car-server.vercel.app/services/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = services.filter(srv => srv._id !== id);
                        setServices(remaining);
                    }
                })
        }
    }
    return (
        <div className='mb-20'>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 my-5 font-bold'>Services</p>
                <h2 className='text-5xl font-bold '>Our Service Area</h2>
                <p className='text-slate-500 my-5'>Auto Trade International Limited is a well-established multi-brand automobile service center <br /> that has built a reputation for providing exceptional service.</p>
            </div>
            <div className='grid gap-6 my-6 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        handleDelete={handleDelete}
                    ></ServicesCard>)
                }
            </div>
            {
                user?.email ?

                    <div className='grid justify-items-center'>
                        <Link to="/addServices">
                            <button className='btn bg-orange-600 text-white hover:text-black'>Add Service</button>
                        </Link>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default Sarvices;