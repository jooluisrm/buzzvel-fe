import { GridSection } from "../reciclagem/GridSection";
import { GridItem } from "../reciclagem/Grid";
import { TitleSection } from "../reciclagem/TitleSection";
import Image from "next/image";
import fundoCelular from "@/app/assets/Rectangle 16.png";
import phoneCelular from "@/app/assets/Phone.png"; 
import frameCell from "@/app/assets/Frame 4.png";
import fundoPc from "@/app/assets/Rectangle 16 PC.png";
import phonePc from "@/app/assets/PhonePc.png";
import framePc from "@/app/assets/Frame 4 PC.png";


export const Section3 = () => {
    return (
        <section className="flex flex-col-reverse py-12 px-4 md:flex-row">
            <div className="mb-[480px] md:flex-[1] lg:flex-[1]">
                <Image alt="fundo Celular" src={fundoCelular} className="absolute left-0 lg:hidden"/>
                <Image alt="phone Celular" src={phoneCelular} className="absolute left-14 lg:hidden"/>
                <Image alt="frame Celular" src={frameCell} className="absolute transform translate-y-[147px] translate-x-[217px] lg:hidden"/>
                
                <Image width={400} alt="fundo pc" src={fundoPc} className="hidden absolute left-0 md:hidden lg:block"/>
                <Image width={300} alt="phone Pc" src={phonePc} className="hidden absolute left-14 lg:block"/>
                <Image width={150} alt="frame pc" src={framePc} className="hidden absolute transform translate-y-[180px] translate-x-[260px] lg:block"/>
            </div>
            <div className="flex flex-col gap-6 mb-16 md:flex-[1] lg:flex-[2]">
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