"use client";
import { useState } from "react";
import Link from "next/link";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <header className="overflow-x-hidden flex p-5 border-b-4 font-bold text-rose-800 relative font-sans">
                {/* Left Section */}
                <div className="flex items-center pl-5">
                    <Link href="/">
                        <img
                            src="/static/redbus_logo.jpg"
                            className="h-10 cursor-pointer"
                            alt="bus logo"
                        />
                    </Link>
                </div>

                {/* Centered "Bus Ticket Booking" Section */}
                <div className="text-3xl text-center flex-grow flex justify-center items-center">
                    <Link href="/">Bus Ticket Booking</Link>
                </div>

                {/* Right Section */}
                <div className="flex gap-4 ml-auto relative items-center font-bold text-rose-800 font-sans">
                    <div>
                        <Link href="/help" className="flex items-center gap-1 cursor-pointer">
                            <img
                                src="/static/help_img.png"
                                alt="help icon"
                                className="h-5 w-5"
                            />
                            Help
                        </Link>
                    </div>

                    <div>
                        <Link href="/language" className="flex items-center gap-1 cursor-pointer">
                            <img
                                src="/static/chat_img.png"
                                alt="language icon"
                                className="h-5 w-5"
                            />
                            English
                        </Link>
                    </div>

                    <div className="flex font-bold text-rose-800 items-center font-sans">
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            className="font-bold bg-white font-sans text-rose-800 gap-1"
                        >
                            <img
                                src="/static/profile_img.png"
                                alt="profile image"
                                className="h-5 w-5"
                            />
                            Account
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href="/my-bookings">My Bookings</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/my-profile">My Profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/my-wallet">My Wallet</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/log-out">Logout</Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
