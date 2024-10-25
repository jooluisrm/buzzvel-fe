import Image from "next/image";
import img from "@/app/assets/Desktop.png";
import img2 from "@/app/assets/desqtoppc.png";
import laranja from "@/app/assets/Ellipse 14.png";
import roxo from "@/app/assets/Ellipse 15.png";

export const Section2 = () => {
    return (
        <section aria-labelledby="section2-title" className="flex flex-col items-center text-center py-12 px-4 gap-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[16px] text-[#D97706] font-medium leading-[17.6px] md:text-[20px] md:leading-[22px]">No more waste</h2>
                    <h1 className="text-[32px] leading-[35.2px] font-bold md:text-[56px] md:leading-[61.6px] md:font-extrabold">Pick the Sun</h1>
                </div>

                <p className="text-[16px] leading-[22.4px] md:max-w-[900px] md:text-[20px] md:leading-[36px]">
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar
                    purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <div className="pt-14">
                <Image alt="desktop" src={img} className="md:hidden"/>
                <Image alt="desktop2" src={img2} className="hidden md:block p-20 pt-0"/>
            </div>
            <Image width={249.86} height={250.22} alt="fundo laranja" src={laranja} className="absolute z-[-1] left-[-100px] translate-y-[180px] md:w-[300px] md:left-[0px] 2xl:w-[510px]"/>
            <Image width={209.74} height={210.1} alt="fundo roxo" src={roxo} className="absolute z-[-1] right-[-170px] translate-y-[180px] md:w-[300px] md:right-0 md:translate-y-[280px] 2xl:w-[596px]" />
        </section>        
    );
}