import React from "react";
import { FaAppStore, FaPlaystation } from "react-icons/fa";
import Button from "../components/Button";

const Header = () => {
    return (
        <header id="header" className="flex flex-col bg-black bg-haircut bg-center bg-cover h-96 text-slate-300 to-blue-500">
            {/* upper part and Menu */}
            <div className="flex h-16  justify-between px-2 content-center justify-middle">

                <div className="w-16 flex justify-center">
                    <FaPlaystation className="self-center" size={40} />
                </div>

                <nav className="flex content-center">
                    <ul className="self-center">
                        <a className="inline-block mx-3 hover:text-blue-600 transition-all" href="#">
                            <li>Home</li>
                        </a>
                        <a className="inline-block hover:text-blue-600 transition-all" href="#">
                            <li>Appointment</li>
                        </a>
                        <a className="inline-block mx-3 hover:text-blue-600 transition-all" href="#">
                            <li>Calculate price</li>
                        </a>
                        <a className="inline-block mx-3 hover:text-blue-600 transition-all" href="#">
                            <li>Contact us</li>
                        </a>
                        <a className="inline-block mx-3 hover:text-blue-600 transition-all" href="#">
                            <li>About us</li>
                        </a>
                    </ul>
                </nav>

                <div className=" justify-self-end self-center">
                    <a href="#" className="mr-2">
                        Log In
                    </a>
                    |
                    <a href="#" className="ml-2">
                        Register
                    </a>
                </div>

            </div>
            {/* end upper part Menu */}
            <div className="flex flex-col place-items-center justify-center my-auto">
                <span className="text-6xl mb-6">
                    We promise make <span className="font-black">you</span> look <span className="font-extrabold">good</span>!
                </span>
                
                <Button title="Make an appointment" />
            </div>

        </header>
    );
};

export default Header;
