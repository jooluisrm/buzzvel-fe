import { TypeDadosComentarios } from "@/types/DadosComentariosType";


type Props = {
    item: TypeDadosComentarios;
}

export const Mensagem = ({ item }: Props) => {
    return (
        <div className="bg-white p-8 pt-16 mt-16 flex flex-col justify-between rounded-lg max-w-[364px] min-w-[343px] min-h-[359px] max-h-[442px] transition-all">
            <div>
                <p className="text-[16px] leading-[22.4px] max-w-[300px] min-h-[202px] md:text-[18px] md:leading-[28.8px] md:pb-5">
                    {item.msg}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <img width={64} src={`/avatars/${item.avatar}`} alt="avatar" />
                </div>
                <div>
                    <h4 className="text-[16px] leading-[22.4px] md:text-[18px] md:leading-[28.8px]">{item.name}</h4>
                    <p className="text-[#475569] text-[14px] leading-[19.6px] md:text-[16px] md:leading-[22.4px]">{item.kwh}</p>
                </div>
            </div>
        </div>
    );
}