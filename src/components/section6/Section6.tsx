import Image from "next/image";
import macbookCell from "@/app/assets/MacbookCell.png";
import macbookPc from "@/app/assets/MacbookPc.png";
import roxoCell from "@/app/assets/Ellipse cell roxo.png";
import roxoPc from "@/app/assets/Ellipse pc roxo.png";
import { Button } from "../reciclagem/Button";
import { TitleSection } from "../reciclagem/TitleSection";

export const Section6 = () => {
    return (
        <section className="bg-[#581C87] py-12 px-4 relative md:py-20 md:px-20  lg:bg-[#7E22CE]">

            <div className="relative z-10 pb-16 flex flex-col gap-5 lg:flex-row lg:justify-around lg:items-center">
                <div className="max-w-[894px] lg:pl-28">
                    <TitleSection
                        bg="roxo"
                        h1="All the power that you need for your house is now available"
                        h2="Get the Sun to power your home"
                    />
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Button color="#FCD34D" text="Request a Quote" />
                    <p className="text-[#FFFFFF] text-[16px] leading-[22.4px]">Egestas fringilla aliquam leo</p>
                </div>
            </div>

            <Image alt="notebook cell" src={macbookCell} className="mx-auto relative z-10 lg:hidden" />

            <Image alt="notbook pc" src={macbookPc} className="max-w-[816px] max-h-[540px] mx-auto hidden relative z-10 lg:block" />

            <Image alt="elipse cell" src={roxoCell} className="absolute left-0 bottom-0 lg:hidden" />
            <Image width={782} alt="elipse pc" src={roxoPc} className="hidden absolute right-0 top-0 lg:block" />
        </section>
    );
}