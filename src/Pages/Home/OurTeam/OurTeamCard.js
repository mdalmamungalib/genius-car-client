import React from 'react';
import { FaFacebook, FaSquareTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const OurTeamCard = ({ team }) => {
    const { name, expert, img } = team;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{expert}</p>
                <div className='flex gap-3'>
                    <FaFacebook className='text-2xl text-blue-950'></FaFacebook>
                    <FaSquareTwitter className='text-2xl text-cyan-600'></FaSquareTwitter>
                    <FaLinkedin className='text-2xl text-blue-800'></FaLinkedin>
                    <FaInstagram className='text-2xl text-rose-700'></FaInstagram>
                </div>
            </div>

        </div>
    );
};

export default OurTeamCard;