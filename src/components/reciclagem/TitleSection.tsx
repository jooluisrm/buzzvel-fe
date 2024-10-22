type Props = {
    h2: string;
    h1: string;
    p: string;
}

export const TitleSection = ({h2, h1, p}: Props) => {
    return (
        <div className="text-center flex flex-col gap-6 mb-12 md:text-start">
            <h2
                className="text-[16px] text-[#D97706] font-medium leading-[17.6px] md:text-[20px] md:leading-[22px]"
            >
                {h2}
            </h2>
            <h1
                className="text-[32px] leading-[35.2px] font-bold md:text-[56px] md:leading-[61.6px]"
            >
                {h1}
            </h1>
            <p className="text-[16px] leading-[22.4px] md:text-[20px] md:leading-[36px]">
                {p}
            </p>
        </div>
    );
}