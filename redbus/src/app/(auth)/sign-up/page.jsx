'use client'

import { useState } from "react"
import { users } from "../users"

export default function SignUp(){
    let [user,setUser] = useState("")
    let [mobile,setMobile] = useState("")
    let [address,setAddress] = useState("")

    const verify=()=>{
        if(user && mobile && address){
            users.push({name:user,mobile:Number(mobile),address:address})
            console.log(users)
        }
        else{
            return <p> Provide valid inputs</p>
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(user,mobile,address)

        verify()
    }
    return (
        <>
            <h1>Sign page</h1>
            <div className="flex justify-center bg-slate-400">
                <form 
                    onSubmit={handleSubmit} 
                    className="text-red-950 p-10 bg-opacity-40 rounded-2xl flex flex-wrap gap-2"
                >
                    <div>
                        <div className="p-2">
                            <label htmlFor="name" className="block mb-1 text-white font-extrabold">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border w-full p-2 rounded-xl"
                                placeholder="Enter Full Name"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </div>

                        <div className="p-2">
                            <label htmlFor="mobile" className="block mb-1 text-white font-extrabold">
                                Mobile No.:
                            </label>
                            <input
                                type="number"
                                id="mobile"
                                name="mobile Number"
                                className="border w-52 p-2 rounded-xl"
                                placeholder="Enter Mobile no."
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>

                        <div className="p-2">
                            <label htmlFor="address" className="block mb-1 text-white font-extrabold">
                                Address:
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="border w-52 p-2 rounded-xl"
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
                    </div>
                </form>
            </div>
        </>
    )
}