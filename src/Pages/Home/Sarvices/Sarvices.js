import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Sarvices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 my-5 font-bold'>Services</p>
                <h2 className='text-5xl font-bold '>Our Service Area</h2>
                <p className='text-slate-500 my-5'>Auto Trade International Limited is a well-established multi-brand automobile service center <br /> that has built a reputation for providing exceptional service.</p>
            </div>
            <div className='grid gap-6 my-6 sm:justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Sarvices;