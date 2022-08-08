import React from 'react'
import { FaPhone } from 'react-icons/fa';
import Footer from '../sections/Footer';

import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';

const Contact = () => {

    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />

            <main className="grow">
                <Section title='Ways to contact us'>
                    <div className='text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quidem error facere sequi iste consectetur deleniti maiores, libero quaerat, eius qui animi nemo officia quos repudiandae aliquam odio molestias porro?
                    </div>
                </Section>

                <Section>
                    <div>
                        <p>Phone 1: 317 445 095</p>
                        <p>Phone 2: 317 445 095</p>
                        <p>Email: shes7@hotmail.com</p>
                        <p>Email: shes7@hotmail.com</p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;