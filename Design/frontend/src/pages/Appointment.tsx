import React, { useEffect, useState, useContext } from 'react'
import { FaCalendarDay, FaClock, FaPlusCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { QueryClient, useQuery } from '@tanstack/react-query';

import AppointmentCard from '../components/AppointmentCard';
import Footer from '../sections/Footer';
import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';

import AuthContext from '../contexts/authContext';

import dataJson from '../api/data.json';
import { axiosHttpClient } from '../api/api';


const Appointment = () => {

    //@ts-ignore
    const { auth } = useContext(AuthContext);

    const getAppointments = useQuery(['appointments'], () => axiosHttpClient.get('/appointment/'));

    useEffect(() => {
        console.log(auth);
    }, [])

    return (

        <div className="flex flex-col h-screen">
            <HeaderSub />

            <main className="grow">
                <Section title='Make an appointment'>

                    <div className="flex flex-col w-full content-center justify-center">
                        <FaPlusCircle size={76} className={"text-slate-600 hover:text-slate-800 transition-all duration-300 self-center cursor-pointer"} />
                    </div>
                </Section>

                <Section title='Your appointments'>
                    <div className="flex flex-col w-full content-center justify-center">

                        {
                            getAppointments.isLoading ? <div>loading ...</div> :
                                getAppointments.isError ? <div>Error</div> :
                                    getAppointments.data.data < 1 ? <h2 className='p-6 w-1/2 self-center bg-slate-100 font-bold text-slate-400'>You have no appointment yet!</h2> :
                                        getAppointments.data.data.map(
                                            (appointment: any) => <AppointmentCard
                                                key={appointment.id}
                                                id={appointment.id}
                                                date={appointment.date}
                                                time={appointment.time}
                                                completed={appointment.complete}
                                            >{appointment.note}</AppointmentCard>
                                        )
                        }

                    </div>
                </Section>
            </main>
            <Footer />
        </div>

    )
}

export default Appointment;