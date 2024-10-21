import { GridSection3 } from "./GridSection3";

export const Section3 = () => {
    return (
        <section className="py-12 px-4">
            <div>

            </div>
            <div className="flex flex-col gap-6">
                <div className="text-center flex flex-col gap-6 mb-12">
                    <h2 className="text-[16px] text-[#D97706] font-medium leading-[17.6px]">Services</h2>
                    <h1 className="text-[32px] leading-[35.2px] font-bold">Personalized services</h1>
                    <p className="text-[16px] leading-[22.4px]">
                        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
                        Auctor turpis semper id sit ornare maecenas lectus sed.
                    </p>
                </div>
                <GridSection3 />
            </div>
        </section>
    );
}