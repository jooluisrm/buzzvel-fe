import Image from 'next/image';
import Left from "../../../app/assets/Left.png";

export const Header = () => {
    return (
        <header className='flex items-center justify-between py-2 px-4 absolute top-0 left-0 right-0 z-10 lg:px-20 lg:py-6'>
            <h1><Image src={Left} alt="Left" width={81} height={36} /></h1>
            <div className='flex flex-col gap-[2px]'>
                <div className='bg-[#0f172a] w-5 h-1'></div>
                <div className='bg-[#0f172a] w-5 h-1'></div>
                <div className='bg-[#0f172a] w-5 h-1'></div>
            </div>
        </header>
    );
}
