import React from 'react';
import checkout from '../../../assets/images/checkout/checkout.png'
import { Link } from 'react-router-dom';
import useTitle from '../../useTitale/useTitle';

const AboutClops = () => {
    useTitle("Car Doctor-About");
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
                        <span className='text-orange-700 mt-32 text-lg font-semibold'>Home-Blog</span>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen mt-20 mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/wh7t3N3/555.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-20">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-xl">At Car doctor, we take immense pride in providing exceptional automotive services and creating a welcoming space for all car enthusiasts. Our garage is more than just a place to fix cars; it's a hub where passion meets expertise, and automotive dreams come to life.</p>
                        <p className="mb-5 text-xl">Why Choose CAr doctor?</p>
                        <p className="mb-5">1. Skilled and Dedicated Technicians: Our team of highly skilled and certified technicians are passionate about cars and possess years of experience. From routine maintenance to complex repairs, rest assured that your vehicle will receive top-notch care from the best in the industry.</p>
                        <p className="mb-5">
                            2. State-of-the-Art Equipment: Equipped with cutting-edge tools and advanced diagnostic technology, our garage ensures precise and efficient services, saving you time and money.
                        </p>
                        <p className="mb-5">3. Comprehensive Services: Whether it's routine oil changes, brake repairs, tire replacements, or engine diagnostics, we offer a wide range of services to keep your vehicle running at its best.</p>
                        <p className="mb-5">4. Customer-Centric Approach: Our commitment to customer satisfaction is unwavering. We treat each car that enters our garage as if it were our own, ensuring meticulous attention to detail and personalized service for every client.</p>
                        <p className="mb-5">
                            5. Affordable Pricing: Quality service should never break the bank. We believe in providing transparent pricing with no hidden costs, allowing you to enjoy the best value for your money.
                        </p>
                        <p className="mb-5">6. Clean and Comfortable Environment: Step into our well-maintained and modern garage, where cleanliness and comfort are a priority. We want you to feel at ease while your vehicle is in our care.</p>
                        <p className="mb-5">7. Community of Enthusiasts: Car doctor is not just a service center; it's a place where car enthusiasts gather to share stories, tips, and a mutual love for automobiles. Join our community and experience the joy of being part of something bigger.</p>
                        <p className="mb-5">8. Convenient Location: Located at the heart of [Your City], we are easily accessible, making it effortless for you to reach us whenever you need assistance.</p>
                        <p className="mb-5">Experience the Difference at Car doctor</p>
                        <p className="mb-5">Whether you drive a sleek sports car, a rugged SUV, or a family-friendly minivan, our dedicated team is here to keep your vehicle running smoothly and safely. From regular maintenance to performance upgrades, we've got you covered!</p>
                        <p className="mb-5">Visit us today, and let Car doctor be your trusted automotive partner. Discover excellence, passion, and quality service all under one roof.</p>
                        <p className="mb-5">Your journey begins here. Let's hit the road together!</p>
                        <Link to="/">
                        <button className="btn bg-orange-600 text-white hover:text-black">Go To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClops;