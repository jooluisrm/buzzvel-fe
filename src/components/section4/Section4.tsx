import Image from "next/image";
import fundoCelular from "@/app/assets/Rectangle 16 (1).png";
import cellCelular from "@/app/assets/Phone2.png";
import fundoPc from "@/app/assets/Rectangle 16 (1) pc.png";
import cellPc from "@/app/assets/Phone2 pc.png";
import framePc from "@/app/assets/frame pc.png";
import { GridItem } from "../reciclagem/Grid";
import { GridSection } from "../reciclagem/GridSection";
import { TitleSection } from "../reciclagem/TitleSection";

export const Section4 = () => {
    return (
        <section className="py-12 px-4 md:p-20 md:grid md:grid-cols-2 lg:flex md:mb-32">
                <div className="flex flex-col gap-10 mb-16 lg:flex-[2]">
                    <TitleSection
                        bg="branco"
                        h2="System features"
                        h1="Powerful features"
                        p="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
                    />
                    <GridSection>
                        <GridItem
                            h3="Et mauris"
                            p="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                        />
                        <GridItem
                            h3="Et mauris"
                            p="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                        />
                        <GridItem
                            h3="Et mauris"
                            p="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                        />
                        <GridItem
                            h3="Et mauris"
                            p="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                        />
                    </GridSection>
                </div>
                <div className="lg:flex-[1]">
                    <Image alt="fundo celular" src={fundoCelular} className="absolute right-0 lg:hidden"/>
                    <Image alt="cellCelular" src={cellCelular} className="absolute right-16 translate-y-6 lg:hidden"/>

                    <Image width={400} alt="fundo celular" src={fundoPc} className="hidden absolute right-0 lg:block"/>
                    <Image width={300} alt="cellCelular" src={cellPc} className="hidden absolute right-16 translate-y-28 lg:block"/>
                    <Image width={80} alt="fundo celular" src={framePc} className="hidden absolute transform translate-x-[350px] 2xl:translate-x-[535px] translate-y-[495px] lg:block"/>
                </div>
            
        </section>
    );
}