import Image from "next/image";
import avatar from "@/app/assets/User Thumb.png"

export const Mensagem = () => {
    return (
        <div className="bg-white p-8 pt-28 mt-16 flex flex-col gap-4 rounded-lg max-w-[364px] min-w-[343px]">
            <div>
                <p className="text-[16px] leading-[22.4px]">
                    Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla.
                    Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet
                    curabitur commodo euismod.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <Image alt="avatar" src={avatar}/>
                </div>
                <div>
                    <h4 className="text-[16px] leading-[22.4px]">Jane Cooper</h4>
                    <p className="text-[#475569] text-[14px] leading-[19.6px]">10KWh</p>
                </div>
            </div>
        </div>
    );
}