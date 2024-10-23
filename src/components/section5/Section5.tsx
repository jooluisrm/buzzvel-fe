import { Button } from "../reciclagem/Button";
import { Mensagem } from "../reciclagem/Mensagem";
import { SetaButton } from "../reciclagem/SetaButton";
import { TitleSection } from "../reciclagem/TitleSection";

export const Section5 = () => {
    return (
        <section className="bg-[#581C87] mt-[550px] py-12 px-4 md:mt-0">
            <div className="flex flex-col">
                <TitleSection
                    bg="roxo"
                    h1="Make something awesome" h2="Join other Sun harvesters"
                    p="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
                />
                <Button text="Request a Quote" color="#FCD34D" />
            </div>

            <div className="flex flex-col items-center">
                <Mensagem />
                <div className="flex gap-6 mt-16">
                    <SetaButton seta="🡠" />
                    <SetaButton seta="🡢" />
                </div>
            </div>
        </section>
    );
}