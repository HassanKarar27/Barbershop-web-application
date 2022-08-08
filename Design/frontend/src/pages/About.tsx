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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                        iusto aperiam inventore fugit, illo dolorem laudantium quo magnam
                        saepe qui. In accusamus quos eum aperiam atque dolor non veniam
                        accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A nisi repellendus minus ipsum velit quidem. Ad nulla quos recusandae
                        facilis assumenda. Deserunt hic qui reprehenderit illo id magni
                        eligendi maiores.
                    </p>

                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                        iusto aperiam inventore fugit, illo dolorem laudantium quo magnam
                        saepe qui. In accusamus quos eum aperiam atque dolor non veniam
                        accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A nisi repellendus minus ipsum velit quidem. Ad nulla quos recusandae
                        facilis assumenda. Deserunt hic qui reprehenderit illo id magni
                        eligendi maiores.
                    </p>
                </Section>

            </main>
            <Footer />
        </div>
    )
}

export default About;