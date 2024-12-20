'use client'

import { useState } from "react";
import { users } from "../users";
import { useRouter } from "next/navigation";

export default function Login() {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        const existingUser = users.find(
            (user) => user.mobile === Number(mobile) && user.password === password
        );

        if (!existingUser) {
            setError("Invalid mobile number or password.");
            return;
        }


        setError("");
        let loginId = users.find((item)=> item.mobile == mobile)
        console.log(loginId.id)
        window.localStorage.setItem('id',`${loginId.id}`)
        console.log("Login successful!");
        console.log(window.localStorage.getItem('id') + "^^")
        router.push("/"); 
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-slate-400">
                <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
                    <p className="text-center text-red-500 font-bold">{error}</p>
                    <p className="font-serif font-bold text-center text-2xl text-violet-900 mb-6">
                        Login to Your Account
                    </p>
                    <form
                        onSubmit={handleLogin}
                        className="text-red-800 flex flex-col gap-4"
                    >
                        <div className="p-2">
                            <label htmlFor="mobile" className="block mb-1 font-extrabold">
                                Mobile No.:
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                className="border w-full p-2 rounded-xl text-black"
                                placeholder="Enter Mobile no."
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>
                        <div className="p-2">
                            <label htmlFor="password" className="block mb-1 font-extrabold">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border w-full p-2 rounded-xl text-black"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="p-2 flex w-full justify-center">
                            <button
                                type="submit"
                                className="bg-red-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-red-800"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="p-2 flex w-full justify-center items-center h-14">
                        <p className="text-blue-900 pr-3 font-bold">Don't have an account?</p>
                        <button
                            onClick={() => router.push("/sign-up")} 
                            className="bg-red-600 text-white font-bold px-3 py-1 rounded-xl hover:bg-red-800"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
