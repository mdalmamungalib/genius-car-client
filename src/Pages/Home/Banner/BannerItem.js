import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='carousel-img'>
                <img src={image} alt='' className="" style={{ height: 580, width: 1280 }} />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white text-xl'>
                    There Are Many Variations Of Passages Of Available, But
                    The Majority Have Suffered Alteration In Some Form
                </p>
            </div>
            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn bg-orange-600 mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle hover:bg-orange-600 mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-orange-600">❯</a>

            </div>
        </div>
    );
};

export default BannerItem;