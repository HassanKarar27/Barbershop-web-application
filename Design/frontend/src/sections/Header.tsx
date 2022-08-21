import React, { useContext } from "react";
import { FaAppStore, FaPlaystation, FaGlobeAmericas } from "react-icons/fa";
import { Link, Navigate, NavLink } from "react-router-dom";
import Button from "../components/Button";

import logo from '../assets/images/logo.png';

import AuthContext from '../contexts/AuthContext';

const Header = () => {

    //@ts-ignore
    const { auth, setAuth } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
    }

    return (
        <header id="header" className="flex flex-col bg-black bg-haircut bg-center bg-cover h-96 text-slate-300">
            {/* upper part and Menu */}
            <div className="flex h-16  justify-between px-2 content-center justify-middle">

                <div className="w-16 flex justify-center">
                    <FaGlobeAmericas className="self-center" size={40} />
                    {/* <img src={logo} /> */}
                </div>

                <nav className="flex content-center">
                    <ul className="self-center">
                        <NavLink to="/" className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={"/appointment"} className="inline-block hover:text-blue-600 transition-all">
                            <li>Appointment</li>
                        </NavLink>
                       
                        <NavLink to={"/contact"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Contact us</li>
                        </NavLink>
                        <Link to={"/about"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>About us</li>
                        </Link>

                        {
                            auth?.user?.role === 'admin' &&
                            <NavLink to={"/create-service"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                                <li>Services</li>
                            </NavLink>
                        }

                        {
                            auth?.user?.role === 'admin' &&
                            <NavLink to={"/all-appointments"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                                <li>Customers appointments</li>
                            </NavLink>
                        }
                    </ul>
                </nav>

                <div className=" justify-self-end self-center">
                    {
                        !auth?.user ?
                            (
                                <>
                                    <NavLink to={"/login"} className="mr-2 hover:text-blue-500">Log In</NavLink>
                                    <NavLink to={"/register"} className="ml-2 hover:text-blue-500">Register</NavLink>
                                </>
                            ) :
                            (
                                <>
                                    <span>{auth.user.email} | </span>
                                    <NavLink to={"#"} onClick={logout} className="ml-2 hover:text-blue-500">Logout</NavLink>
                                </>
                            )
                    }
                </div>

            </div>
            {/* end upper part Menu */}
            <div className="flex flex-col place-items-center justify-center my-auto">
                <h1 className="text-7xl text-transparent mb-12 font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
                    Best version of you!
                </h1>

                <Link to={"/appointment/"} >
                    <Button title="Make an appointment" />
                </Link>

            </div>

        </header>
    );
};

export default Header;
