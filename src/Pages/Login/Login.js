import React, { useContext, useState } from "react";
import Img from "../../assets/images/login/login.svg";
import { FaGoogle, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../useTitale/useTitle";

const googleProvider = new GoogleAuthProvider()
const faceBookProvider = new FacebookAuthProvider();

const Login = () => {
  const [error, setError] = useState();
  const [userEmail, setUserEmail] = useState();
  const { handleLogin, handleSignInWithPopup, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    handleLogin(email, password)
      .then(result => {
        const user = result.user;
        const currentUser = {
          email: user.email
        }
        console.log(currentUser);
        event.target.reset();
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
        console.log(error);
        setError(error.message)
      })
  };

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
        console.log(user);
        navigate("/")
        toast.success("user login successful")
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    setUserEmail(email)
  }

  const handleResetPassword = () => {
    if (!userEmail) {
      alert("Please enter your email");
      return;
    }
    resetPassword(userEmail)
      .then(result => {
        console.log(result);
        alert("Please cake your email and reset your Password")
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })
  }

  useTitle("Car doctor-login");
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid gap-28 grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={Img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                onBlur={handleEmail}
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-600">{error}</p>
              <label className="label">
                <Link onClick={handleResetPassword} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-600 text-white"
                type="submit"
                value="Login"
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
            <h2 className="text-center font-bold mt-5 ">
              Have an account?
              <Link to="/singIn" className="text-orange-600">
                Sing In
              </Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
