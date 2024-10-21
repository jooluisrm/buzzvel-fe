import { FaArrowRight } from "react-icons/fa6";

type Props = {
    color: string;
    text: string;
}

export const Button = ({ color, text }: Props) => {
    return (
        <button
            style={{ color: `${color}`, borderColor: `${color}` }}
            className="text-[24px] font-bold border-[2px] rounded-full py-[20px] px-[24px] flex items-center justify-center gap-5"
        >
            {text}
            <FaArrowRight color={`${color}`}/>
        </button>
    );
}