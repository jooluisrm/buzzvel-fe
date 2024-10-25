import Image from "next/image";
import img from "@/app/assets/UserThumb.png"
import { Button } from "../reciclagem/Button";

export const MainSection1 = () => {
    return (
        <main className="py-[48px] px-[16px] flex-1 lg:p-20">
            <div className="mt-96 text-center flex flex-col gap-[24px] md:mt-6 md:text-start">
                <h1 className="text-[40px] leading-[44px] font-bold lg:text-[72px] lg:leading-[79.2px] lg:max-w-[600px]">Get the Sun to Power Your Home</h1>
                <p className="text-[18px] leading-[28.8px]  max-w-[600px] lg:text-[24px] lg:leading-[38.4px]">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <div className="mx-auto md:mx-0">
                    <Button color="#581C87" text="Request a Quote" />
                </div>

            </div>
            <div className="mt-[64px] flex flex-col gap-[16px]">
                <p className="text-[16px] leading-[22.4px] max-w-[600px] lg:text-[18px] lg:leading-[28.8px]">
                    “Viverra viverra nibh enim et aliquam, enim. Tempor,
                    sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                </p>
                <div className="flex items-center gap-[16px]">
                    <div>
                        <Image src={img} alt="avatar" />
                    </div>
                    <div>
                        <h4 className="text-[18px]">Rwanda Melflor</h4>
                        <p className="text-[16px] text-[#475569]">zerowaste.com</p>
                    </div>
                </div>
            </div>
        </main>

    );
}