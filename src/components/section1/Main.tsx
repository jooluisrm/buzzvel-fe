import { Button } from "../reciclagem/Button";

export const MainSection1 = () => {
    return (
        <div className="py-2 px-4 mt-96 text-center flex flex-col gap-[24px]">
            <h1 className="text-[40px] leading-[44px] font-bold">Get the Sun to Power Your Home</h1>
            <p className="text-[18px] leading-[28.8px]">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p> 
            <Button color="#581C87" text="Request a Quote"/>
        </div>
    );
}