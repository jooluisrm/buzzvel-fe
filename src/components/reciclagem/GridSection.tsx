import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const GridSection = ({ children }: Props) => {
    return (
        <main className="grid grid-cols-2 gap-12">
            {children}
        </main>
    );
}