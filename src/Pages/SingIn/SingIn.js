import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Img from "../../assets/images/login/login.svg";
import { FaGoogle, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import useTitle from '../useTitale/useTitle';


const googleProvider = new GoogleAuthProvider()
const faceBookProvider = new FacebookAuthProvider();

const SingIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState();
    const { handleCreateUser, handleSignInWithPopup, emailVerification, updateUser } = useContext(AuthContext)
    const handleSingIn = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setError("Password should be at least 6 characters")
            return;
        }
        handleCreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleVerifyEmail();
                event.target.reset();
                toast.success("User create successful ! Please Verify Your Email");
                navigate(from, { replace: true });
                handleUpdateUser(name);
                // navigate("/")
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    };

    const handleUpdateUser = (name) => {
        updateUser({
            displayName: name,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch(() => {
                // An error occurred
            })

    }

    const handleVerifyEmail = () => {
        emailVerification()
            .then((result) => {
                const user = result.user;
                toast.success("Email verification sent your email")
                // Email verification sent!
                // ...
            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    }

    const handleGoogleLogin = () => {
        handleSignInWithPopup(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                toast.success("User login successful");
                fetch("https://class-66-67-69-genius-car-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("Genius-Token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    };

    const handleFaceBookLogin = () => {
        handleSignInWithPopup(faceBookProvider)
            .then(result => {
                const user = result.user;
                navigate("/")
                toast.success("user login successful")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    };

    useTitle("Car Doctor-Sing in");
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid gap-28 grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={Img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10">
                    <h1 className="text-5xl text-center font-bold">Sing Up</h1>
                    <form onSubmit={handleSingIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <p className="text-red-600">{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn bg-orange-600 text-white"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                        <h2 className="text-center font-bold mt-3">Or sing in width</h2>
                        <div className="flex gap-5 justify-center text-2xl">
                            <Link>
                                <FaFacebook onClick={handleFaceBookLogin} className="text-sky-900"></FaFacebook>
                            </Link>
                            <Link>
                                <FaLinkedinIn className="text-sky-600"></FaLinkedinIn>
                            </Link>
                            <Link>
                                <FaGoogle onClick={handleGoogleLogin} className="text-sky-900"></FaGoogle>
                            </Link>
                        </div>
                        <h2 className="text-center font-bold mt-5">
                            Already have an account?
                            <Link to="/login" className="text-orange-600">
                                Login
                            </Link>
                        </h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingIn;