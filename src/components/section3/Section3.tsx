import Image from "next/image";
import roxo from "@/app/assets/Rectangle 16.png";
import cell from "@/app/assets/Mobile-App-Placeholder-1.png";
import add from "@/app/assets/Frame 4.png"
import { GridSection } from "../reciclagem/GridSection";
import { GridItem } from "../reciclagem/Grid";
import { TitleSection } from "../reciclagem/TitleSection";

export const Section3 = () => {
    return (
        <section className="flex flex-col-reverse py-12 px-4 md:grid md:grid-cols-2 md:items-center">
            <div className="mb-32">
                <Image width={599.56} height={523} alt="roxo" src={roxo} className="absolute z-[-2] left-[-70px] md:w-[400px] lg:w-[600px]" />
                <div className="">
                    <Image width={220} height={471.43} alt="cell" src={cell} className="translate-y-[90px] translate-x-[70px] lg:w-[300px] lg:translate-x-[190px]" />
                    <Image width={110} alt="item4" src={add} className="absolute z-auto translate-y-[-235px] translate-x-[235px] lg:translate-x-[420px] lg:translate-y-[-345px] lg:w-[140px]" />
                </div>
            </div>
            <div className="flex flex-col gap-6 mb-16">
                <TitleSection h2="Services" h1="Personalized services" p="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."/>
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

        </section>
    );
}