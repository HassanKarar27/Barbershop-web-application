import React from "react";
import { FaBeer, FaAppStore } from "react-icons/fa";
import Header from "../sections/Header";
import HeaderSub from '../sections/HeaderSub'
import Section from "../sections/Section";

// Images import
import img2 from '../assets/images/pexels-service.jpeg';
import ImageCard from "../components/ImageCard";
import Footer from "../sections/Footer";

import hero from '../assets/images/hero@2x.webp';
import Carousel from "nuka-carousel";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* <Header /> */}
            <Header />

            <main className="w-full grow">

                <Section title={"Section 1"}>

                    <div className="flex flex-row content-center justify-center mb-[-20px]">
                        <img src={hero} width="350" />
                        <div className="text-justify self-center">
                            <p className="pb-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                                iusto aperiam inventore fugit, illo dolorem laudantium quo magnam
                                saepe qui. In accusamus quos eum aperiam atque dolor non veniam
                                accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                A nisi repellendus minus ipsum velit quidem. Ad nulla quos recusandae
                                facilis assumenda. Deserunt hic qui reprehenderit illo id magni
                                eligendi maiores.
                            </p>
                            <Link to={"#"} className="mt-2 hover:text-blue-500">| Read more</Link>
                        </div>
                    </div>
                </Section>

                {/*  image section */}
                <Section title={"Excellent service"} isDark >

                    {/* <div className="flex flex-wrap justify-between content-between w-full"> */}

                    <Carousel autoplay autoplayReverse>
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

                    </Carousel>


                    {/* </div> */}

                </Section>

                <Section title={"Cool services"}>
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

                <Section title={"Our services"}>
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

    );
};

export default Home;
