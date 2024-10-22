import Image from "next/image";
import fundoCelular from "@/app/assets/Rectangle 16 (1).png";
import cellCelular from "@/app/assets/Phone2.png";
import { GridItem } from "../reciclagem/Grid";
import { GridSection } from "../reciclagem/GridSection";
import { TitleSection } from "../reciclagem/TitleSection";

export const Section4 = () => {
    return (
        <section className="py-12 px-4 md:p-20 md:grid md:grid-cols-2 lg:flex">
                <div className="flex flex-col gap-6 mb-16 lg:flex-[2]">
                    <TitleSection
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
                    <Image alt="fundo celular" src={fundoCelular} className="absolute right-0 md:hidden"/>
                    <Image alt="cellCelular" src={cellCelular} className="absolute right-16 translate-y-6 md:hidden"/>

                    <Image alt="fundo celular" src={fundoCelular} className="hidden absolute right-0 md:block"/>
                    <Image alt="cellCelular" src={cellCelular} className="hidden absolute right-16 translate-y-6 md:block"/>
                </div>
            
        </section>
    );
}