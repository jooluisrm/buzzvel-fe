type Props = {
    showMenu: boolean;
    setShowMenu: (showMenu: boolean) => void;
}

export const MenuCell = ({ showMenu, setShowMenu }: Props) => {
    return (
        <div
            style={!showMenu ? { transform: "translateX(100%)" } : { transform: "translateX(0%)" }}
            className="bg-[#0f172a] h-screen min-w-52 fixed top-0 right-0 py-6 px-4 z-50 transition-all"
            aria-hidden={!showMenu}
        >
            <div onClick={() => setShowMenu(false)} className="cursor-pointer absolute top-4 left-4 bg-white rounded-full font-bold py-[5px] px-[12px]" aria-label="Fechar menu">
                X
            </div>
            <div className="text-center py-6 pt-10">
                <h1 className="text-white" id="menu-title">Menu</h1>
            </div>
            <nav aria-labelledby="menu-title">
                <ul className="flex flex-col gap-2">
                    <li className='cursor-pointer text-white'>
                        <a href="/products">Products</a>
                    </li>
                    <li className='cursor-pointer text-white'>
                        <a href="/solutions">Solutions</a>
                    </li>
                    <li className='cursor-pointer text-white'>
                        <a href="/services">Services</a>
                    </li>
                    <li className='cursor-pointer text-white'>
                        <a href="/configure">Configure</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
