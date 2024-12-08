"use client"
import { useState } from 'react';
import Link from 'next/link';


function Header() {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    return (
        <div>
            <header className='overflow-x-hidden flex items-center relative p-5 border-4 font-bold text-rose-800'> 
                <div className='flex gap-5 justify-center '>
                    <div className='bg-slate-500'>
                        <Link href="/">
                            <img src='/static/redbus_logo.jpg' 
                                 className='h-10 cursor-pointer' alt='bus logo'></img>
                        </Link>
                    </div>

                    <div className='text-3xl absolute left-1/3 translate-x-1/2 '>
                        <Link href="/"> Bus Ticket Booking </Link>
                    </div>
                </div>

                <div className='flex gap-4 ml-auto relative'>
                    <div className="flex gap-1">
                        <Link href="/help">
                            <div className="flex gap-1 items-center cursor-pointer">
                                <img src='/static/help_img.png' alt='help image' className="h-5 w-5" /> 
                                Help
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <Link href="/language">
                            <div className="flex gap-1 items-center cursor-pointer">
                                <img src='/static/chat_img.png' alt='chat image' className="h-5 w-5" /> 
                                English
                            </div>
                        </Link>
                    </div>
                    {/* Account Section */}
                    <div className="flex gap-1 relative overflow-visible">
                        <button onClick={toggleAccountMenu} className="flex items-center gap-1">
                            <img src='/static/profile_img.png' alt='user profile icon' className="h-6" /> 
                            Account
                        </button>
                        {isAccountMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-50">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/my-bookings">My Bookings</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/profile">My Profile</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/wallet">My Wallet</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/logout">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}


                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
