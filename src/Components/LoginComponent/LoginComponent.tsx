"use client"
import React, { useState } from 'react'
import logo from '../../assets/eyego-logo.png'
import Image from 'next/image';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface LoginCredentials{
    email:string ; 
    password:string
}


function LoginComponent() {

    let [credentials , setCredentials] = useState<LoginCredentials>({email:"",password:""});
    let [loading , setLoading] = useState(false);

    async function handleLogin()
    {
        console.log(credentials);
        setLoading(true);
        try
        {
            const user = await signInWithEmailAndPassword(auth,credentials.email,credentials.password);
            console.log(user);

        }
        catch(e:any)
        {
            console.log(e);
        }
        finally
        {
            setLoading(false);
        }
        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#162171] via-[#1879a6] to-[#00A0E8] p-4">
            <div className="mx-auto w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-4">
                <Image className="w-20 h-25 mx-auto" src={logo} alt="Eyego Logo" />
                <div className="text-center mt-2 ">
                    <h2 className='text-3xl text-white font-bold'>Welcome Back</h2>
                    <p className='text-lg md:text-xl text-gray-300'>Sign in to Eyego.ai dashboard</p>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="mx-auto w-1/2">
                        <input
                        value={credentials.email}
                        onChange={(e)=>{setCredentials({...credentials,email:e.target.value})}}
                        className="bg-white/20  p-4  h-12 rounded-2xl w-full text-white focus:outline-none focus:ring-2 focus:ring-[#00A0E8]" type="email" placeholder='Email address' required />
                    </div>
                    <div className="mx-auto w-1/2">
                        <input 
                        value={credentials.password}
                        onChange={(e)=>{setCredentials({...credentials,password:e.target.value})}}
                        className="bg-white/20  p-4  h-12 rounded-2xl w-full text-white focus:outline-none focus:ring-2 focus:ring-[#00A0E8]" type="password" placeholder='Password' required />
                    </div>

                    <div className="mx-auto w-1/2 mb-4">
                        <button onClick={()=> handleLogin()} disabled = {loading} className='bg-white/20 border p-4 border-white/30 h-12 rounded-2xl w-full text-white py-2 cursor-pointer hover:bg-[#00A0E8] font-bold text-xl transition-all duration-500'>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent