import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../useTitale/useTitle";

const ServicesCard = ({ service, handleDelete }) => {
  const { _id, title, img, price } = service;
  const { user } = useContext(AuthContext);
  useTitle("Car Doctor-Service");
  return (
    <div className="card card-compact w-96 bg-base-100 p-6 shadow-xl">
      <figure className="">
        <img className="h-64 w-72 rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-bold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-orange-600 text-white hover:text-black">Buy Now</button>
          </Link>
        </div>
        {/* === "mdalmamungalib3929@gmail.com" */}
        <div className="text-center">
          {
            user?.email ? <ul className="menu menu-horizontal bg-base-200 rounded-box mt-10">
             
              <li>
                <button className="" onClick={() => handleDelete(_id)}>Delete Service</button>
              </li>
            </ul>
            :
            <></>
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
