type Props = {
    h3: string;
    p: string;
}

export const GridItem = ({h3, p}: Props) => {
    return (
        <div className="text-center flex flex-col gap-4">
            <h3 className="font-medium text-[20px] leading-[22px]">{h3}</h3>
            <p className="text-[16px] leading-[22.4px]">
                {p}
            </p>
        </div>
    );
}