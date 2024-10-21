export const MenuCell = () => {
    return (
        <div style={{transform: "translateX(100%)" }} className="bg-[#0f172a] h-screen min-w-52 fixed top-0 right-0 py-6 px-4">
            <div className=" absolute top-4 left-4 bg-white rounded-full font-bold py-[5px] px-[12px]">X</div>
            <div className="text-center py-6 pt-10">
                <h1 className="text-white">Menu</h1>
            </div>
            <ul className="flex flex-col gap-2">
                <li className='cursor-pointer text-white'>Products</li>
                <hr />
                <li className='cursor-pointer text-white'>Solutions</li>
                <hr />
                <li className='cursor-pointer text-white'>Services</li>
                <hr />
                <li className='cursor-pointer text-white'>Configure</li>
                <hr />
            </ul>
        </div>
    );
}