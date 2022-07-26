import React, { useContext } from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';


const HeaderSub = () => {

    //@ts-ignore
    const { auth, setAuth } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
    }

    return (
        <header id="header" className="flex flex-col bg-black bg-center bg-cover text-slate-300">
            <div className="flex min-h-[64px]  justify-between px-2 content-center justify-middle">

                <div className="w-16 flex justify-center">
                    <Link to={"/"} className={"self-center"}>
                        <FaGlobeAmericas size={40} />
                    </Link>
                </div>

                <nav className="flex content-center">
                    <ul className="flex self-center">
                        <NavLink to="/" className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={"/appointment"} className="inline-block hover:text-blue-600 transition-all">
                            <li>Appointment</li>
                        </NavLink>
                        
                        <NavLink to={"/contact"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>Contact us</li>
                        </NavLink>
                        <NavLink to={"/about"} className="inline-block mx-3 hover:text-blue-600 transition-all">
                            <li>About us</li>
                        </NavLink>

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
                                    <NavLink to={"/logout"} className="ml-2 hover:text-blue-500">Logout</NavLink>
                                </>
                            )
                    }
                </div>

            </div>
        </header>
    )
}

export default HeaderSub;