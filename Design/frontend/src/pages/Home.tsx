import React from "react";
import { FaBeer, FaAppStore } from "react-icons/fa";
import Header from "../sections/Header";
import Section from "../sections/Section";

// Images import
import img2 from '../assets/images/pexels-service.jpeg';
import ImageCard from "../components/ImageCard";

const Home = () => {
    return (
        <>
        <Header />
            
        <div className="w-full">
            
            <Section title={"What about us"}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                    iusto aperiam inventore fugit, illo dolorem laudantium quo magnam
                    saepe qui. In accusamus quos eum aperiam atque dolor non veniam
                    accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    A nisi repellendus minus ipsum velit quidem. Ad nulla quos recusandae
                    facilis assumenda. Deserunt hic qui reprehenderit illo id magni
                    eligendi maiores.
                </p>
            </Section>

            {/*  image section */}
            <Section title={"Our services"} isDark >

                <div className="flex flex-wrap justify-between content-between w-full">

                    <ImageCard
                        title="Razor 310"
                        textPreview="Cool stuff of this current year"
                        img={img2}
                    />

                    <ImageCard
                        title="Razor 310"
                        textPreview="Cool stuff of this current year"
                        img={img2}
                    />

                    <ImageCard
                        title="Razor 310"
                        textPreview="Cool stuff of this current year"
                        img={img2}
                    />

                    <ImageCard
                        title="Razor 310"
                        textPreview="Cool stuff of this current year"
                        img={img2}
                    />

                </div>

            </Section>

            <Section title={"Cool"}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                    iusto aperiam inventore fugit, illo dolorem laudantium quo magnam
                    saepe qui. In accusamus quos eum aperiam atque dolor non veniam
                    accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    A nisi repellendus minus ipsum velit quidem. Ad nulla quos recusandae
                    facilis assumenda. Deserunt hic qui reprehenderit illo id magni
                    eligendi maiores.
                </p>
                </Section>
                
                <Section title={"Our services"}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                    iusto aperiam inventore fugit, illo dolorem laudantium quo magnam
                    saepe qui. In accusamus quos eum aperiam atque dolor non veniam
                    accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    A nisi repellendus minus ipsum velit quidem. Ad nulla quos recusandae
                    facilis assumenda. Deserunt hic qui reprehenderit illo id magni
                    eligendi maiores.
                </p>
            </Section>
        </div>

            <footer className="bg-black mb-0 min-h-[100px] text-slate-200 text-center p-3">
                <p>Copyright 2022</p>
                <p>Website deigned by Hassan Karar</p>
            </footer>
        </>
        
    );
};

export default Home;
