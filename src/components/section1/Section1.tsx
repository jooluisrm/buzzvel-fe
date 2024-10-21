import Image from "next/image";
import img from "@/app/assets/Image.png"
import { Header } from "./header/Header";
import React from 'react';
import { MainSection1 } from "./Main";

export const Section1 = () => {
    return (
        <section className="w-full">
            
            <div className="md:grid md:grid-cols-2 md:justify-between w-full">
                <MainSection1 />
                <Image src={img} alt="img placa solar" className="absolute top-0 right-0 md:flex-1 md:h-[450px] md:w-[400px] lg:h-[550px] lg:w-[500px] xl:h-[694px] xl:w-[673px]" />
            </div>

        </section>
    );
}