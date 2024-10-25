import logo from "@/app/assets/Logo Container.png";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer role="contentinfo" className="py-6 px-4 flex gap-6 flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:px-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <a href="/" aria-label="Pagina inicial"><Image alt="Logo da Soller no rodapé" width={127} height={32} src={logo} className="mx-auto" /></a>
                <p className="text-[16px] leading-[22.4px]">© {new Date().getFullYear()} Soller, Inc. All rights reserved.</p>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-6">
                        <li><a href="/terms" className="text-[16px] leading-[22.4px]">Terms</a></li>
                        <li><a href="/privacy" className="text-[16px] leading-[22.4px]">Privacy</a></li>
                        <li><a href="/support" className="text-[16px] leading-[22.4px]">Support</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}