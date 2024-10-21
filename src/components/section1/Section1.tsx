import Image from "next/image";
import img from "@/app/assets/Image.png"
import { Header } from "./header/Header";
import React from 'react';
import { MainSection1 } from "./Main";

export const Section1 = () => {
    return (
        <section className="w-full">
            <Header />

            <div>
                <Image src={img} alt="img placa solar" className="absolute top-0 right-0" />
                <MainSection1 />
            </div>



        </section>
    );
}