import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
    const { user, handleSingOut } = useContext(AuthContext);

    const handleLogOut = () => {
        handleSingOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    const menuItem = (
        <>
            <li>
                <Link className="font-bold" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className="font-bold" to="/about">
                    About
                </Link>
            </li>
            <li>
                <Link className="font-bold" to="/service">
                    Services
                </Link>
            </li>
            <li>
                <Link className="font-bold" to="/blog">
                    Blog
                </Link>
            </li>
            <li>
                <Link className="font-bold" to="/contact">
                    Contact
                </Link>
            </li>


            {
                user?.uid ?

                    <>
                        <li>
                            <Link className="font-bold" to="/orders">
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleLogOut} className="font-bold">
                                Log Out
                            </Link>
                        </li>
                    </>
                    :
                    <li>
                        <Link className="font-bold" to="/login">
                            Login
                        </Link>
                    </li>
            }
        </>
    );
    return (
        <div className="navbar h-20 mb-12 mt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="mt-5">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex  menu-horizontal font-semibold px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link>
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
