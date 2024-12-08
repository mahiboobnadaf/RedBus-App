"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    return (
        <div>
            <header className="overflow-x-hidden flex items-center p-5 border-b-4 font-bold text-rose-800 relative">
             
                <div className="flex items-center gap-5">
                    <Link href="/">
                        <img
                            src="/static/redbus_logo.jpg"
                            className="h-10 cursor-pointer"
                            alt="bus logo"
                        />
                    </Link>
                    <div className="text-3xl mx-auto text-center flex-grow">
                        <Link href="/">Bus Ticket Booking</Link>
                    </div>
                </div>

                <div className="flex gap-4 ml-auto relative items-center">
                    <Link href="/help" className="flex items-center gap-1 cursor-pointer">
                        <img
                            src="/static/help_img.png"
                            alt="help icon"
                            className="h-5 w-5"
                        />
                        Help
                    </Link>

                    <Link href="/language" className="flex items-center gap-1 cursor-pointer">
                        <img
                            src="/static/chat_img.png"
                            alt="language icon"
                            className="h-5 w-5"
                        />
                        English
                    </Link>
                    {/* Account Section */}
                    <div className="relative">
                        <button
                            onClick={toggleAccountMenu}
                            aria-expanded={isAccountMenuOpen}
                            aria-label="Toggle Account Menu"
                            className="flex items-center gap-1 focus:outline-none"
                        >
                            <img
                                src="/static/profile_img.png"
                                alt="user profile icon"
                                className="h-6"
                            />
                            Account
                            <span>
                                {isAccountMenuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25l-7.5-7.5-7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 9.75l7.5 7.5 7.5-7.5"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                        {/* Dropdown Menu */}
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
