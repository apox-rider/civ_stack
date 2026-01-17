
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, HardHat, ArrowLeft } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#e2e8f0_0%,#f8fafc_100%)] opacity-60 pointer-events-none" />

      <div className="text-center max-w-2xl relative">
        <div className="mb-10 relative inline-block">
          <AlertTriangle 
            className="text-amber-500 mx-auto" 
            size={100} 
            strokeWidth={1.2} 
          />
          <HardHat 
            className="text-slate-700 absolute -bottom-4 -right-4" 
            size={60} 
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Structural Failure Detected
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
          Something went wrong on our end while trying to load this page.<br />
          Our engineering team has been notified and we're already reinforcing the foundation.
          Please be patient and try again later 
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            onClick={reset}
            className="group bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
          >
            Re-Load
            <span className="text-xl">⟳</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 px-10 py-5 rounded-xl font-medium text-lg text-slate-700 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Return to Homepage
          </Link>
        </div>

        <div className="space-y-3 text-slate-500">
          <p className="text-lg font-medium">
            Don't worry — we're building better systems every day to upgrade our services.
          </p>
          <p className="text-sm">
            Error ID: {error.digest || 'unknown'} • CivStack Engineering Team
          </p>
          <p className="text-sm mt-6 italic">
            © 2026 Civ_Stack — Depth in Engineering. Depth in Code.
          </p>
        </div>
      </div>
    </div>
  );
}