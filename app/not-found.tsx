// app/not-found.tsx
import Link from 'next/link';
import { ArrowLeft, HardHat, Construction } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Subtle background gradient matching your hero sections */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#e2e8f0_0%,#f8fafc_100%)] opacity-60 pointer-events-none" />

      <div className="relative max-w-2xl">
        {/* Big 404 with engineering twist */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-blue-600/10 tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Construction className="text-amber-500/40" size={140} strokeWidth={1.2} />
          </div>
        </div>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Structure Not Found
        </h2>

        <p className="mt-6 text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
          The page you're looking for either doesn't exist yet, 
          was moved to another foundation, or got lost during construction.
        </p>

        {/* Engineering-themed message */}
        <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-amber-100/60 backdrop-blur-sm rounded-xl border border-amber-200 text-slate-700">
          <HardHat className="text-amber-600" size={28} />
          <span className="font-medium">
            Error 404: Foundation not detected 🏗️
          </span>
        </div>

        {/* Action buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Homepage
          </Link>

          <Link
            href="/Contacts"
            className="px-10 py-5 rounded-xl font-medium text-lg text-slate-700 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
          >
            Contact the Crew →
          </Link>
        </div>

        {/* Small easter egg / branding line */}
        <p className="mt-16 text-sm text-slate-500/70">
          CivStack — Building the future, one stable foundation at a time
        </p>
      </div>
    </div>
  );
}