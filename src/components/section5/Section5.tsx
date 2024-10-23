"use client"

import { useRef } from "react";
import { Button } from "../reciclagem/Button";
import { Mensagem } from "../reciclagem/Mensagem";
import { SetaButton } from "../reciclagem/SetaButton";
import { TitleSection } from "../reciclagem/TitleSection";
import { dadosComentarios } from "@/data/DadosComentarios";

export const Section5 = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);


    const scrollLeft = () => {
        if(scrollContainer.current) {
            scrollContainer.current.scrollLeft -= 364;
        }
    }
    const scrollRight = () => {
        if(scrollContainer.current) {
            scrollContainer.current.scrollLeft += 364;
        }
    }

    return (
        <section className="bg-[#581C87] mt-[550px] py-12 px-4 md:mt-0 md:p-20">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <TitleSection
                    bg="roxo"
                    h1="Make something awesome" h2="Join other Sun harvesters"
                    p="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
                />

                <Button text="Request a Quote" color="#FCD34D" />
            </div>

            <div className="flex flex-col items-center lg:items-start">
                <div className="flex gap-6  w-full overflow-x-hidden transition-all scroll-smooth" ref={scrollContainer}>
                    {dadosComentarios.map((item, index) => (
                        <Mensagem item={item} key={index}/>
                    ))}
                </div>

                <div className="flex gap-6 mt-16">
                    <SetaButton seta="🡠" onClick={scrollLeft}/>
                    <SetaButton seta="🡢" onClick={scrollRight}/>
                </div>
            </div>
        </section>
    );
}