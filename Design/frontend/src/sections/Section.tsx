import React from 'react';

interface ISection {
    title: string,
    isDark?: boolean,
    children: React.ReactNode
}

const Section: React.FC<ISection> = (props) => {

    return props.isDark ? (
        <section className={`flex w-full min-h-max py-5 bg-black text-slate-300`}>
            <div className="w-[800px] mx-auto text-center ">
                <p className="my-3 font-normal text-2xl text-center">{props.title}</p>
                {props.children}
            </div>
        </section>
    ) :
        (
            <section className={`flex w-full min-h-max py-5`}>
                <div className="w-[800px] mx-auto ">
                    <p className="my-3 font-normal text-2xl text-center">{props.title}</p>
                    {props.children}
                </div>
            </section>
        )
}

export default Section;