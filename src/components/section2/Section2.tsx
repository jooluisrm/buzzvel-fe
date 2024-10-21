import Image from "next/image";
import img from "@/app/assets/Desktop.png";
import laranja from "@/app/assets/Ellipse 14.png";
import roxo from "@/app/assets/Ellipse 15.png";

export const Section2 = () => {
    return (
        <section className="flex flex-col items-center text-center py-12 px-4 gap-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[16px] text-[#D97706] font-medium leading-[17.6px]">No more waste</h2>
                    <h1 className="text-[32px] leading-[35.2px] font-bold">Pick the Sun</h1>
                </div>

                <p className="text-[16px] leading-[22.4px]">
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar
                    purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <div className="pt-14">
                <Image alt="desktop" src={img}/>
            </div>
            <Image width={249.86} height={250.22} alt="fundo laranja" src={laranja} className="absolute z-[-1] left-[-100px] translate-y-[150px]"/>
            <Image width={209.74} height={210.1} alt="fundo roxo" src={roxo} className="absolute z-[-1] right-[-180px] translate-y-[180px]" />
        </section>
    );
}