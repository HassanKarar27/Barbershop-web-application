import React from "react";
import { FaAppStore, FaPlaystation, FaGlobeAmericas } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { text } from "stream/consumers";
import Button from "../components/Button";

const Header = () => {
    return (
        <header id="header" className="flex flex-col bg-black bg-haircut bg-center bg-cover h-96 text-slate-300">
            {/* upper part and Menu */}
            <div className="flex h-16  justify-between px-2 content-center justify-middle">

                <div className="w-16 flex justify-center">
                    <FaGlobeAmericas className="self-center" size={40} />
                </div>

                <nav className="flex content-center">
                    <ul className="self-center">
                        <NavLink to="/" className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={"/appointment"} className="inline-block hover:text-blue-600 transition-all">
                            <li>Appointment</li>
                        </NavLink>
                        <NavLink to={"/"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Calculate price</li>
                        </NavLink>
                        <NavLink to={"/contact"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Contact us</li>
                        </NavLink>
                        <Link to={"/about"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>About us</li>
                        </Link>
                    </ul>
                </nav>

                <div className=" justify-self-end self-center">
                    <Link to={"/login"} className="mr-2 hover:text-blue-500">Log In</Link>
                    |
                    <Link to={"/register"} className="ml-2 hover:text-blue-500">Register</Link>
                </div>

            </div>
            {/* end upper part Menu */}
            <div className="flex flex-col place-items-center justify-center my-auto">
                <h1 className="text-7xl text-transparent mb-12 font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
                    Best version of you!
                </h1>

                <Button title="Make an appointment" />
            </div>

        </header>
    );
};

export default Header;
