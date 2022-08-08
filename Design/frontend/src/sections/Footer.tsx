import React from 'react';
import { FaFacebook, FaInstagram, FaQuestionCircle, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Section from './Section';


const Footer = () => {
    return (
        <footer className="bg-gray-900 min-h-[100px] text-slate-200 text-[14px] text-center p-3">

            <Section>
                <div className="flex flex-row gap-9 pb-6">
                    <p>Follow us </p>
                    <FaYoutube size={22} className={"hover:text-red-600"} />
                    <FaTwitch size={22} className={"hover:text-blue-500"} />
                    <FaTwitter size={22} className={"hover:text-blue-500"} />
                    <FaFacebook size={22} className={"hover:text-blue-500"} />
                    <FaInstagram size={22} className={"hover:text-pink-600"} />
                </div>

                <div className="flex flex-row content-between justify-between">
                    <div className="flex flex-row gap-9">
                        <Link to={""} className={"hover:text-blue-500"}>Privacy and terms</Link>
                        <Link to={""} className={"hover:text-blue-500"}>About us</Link>
                        <Link to={""} className={"hover:text-blue-500"}>Products</Link>
                    </div>

                    <div className='flex gap-6'>
                        <FaQuestionCircle size={22} />
                        <div>
                            English | United States
                        </div>
                    </div>

                </div>

            </Section>
            <Link to={""}>Website deigned by Hassan Karar</Link>
        </footer>
    )
}

export default Footer;