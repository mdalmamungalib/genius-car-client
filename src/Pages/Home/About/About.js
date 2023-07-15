import React from 'react';
import Parson from '../../../assets/images/about_us/person.jpg';
import Parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={Parson} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={Parts} alt='' className="absolute right-5 top-1/2 border-8 w-3/5 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl text-orange-600 font-bold'>About Us</p>
                    <h1 className="text-5xl my-5 font-bold">we are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6 text-slate-500">We are a family-owned and operated car garage with over 20 years of experience. We offer a wide range of services, including oil changes, tire rotations, brake repairs, engine diagnostics, transmission repairs, bodywork, and paintwork. We use only genuine parts and offer a 12-month warranty on all our work. <br />
                    <br />
                    We are proud to be a member of the Better Business Bureau and have an A+ rating. We are also a certified ASE (Automotive Service Excellence) repair shop. <br />
                    Visit our website to learn more or to schedule an appointment. We hope to see you soon! <br />
                    </p>
                    <button className="btn bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;