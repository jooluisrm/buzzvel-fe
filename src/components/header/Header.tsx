"use client"

import Image from 'next/image';
import Left from "@/app/assets/Left.png";
import { IoHeadsetOutline } from 'react-icons/io5';
import { Button } from '@/components/reciclagem/Button';
import { MenuCell } from './MenuCell';
import { useState } from 'react';

export const Header = () => {

    const [menuLateral, setMenuLateral] = useState(false);

    const mostrarMenu = () => {
        if (!menuLateral) {
            setMenuLateral(true);
        }
    }

    return (
        <header
            className='flex items-center justify-between py-2 px-4 absolute top-0 left-0 right-0 z-10 lg:px-20 lg:py-6'
        >
            <div className='flex items-center gap-[38px]'>
                <h1><a href="/"><Image src={Left} alt="Logotipo da empresa" width={81} height={36} /></a></h1>
                <nav className='hidden lg:block' aria-label="Main Navigation">
                    <ul className='flex gap-4 font-medium text-[16px] leading-[24px]'>
                        <li className='cursor-pointer'><a href="/products">Products</a></li>
                        <li className='cursor-pointer'><a href="/solutions">Solutions</a></li>
                        <li className='cursor-pointer'><a href="/services">Services</a></li>
                        <li className='cursor-pointer'><a href="/configure">Configure</a></li>
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
                    <Button color='#581C87' text='Request a Quote' />

                </div>
                <div onClick={mostrarMenu} className='flex flex-col gap-[3px] cursor-pointer lg:hidden' aria-controls="menu-cell" aria-label="Toggle Menu">
                    <div className='bg-[#0f172a] w-5 h-1'></div>
                    <div className='bg-[#0f172a] w-5 h-1'></div>
                    <div className='bg-[#0f172a] w-5 h-1'></div>
                </div>
                <MenuCell showMenu={menuLateral} setShowMenu={setMenuLateral}/>
            </div>

        </header>
    );
}
