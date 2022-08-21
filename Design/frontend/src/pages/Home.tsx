import React from "react";
import { FaBeer, FaAppStore } from "react-icons/fa";
import Header from "../sections/Header";
import HeaderSub from '../sections/HeaderSub'
import Section from "../sections/Section";

// Images import
import img2 from '../assets/images/pexels-service.jpeg';
import img3 from '../assets/images/Tide-edge-haircut.jpg';

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

                <Section title={"Best of the Best."}>

                    <div className="flex flex-row content-center justify-center mb-[-20px]">
                        <img src={hero} width="350" />
                        <div className="text-justify self-center">
                            <p className="pb-2">
                                At our barber shop, we can give you the best haircuts and beyond. We only hire the most highly-trained and experienced hair and styling technicians. That means that you can request any type of style you prefer, from short cuts to long hair styling. When you leave, you’ll have more confidence and a strut in your step, because you just got the best haircut and the best service. We believe that we are the best of the best.
                            </p>
                            <Link to={"#"} className="mt-2 hover:text-blue-500">| Read more</Link>
                        </div>
                    </div>
                </Section>

                {/*  image section */}
                <Section title={"Excellent service"} isDark >

                    {/* <div className="flex flex-wrap justify-between content-between w-full"> */}

                    <Carousel autoplay>
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

                <Section title={"Children’s Haircuts"}>
                    <p className="text-justify">
                        We offer children haircuts for all kids ten years of age and younger.
                        If you’re wondering if your child’s temper will permit a haircut, you can rest easy. Our specialists know how to work with kids. Some kids tolerate haircuts just fine and will sit still, even as the clippers start buzzing. Other kids get upset at the sight of the scissors and the sensation of the hair-styling clippers. You can rest assured that we are experts at providing your child with the best haircut while tending to his or her every need and ensuring a memorable haircut experience.
                    </p>
                </Section>

                <Section title={"Haircuts & Color"}>
                    <p className="text-justify">
                        Maybe you want to show a unique part of your personality or you want to match a particular outfit. We have hair colors to match any style and preference. Ask your beauty salon expert to have your hair colored and styled just the way you want.

                    </p>
                </Section>
            </main>

            <Footer />
        </div>

    );
};

export default Home;
