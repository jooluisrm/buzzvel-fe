import { TypeDadosComentarios } from "@/types/DadosComentariosType";


type Props = {
    item: TypeDadosComentarios;
}

export const Mensagem = ({ item }: Props) => {
    return (
        <div className="bg-white p-8 pt-28 mt-16 flex flex-col rounded-lg max-w-[364px] min-w-[343px] transition-all">
            <div>
                <p className="text-[16px] leading-[22.4px] max-w-[300px] min-h-[202px]">
                    {item.msg}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <img width={64} src={`/avatars/${item.avatar}`} alt="avatar" />
                </div>
                <div>
                    <h4 className="text-[16px] leading-[22.4px]">{item.name}</h4>
                    <p className="text-[#475569] text-[14px] leading-[19.6px]">{item.kwh}</p>
                </div>
            </div>
        </div>
    );
}