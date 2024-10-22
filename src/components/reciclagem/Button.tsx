import { FaArrowRight } from "react-icons/fa6";

type Props = {
    color: string;
    text: string;
}

export const Button = ({ color, text }: Props) => {

    const setIsHovered = () => {

    }

    return (
        <button
            className={
                `text-[24px] font-bold border-[2px] rounded-full py-[20px] px-[24px]
                flex items-center justify-center gap-5 md:max-w-[306px] max-h-[64px]
                transition-all hover:shadow-2xl
                ${color === '#581C87' ? `border-[#581C87] text-[#581C87] hover:bg-[#581c87] hover:text-[#FCD34D]` : `border-[#FCD34D] text-[#FCD34D] hover:bg-[#FCD34D] hover:text-[#78350F]`}
                `
            } 
        >   
            {text} ➜
            
        </button>
    );
}