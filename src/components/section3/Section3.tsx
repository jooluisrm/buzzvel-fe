import Image from "next/image";
import roxo from "@/app/assets/Rectangle 16.png";
import cell from "@/app/assets/Mobile-App-Placeholder-1.png";
import add from "@/app/assets/Frame 4.png"
import { GridSection } from "../reciclagem/GridSection";
import { GridItem } from "../reciclagem/Grid";

export const Section3 = () => {
    return (
        <section className="py-12 px-4">
            <div className="flex flex-col gap-6 mb-16">
                <div className="text-center flex flex-col gap-6 mb-12">
                    <h2 className="text-[16px] text-[#D97706] font-medium leading-[17.6px]">Services</h2>
                    <h1 className="text-[32px] leading-[35.2px] font-bold">Personalized services</h1>
                    <p className="text-[16px] leading-[22.4px]">
                        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
                        Auctor turpis semper id sit ornare maecenas lectus sed.
                    </p>
                </div>
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
            <div className="mb-32">
                <Image width={599.56} height={523} alt="roxo" src={roxo} className="absolute z-[-2] left-[-70px]" />
                <div className="">
                    <Image width={220} height={471.43} alt="cell" src={cell} className="translate-y-[90px] translate-x-[70px]" />
                    <Image width={110} alt="item4" src={add} className="absolute z-10 translate-y-[-235px] translate-x-[235px]" />
                </div>

            </div>
        </section>
    );
}