'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavMenu = () => {
    const pathname = usePathname();

    return (
        <ul className="navbar-nav flex gap-4 items-center">
            <li className={`nav-item pb-1 ${pathname === '/' ? 'border-b border-[#f25d0d]' : ''}`}>
                <Link href="/">Home</Link>
            </li>
            <li className={`nav-item pb-1 ${pathname === '/category' ? 'border-b border-[#f25d0d]' : ''}`}>
                <Link href="/category">Category</Link>
            </li>
            <li className={`nav-item pb-1 ${pathname === '/book' ? 'border-b border-[#f25d0d]' : ''}`}>
                <Link href="/book">Book</Link>
            </li>
        </ul>
    )
}

export default NavMenu