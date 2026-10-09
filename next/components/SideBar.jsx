'use client';
import React, {useState} from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react';

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const menuItems = [
        { name: 'Start', href: '#start' },
        { name: 'About', href: '#about' },
        { name: 'Work Experience', href: '#work' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

  return (
    <div>
    <div className='hidden lg:flex text-[#EAE151] fixed top-0 left-0 h-screen w-[10%] items-center justify-center'>
        <div className='flex flex-col items-center gap-8'>
            {menuItems.map((item, index) => (
                <div className='flex' key={index}>
                <a key={index} href={item.href} className='text-[#FAFDF6]/90 hover:text-[#DDD92A] transition duration-300'>{item.name}</a>
                </div>
            ))}
            <Link href='/blog' className='text-[#FAFDF6]/90 hover:text-[#DDD92A] transition duration-300'>
                Blog
            </Link>
        </div>
    </div>
        <div className='lg:hidden text-[#EAE151]'>
        {isOpen ? <X className='fixed top-6 right-6 z-50' onClick={toggleMenu} /> : <Menu onClick={toggleMenu} className='fixed top-6 right-6 z-50'/> }
        <div className='fixed inset-0 z-40 flex flex-col items-center gap-8 bg-black/75 justify-center' style={{display: isOpen ? 'flex' : 'none'}}>
            {menuItems.map((item, index) => (
                <a key={index} href={item.href} className='text-[#EAE151] text-2xl' onClick={toggleMenu}>{item.name}</a>
            ))}
            <Link href='/blog' className='text-[#EAE151] text-2xl' onClick={toggleMenu}>Blog</Link>
        </div>
    </div>
    </div>
  )
}
