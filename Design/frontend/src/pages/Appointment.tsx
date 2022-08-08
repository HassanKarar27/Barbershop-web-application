import React from 'react'
import { FaCalendarDay, FaClock, FaPlusCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AppointmentCard from '../components/AppointmentCard';
import Footer from '../sections/Footer';
import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';

const Appointment = () => {

    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />

            <main className="grow">
                <Section title='Make an appointment'>

                    <div className="flex flex-col w-full content-center justify-center">

                        <FaPlusCircle size={76} className={"text-slate-600 hover:text-slate-800 transition-all duration-300 self-center cursor-pointer"} />
                    
                        <AppointmentCard id={1} date={'11-23-2023'} time={'23:45'} completed >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis, officia necessitatibus dolore expedita voluptate temporibus quo eum dignissimos fuga animi pariatur magnam magni incidunt recusandae, natus voluptatum suscipit quam.
                        </AppointmentCard>

                        <AppointmentCard id={2} date={'01-02-2019'} time={'11:11'} completed={false} service={23} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </AppointmentCard>

                        <AppointmentCard id={2} date={'01-02-2019'} time={'11:11'} completed={false} service={8}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis, officia necessitatibus dolore expedita voluptate temporibus quo eum dignissimos fuga animi pariatu quam.
                        </AppointmentCard>

                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    )
}

export default Appointment;