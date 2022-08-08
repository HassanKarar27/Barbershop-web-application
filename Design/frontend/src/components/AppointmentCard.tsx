import React from 'react'
import { FaCalendarAlt, FaCalendarDay, FaClock, FaTrash } from 'react-icons/fa'

interface IAppointmentCard {
    id: number;
    date: string;
    time: string;
    completed: boolean;
    service?: number;
    children?: React.ReactNode;
}

const AppointmentCard: React.FC<IAppointmentCard> = (props) => {

    return props.completed ? (
        <div className="flex flex-col w-full my-2 p-5 bg-blue-500 text-white rounded-md">
            <div className="flex flex-row justify-between mb-3">
                <p className="font-bold">Status: {props.completed ? `completed` : `incomplete`}</p>
                <p className="font-bold"><FaCalendarDay className='inline' /> {props.date}</p>
                <p className="font-bold"><FaClock className='inline' /> {props.time}</p>
            </div>
            <div className="p-0 justify-start content-start text-left">
                {props.children}
            </div>

            <div className={"flex flex-row mt-2"}>
                <div className={"flex flex-row h-3 w-3 bg-white p-4 rounded-[68px] text-center"}>
                    <p className="font-semibold text-blue-500 relative top-[-11px] right-2 ">{props.service ?? 0}</p>
                </div>

                <div className={"flex flex-row h-3 w-3 bg-white p-4 rounded-[68px] text-center"}>
                <FaTrash className="stoke-blue-500"/>
                </div>

            </div>
        </div>
    ) : (
        <div className="flex flex-col w-full my-2 p-5 bg-slate-500 text-white rounded-md">
            <div className="flex flex-row justify-between mb-3">
                <p className="font-bold">Status: {props.completed ? `completed` : `incomplete`}</p>
                <p className="font-bold"><FaCalendarDay className='inline' /> {props.date}</p>
                <p className="font-bold"><FaClock className='inline' /> {props.time}</p>
            </div>
            <div className="p-0 justify-start content-start text-left">
                {props.children}
            </div>

            <div className={"flex flex-row mt-2 content-center"}>
                <div className={"flex flex-row h-3 w-3 bg-white p-4 rounded-[68px] text-center"}>
                    <p className="font-semibold text-slate-500 relative top-[-11px] right-2 ">{props.service ?? 0}</p>
                </div>

                <FaTrash />
            </div>
        </div>
    );
}

export default AppointmentCard;