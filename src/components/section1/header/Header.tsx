import Image from 'next/image';
import Left from "../../../app/assets/Left.png";
import { IoHeadsetOutline } from 'react-icons/io5';
import { Button } from '@/components/reciclagem/Button';

export const Header = () => {
    return (
        <header
            className='flex items-center justify-between py-2 px-4 absolute top-0 left-0 right-0 z-10 lg:px-20 lg:py-6'
        >
            <div className='flex items-center gap-[38px]'>
                <h1><Image src={Left} alt="Left" width={81} height={36} /></h1>
                <nav className='hidden lg:block'>
                    <ul className='flex gap-4 font-medium text-[16px] leading-[24px]'>
                        <li className='cursor-pointer'>Products</li>
                        <li className='cursor-pointer'>Solutions</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Configure</li>
                    </ul>
                </nav>
            </div>

            <div>
                <div className='items-center gap-4 hidden lg:flex'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <IoHeadsetOutline color="#0369A1" />
                        </div>
                        <p className='text-[#0369A1]'>555 818 282</p>
                    </div>
                    <Button color='#581C87' text='Request a Quote'/>

                </div>
                <div className='flex flex-col gap-[2px] cursor-pointer lg:hidden'>
                    <div className='bg-[#0f172a] w-5 h-1'></div>
                    <div className='bg-[#0f172a] w-5 h-1'></div>
                    <div className='bg-[#0f172a] w-5 h-1'></div>
                </div>
            </div>

        </header>
    );
}
