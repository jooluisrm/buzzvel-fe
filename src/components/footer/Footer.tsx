import logo from "@/app/assets/Logo Container.png";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="py-6 px-4 flex gap-6 flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:px-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <Image alt="logo footer" src={logo} className="min-w-[126.81px] min-h-[32px] mx-auto"/>
                <p className="text-[16px] leading-[22.4px]">@ 2023 Soller, Inc. All rights reserved.</p>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-6">
                        <li className="text-[16px] leading-[22.4px]">Terms</li>
                        <li className="text-[16px] leading-[22.4px]">Privacy</li>
                        <li className="text-[16px] leading-[22.4px]">Support</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}