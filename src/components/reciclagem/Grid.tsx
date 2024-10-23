type Props = {
    h3: string;
    p: string;
}

export const GridItem = ({ h3, p }: Props) => {
    return (
        <div className="text-center flex flex-col gap-4 md:text-start">
            <h3 className="font-medium text-[20px] leading-[22px] md:text-[24px] md:leading-[26.4px]">{h3}</h3>
            <p className="text-[16px] leading-[22.4px] md:text-[18px] md:leading-[28.8px]">
                {p}
            </p>
        </div>
    );
}