import React from 'react'
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';

const About = () => {

    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />
            <main className="w-full grow">

                <Section title='Our history'>
                    <p className="text-justify">
                    It is now possible to give your hair its much-needed makeover at Hair Hassan’s Barbershop. We are a group of expert hair stylists here that provides premium-quality hair cuts services for everyone. Hassan’s Barbershop is not just a brand that we are proud of, but we are also a team that focuses on bringing smiles to our clients through our wide range of services. We at Hassan’s Barbershop want to see your best look. Our goal as a team is to put quality first in our job. That’s why we never compromise our services to ensure that you get what you paid for. Rest assured that your hair will be in good hands the moment our expert hair stylists get a hold of it. And with a wide variety of hair services to choose from, there’s always an option for everyone.

                    </p>  
                </Section>

            </main>
            <Footer />
        </div>
    )
}

export default About;