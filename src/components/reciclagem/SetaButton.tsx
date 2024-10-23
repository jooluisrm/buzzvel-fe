type Props = {
    seta: "🡠" | "🡢";
}

export const SetaButton = ({ seta }: Props) => {
    return (
        <button className="font-bold bg-transparent text-[#FCD34D] border-[2px] border-[#FCD34D] py-[12px] px-[16px] rounded-full hover:bg-[#FCD34D] hover:text-[#581C87] transition-all">
            {seta}
        </button>
    );
}