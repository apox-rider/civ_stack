'use client'

import {  useRouter } from "next/navigation"
export default function Nav(){
    
    const router = useRouter();
    const goToHome=()=>{
        router.push("/")
    };
    const goToContacts=()=>{
        router.push("/contacts")
    };
    const goToAbout=()=>{
        router.push("/about")
    };
    return(
        <>
        <nav className="flex justify-between items-center px-8 py-6 bg-amber-200 border-b border-slate-200 sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1 rounded">Civ</div>
          <span className="text-black">Stack</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
          <a href="#about" className="hover:text-blue-600 transition">Our Duo</a>
          <a href="#finance" className="hover:text-blue-600 transition">Fintech</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">
          View MVP
        </button>
      </nav>
        </>
    )
};