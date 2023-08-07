import React, { useEffect, useState } from 'react';
import PopularProductCard from './PopularProductCard';

const PopularProduct = () => {
    const [popularCard, setPopularCard] = useState([]);
    useEffect(() => {
        fetch("https://class-66-67-69-genius-car-server.vercel.app/product")
            .then(result => result.json())
            .then(data => setPopularCard(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 my-10 font-bold'>Popular Product</p>
                <h2 className='text-5xl font-bold '>Browse Our Product</h2>
                <p className='text-slate-500 my-5'>Auto Trade International Limited is a well-established multi-brand automobile service center <br /> that has built a reputation for providing exceptional service.</p>
            </div>
            <div className='grid gap-6 my-6 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    popularCard.map(product => <PopularProductCard
                        key={product.id}
                        product={product}
                    ></PopularProductCard>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;