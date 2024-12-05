function Header(){
    return (
        <div>
            <header className='w-screen overflow-x-hidden flex items-center relative p-5 border-4 font-bold text-rose-800'> 
                <div className='flex gap-5 justify-center '>
                    <div className='bg-slate-500'><img src='/static/redbus_logo.jpg' 
                                className='h-10'alt='bus logo'></img>
                    </div>
                    <div className='text-3xl absolute left-1/3 translate-x-1/2 '>Bus Ticket Booking</div>
                </div>

                <div className='flex gap-4 ml-auto'>
                    <div className="flex gap-1"> <img src='/static/help_img.png'
                    alt='help image' className=" h-5 w-5" /> Help </div>
                    <div className="flex gap-1"> <img src='/static/chat_img.png'
                    alt='chat image' className=" h-5 w-5" /> English</div>
                    <div className="flex gap-1"> <img src='/static/profile_img.png'
                    alt='user profile icon' className="h-6"/> Account</div>
                </div>
            </header>
        </div>
    )
}

export default Header;