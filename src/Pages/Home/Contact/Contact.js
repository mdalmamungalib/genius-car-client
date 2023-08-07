import React from 'react';
import { Link } from 'react-router-dom';
import checkout from "../../../assets/images/checkout/checkout.png"
import useTitle from '../../useTitale/useTitle';


const Contact = () => {
    useTitle("Car Doctor-Contact");
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
                    <span className='text-orange-700 mt-32 text-lg font-semibold'>Home-Contact</span>
                </div>
            </div>
        </div>

        <div className="hero min-h-screen mt-20 mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/5MvmD2g/88.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-20">
            <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <h1 className="mb-5 text-3xl font-bold">Meet the Team - Car Doctor</h1>
                    <p className="mb-5 text-xl">At Car Doctor, we are more than just mechanics; we are a close-knit team of automotive enthusiasts who share an unwavering passion for all things on wheels. Our mission is to provide exceptional service while building meaningful connections with our valued customers.</p>
                    <p className="mb-5 text-xl">Car Doctor was founded on the belief that car care should go beyond just fixing engines and changing tires. We understand that your vehicle is not just a means of transportation; it's an extension of your personality and an integral part of your life's journey.</p>
                    <p className="mb-5 text-xl">Allow us to introduce you to the faces behind the wrenches:</p>
                    <p className="mb-5">1. Team Member 16 - The Driving Force: As the heart and soul of our garage, Team Member 16 brings a wealth of experience and expertise. With a lifelong love for automobiles, they have an innate ability to diagnose issues and provide reliable solutions. When not in the garage, you can find Team Member 16 cruising down scenic roads, always on the lookout for the next automotive adventure.</p>
                    <p className="mb-5">
                        2. Team Member 16 - The Gearhead Guru: Team Member 16 eats, sleeps, and breathes cars. Their vast knowledge of automotive technology and a knack for innovative solutions make them a true gearhead guru. When they're not under the hood, you might find Team Member 16 attending car shows and sharing their passion with fellow enthusiasts.
                    </p>
                    <p className="mb-5">3. Team Member 16 - The Detailing Perfectionist: With an eye for detail, Team Member 16 ensures that every vehicle that leaves our garage shines like new. Their meticulous approach to detailing leaves customers in awe, transforming cars into works of art. When not perfecting every curve, Team Member 16 enjoys polishing their own collection of classic cars.</p>
                    <p className="mb-5">4. Customer-Centric Approach: Our commitment to customer satisfaction is unwavering. We treat each car that enters our garage as if it were our own, ensuring meticulous attention to detail and personalized service for every client.</p>
                    <p className="mb-5">
                        5. Team Member 16 - The Customer Care Specialist: As the friendly face at our front desk, Team Member 16 is the heartbeat of customer satisfaction. They go above and beyond to ensure that every customer feels welcome and well-informed. Passionate about fostering lasting relationships, Team Member 16 treats each visitor like family.
                    </p>
                    <p className="mb-5">Together, we form a dynamic team, united by our love for cars and commitment to excellence. Our goal is not just to fix vehicles but to be your trusted automotive advisors, guiding you through every aspect of car care and helping you make informed decisions.</p>
                    <p className="mb-5">We are not just a garage; we are a community of car enthusiasts, and we invite you to be a part of it. Whether you need routine maintenance, intricate repairs, or simply want to talk about your dream car, we are here to listen and assist.</p>
                    <p className="mb-5">Join us at [Your Garage Name], where passion and expertise collide, and experience automotive care like never before. Let's hit the road together!</p>
                    <p className="mb-5">Get in touch with us today and let's start a journey that celebrates the joy of driving and the spirit of automotive camaraderie. We can't wait to meet you!</p>
                    <Link to="/">
                    <button className="btn bg-orange-600 text-white hover:text-black">Go To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;