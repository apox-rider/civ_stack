// app/mvp/page.tsx
import Link from 'next/link';
import { Clock, HardHat, ArrowRight, ShieldCheck, Coins, AlertTriangle } from 'lucide-react';
import Nav from '@/components/Nav/page';

export default function MVPPage() {
  return (
    <div className="min-h-screen bg-slate-800">
        <Nav/>
      <section className="relative px-8 py-20 lg:py-32 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#e2e8f0_0%,#f8fafc_100%)] opacity-90" />
        
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 to-slate-700 opacity-98" />

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-amber-400 uppercase bg-amber-950/30 rounded-full border border-amber-800/30">
            Coming Soon • 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
            Civ-Stack technologies
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Practical tools for safer and more affordable housing  
            — built on real Tanzanian construction knowledge and experience
          </p>

          <div className="inline-flex items-center gap-4 px-8 py-5 bg-amber-500/20 backdrop-blur-sm rounded-2xl border border-amber-500/30 text-amber-300 font-medium text-lg">
            <Clock size={28} />
            <span>Launching later in 2026</span>
          </div>
        </div>
      </section>

      {/* Coming Soon content */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-slate-900">
            What we're building
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Civ-Stack will be a set of simple, practical tools designed for everyday builders, homeowners, 
            and small contractors in Tanzania and later abroad — focused on real-world conditions, local materials, and affordable solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <ShieldCheck className="text-blue-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Flood & Wind Checklist</h3>
              <p className="text-slate-600">
                Quick risk assessment for coastal and flood-prone areas
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <HardHat className="text-amber-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Foundation Guidance</h3>
              <p className="text-slate-600">
                Soil type & load → recommended foundation type & depth
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <Coins className="text-green-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Wall Cost Comparison</h3>
              <p className="text-slate-600">
                Realistic 2026 costs for common wall systems
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <AlertTriangle className="text-red-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Common Defect Guide</h3>
              <p className="text-slate-600">
                Visual reference of frequent structural warning signs
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/Contacts"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-6 rounded-xl font-bold text-xl shadow-lg hover:bg-blue-700 transition group"
            >
              Get Notified When It Launches
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>

          <p className="mt-10 text-slate-500 text-lg italic">
            Real engineering tools. For real Tanzanian conditions.  
            Coming when it's ready and truly useful.
          </p>
        </div>
      </section>
      <footer className="px-8 py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2026 CivStack Innovations. Depth in Engineering. Depth in Code.</p>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">Youtube</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">Whatsapp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}