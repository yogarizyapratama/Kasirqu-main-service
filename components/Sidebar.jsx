'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxDashboard, RxHamburgerMenu, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { FiSettings } from 'react-icons/fi'
import { IoMdClose, IoIosCash } from "react-icons/io";
import ProgressBar from './ProgressBar'
import Header from './Header'

const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(true)

    return (
        <div className='flex'>
            <div className={`fixed ${open ? 'w-56 transition-all duration-300' : 'w-20 transition-all duration-300'} h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between`}>
                <div className={`flex flex-col `}>
                    <div className='text-blue-500 font-bold p-3 rounded-lg w-fit inline-block hover:bg-gray-200  cursor-pointer mb-3' onClick={() => setOpen(prev => !prev)}>
                        {
                            open ? (
                                <IoMdClose size={20} />
                            ) : (
                                <RxHamburgerMenu size={20} />
                            )
                        }
                    </div>
                    <Link href='/'>
                        <div className={`bg-blue-500 text-white p-3 rounded-lg w-full inline-block ${open && 'flex flex-row items-center gap-3 h-full'}`}>
                            <IoIosCash size={20} />
                            <h2 className={`${!open && 'hidden'} font-medium text-sm`}>Kasirqu</h2>
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <Link href='/'>
                        <div className={`bg-gray-100 hover:bg-gray-200 cursor-pointer  w-full my-4 text-black p-3 rounded-lg inline-block ${open && 'flex flex-row items-center gap-3'}`}>
                            <RxDashboard size={20} />
                            <h2 className={`${!open && 'hidden'}  font-medium text-sm`}>Dashboard</h2>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className={`bg-gray-100 hover:bg-gray-200 cursor-pointer w-full my-4 text-black p-3 rounded-lg inline-block ${open && 'flex flex-row items-center gap-3'}`}>
                            <RxPerson size={20} />
                            <h2 className={`${!open && 'hidden'} font-medium text-sm`}>Profile</h2>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 w-full text-black p-3 rounded-lg inline-block ${open && 'flex flex-row items-center gap-3'}`}>
                            <FiSettings size={20} />
                            <h2 className={`${!open && 'hidden'} font-medium text-sm`}>Settings</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <main className={`${open ? 'ml-56 transition-all duration-300' : 'ml-20 transition-all duration-300'} w-full scroll-smooth`}>
                <Header />
                {children}
            </main>
        </div>

    )
}

export default Sidebar