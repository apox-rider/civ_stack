'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const goToHome = () => { 
        router.push("/"); 
        setIsOpen(false); 
      };
  const goToAbout = () => { 
        router.push("/About");
        setIsOpen(false); 
      };
  const goToContacts = () => { 
        router.push("/Contacts"); 
        setIsOpen(false); 
      };
  const goToMvp = () => { 
        router.push("/Mvp"); 
        setIsOpen(false); 
      };

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-linear-to-r from-slate-900 to-slate-900 bg- sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1 rounded">Civ</div>
          <span className="text-white">Stack</span>
        </div>


        <div className="hidden md:flex gap-6 lg:gap-8 font-medium text-slate-600">
          <button onClick={goToHome} className="hover:text-blue-600 transition"> Home</button>
          <button onClick={goToAbout} className="hover:text-blue-600 transition"> About us</button>
          <button onClick={goToContacts} className="hover:text-blue-600 transition"> Contacts</button>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 focus:outline-none"
        >
          <svg className="w-8 h-8 text-blue-900 hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>


        <button onClick={goToMvp} className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">
          View MVP
        </button>
      </nav>


      {isOpen && (
        <div className="md:hidden bg-blue-200 border-b border-slate-200">
          <div className="flex flex-col items-center gap-6 py-6 font-medium text-slate-600">
            <button onClick={goToHome} className="hover:text-blue-600 transition">Home</button>
            <button onClick={goToAbout} className="hover:text-blue-600 transition">About us</button>
            <button onClick={goToContacts} className="hover:text-blue-600 transition">Contacts</button>
            <button onClick={goToMvp} className="bg-blue-300 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition">
              View MVP
            </button>
          </div>
        </div>
      )}
    </>
  )
}