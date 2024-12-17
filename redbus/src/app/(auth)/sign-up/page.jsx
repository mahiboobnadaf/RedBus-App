'use client'

import { useState } from "react"
import { users } from "../users"
import Link from "next/link"

export default function SignUp(){
    let [user,setUser] = useState("")
    let [mobile,setMobile] = useState("")
    let [address,setAddress] = useState("")
    let [error,setError] = useState("")
    let [success,setSuccess] = useState("")

    const verify=()=>{
        user= user.trim()
        address = address.trim()
        // console.log(user,address)
        
        if (!/^\d{10}$/.test(mobile)) {
            setError("Mobile number must be 10 digits.");
            return false;
        }

        setError("");
        setSuccess("")
        // console.log(user,mobile,address)
        return true
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(user,mobile,address)

        if(verify()){
            users.push({name:user,mobile:Number(mobile),address:address})
            console.log(users)
            setUser("");
            setMobile("");
            setAddress("");
            // console.log("Successfully added user")
            setSuccess("Added new user, Please Login")
        }
    }    

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-slate-400">
                <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-lg">
                    <p className="text-center text-red-500 font-bold">{error}</p>
                    <p className="font-serif font-bold text-center text-2xl text-violet-900 mb-6">
                        Create Your Account
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="text-red-800 flex flex-col gap-4"
                    >
                        <div className="p-2">
                            <label htmlFor="name" className="block mb-1 font-extrabold">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border w-full p-2 rounded-xl text-black"
                                placeholder="Enter Full Name"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </div>
                        <div className="p-2">
                            <label htmlFor="mobile" className="block mb-1 font-extrabold">
                                Mobile No.:
                            </label>
                            <input
                                type="text"
                                pattern="\d{10,10}"
                                id="mobile"
                                name="mobile Number"
                                className="border w-full p-2 rounded-xl text-black"
                                placeholder="Enter Mobile no."
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>
                        <div className="p-2">
                            <label htmlFor="address" className="block mb-1 font-extrabold">
                                Address:
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="border w-full p-2 rounded-xl text-black"
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="p-2 flex w-full justify-center">
                            <button
                                type="submit"
                                className="bg-red-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-800"
                            >
                                Sign Up
                            </button>
                        </div>
                        <p className="text-center text-green-500 font-bold font-serif">{success}</p>
                    </form>
                    <div className="p-2 flex w-full justify-center items-center h-14">
                        <p className="text-blue-900 pr-3 font-bold">Already have an account ?</p>
                        <Link
                            href="/login"
                            className="bg-red-600 text-white font-bold px-3 py-1 rounded-xl hover:bg-red-800"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}