import React from 'react';
import { Link } from 'react-router-dom';
import checkout from "../../../assets/images/checkout/checkout.png"
import useTitle from '../../useTitale/useTitle';

const Blog = () => {
    useTitle("Car Doctor-Blog");
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

        <div className="hero min-h-screen mt-20 mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/5MvmD2g/88.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-20">

                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <h1 className="mb-5 text-2xl font-bold"> Embracing the Journey: A Car Enthusiast's Guide to Automotive Adventure</h1>
                    <h1 className="mb-5 text-2xl font-bold">Introduction:</h1>
                    <p className="mb-5 text-xl">Welcome to the automotive haven, where every rev of the engine ignites our passion for the open road. At Car Doctor, we believe that owning a car is more than just a convenience; it's an exhilarating adventure that deserves to be cherished and celebrated. In this blog, we embark on a thrilling journey, exploring the essence of being a car enthusiast and the magic that unfolds when we connect with our beloved vehicles.</p>
                    <p className="mb-5 text-xl">Unraveling the Connection:</p>
                    <p className="mb-5 text-xl">Allow us to introduce you to the faces behind the wrenches:</p>
                    <p className="mb-5">For many of us, a car is more than a mere mode of transportation; it becomes an extension of our personality and a canvas for self-expression. We delve into the deep-rooted connection we form with our vehicles, discovering how the road becomes an escape and our cars become our trusted companions.</p>
                    <p className="mb-5">
                    Behind the Scenes at Car Doctor:
                    </p>
                    <p className="mb-5">Step behind the curtain and meet the talented individuals who keep the heart of Car Doctor beating. We introduce you to our skilled technicians and their passion for automotive excellence. Learn how our team's dedication to innovation and precision ensures that your beloved car receives the utmost care and attention it deserves.</p>
                    <p className="mb-5">The Art of Car Detailing:</p>
                    <p className="mb-5">
                    Ever wondered how a car can transform from ordinary to extraordinary? We unlock the secrets of the meticulous art of car detailing. From the gleaming paintwork to the immaculate interiors, our detailing experts reveal the steps they take to turn every vehicle into a stunning masterpiece.
                    </p>
                    <p className="mb-5">Venture into the world of classic cars with us as we celebrate automotive heritage. From the iconic vintage models to the timeless classics, we explore the stories that these cars tell and the enthusiasts who keep their legacy alive. Get ready to be captivated by the charm of yesteryears on wheels.</p>
                    <p className="mb-5">From Novice to Enthusiast:Exploring the Classics:</p>
                    <p className="mb-5">We all have to start somewhere on our automotive journey. Whether you're a novice driver or a seasoned road warrior, we offer tips and advice to enhance your driving experience. From essential maintenance to adventure-ready road trips, we've got you covered.</p>
                    <p className="mb-5">Community of Car Enthusiasts:</p>
                    <p className="mb-5">At Car Doctor, we embrace the spirit of camaraderie among car enthusiasts. Join our community as we share stories, experiences, and the joy of driving. Discover the pleasure of connecting with like-minded individuals who share your passion for cars.</p>
                    <p className="mb-5">We are not just a garage; we are a community of car enthusiasts, and we invite you to be a part of it. Whether you need routine maintenance, intricate repairs, or simply want to talk about your dream car, we are here to listen and assist.</p>
                    <p className="mb-5">As we bring this exhilarating journey to a close, we invite you to embrace the road ahead with newfound zeal. Whether you're embarking on your first road trip or taking a classic car to the next level, we're here to be a part of your automotive adventure.</p>
                    <p className="mb-5">At Car Doctor, we celebrate the passion for cars and the memories they create. From routine maintenance to the extraordinary, we're your trusted partners on this thrilling ride.</p>
                    <p className="mb-5">Get ready to ignite the engine of excitement and let your automotive adventure begin. Visit us today and let's make every mile a moment to cherish.</p>
                    <p className="mb-5">Disclaimer: This blog is intended for informational purposes only and not a substitute for professional automotive advice. Always consult a qualified mechanic for your specific vehicle needs.</p>
                    <p className="mb-5">Car Doctor - Where the Road Unfolds!</p>
                    <Link to="/">
                    <button className="btn bg-orange-600 text-white hover:text-black">Go To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Blog;