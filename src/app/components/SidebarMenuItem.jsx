"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const SidebarMenuItem = ({ path, icon, title, subtitle }) => {
    const currentPath = usePathname();

    return (
        <Link href={path}
            className={`hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${currentPath == path && 'bg-white/10 '}`}
        >
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                    {icon}
                </div>
                <div>
                    <p className={`font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400`}>
                        {title}
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">{subtitle}</p>
                </div>

            </div>
        </Link>
    )
}
