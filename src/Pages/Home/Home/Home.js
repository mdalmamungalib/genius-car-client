import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Sarvices from '../Sarvices/Sarvices';
import CarInfo from '../CarInfo/CarInfo';
import PopularProduct from '../PopularProduct/PopularProduct';
import OurTeam from '../OurTeam/OurTeam';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Testimonial from '../Testimonial/Testimonial';
import useTitle from '../../useTitale/useTitle';

const Home = () => {
    useTitle("Car Doctor-Home");
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Sarvices></Sarvices>
            <CarInfo></CarInfo>
            <PopularProduct></PopularProduct>
            <OurTeam></OurTeam>
            <CoreFeatures></CoreFeatures>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;