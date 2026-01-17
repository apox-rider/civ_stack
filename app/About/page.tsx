'use client';

import React from 'react';
import { HardHat, Code, Building2, Sprout, Shirt, Globe, Target, HeartHandshake, ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav/page';
import Footer from '@/components/Footer/page';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
    <Nav/>
      <header className="relative px-8 py-20 lg:py-32 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#e2e8f0_0%,#f8fafc_100%)] opacity-50" />
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Who We Are & Where We're Going
        </span>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          CivStack — Engineering <span className="text-blue-600">Depth</span> <br />
          for a Sustainable Tomorrow
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We are a dual-discipline startup fusing classical civil engineering with cutting-edge AI, IoT, and software — to solve humanity's most pressing physical needs: safe shelter, nourished communities, and circular resource systems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <a href='#vision'>Explore Our Vision <ArrowRight size={20} /></a>
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition">
            <a href='#founders'>Meet the Founders</a>
          </button>
        </div>
      </header>


      <section className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 id='vision' className="text-4xl font-bold mb-6">Our North Star</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At CivStack, we believe the greatest engineering challenges of the 21st century cannot be solved with concrete and steel alone — nor with code in isolation.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our **deep goal** is to create scalable, accessible systems that make resilient infrastructure, food security, and sustainable materials available to billions — starting with diploma-level innovation and growing into global impact platforms.
            </p>

            <div className="space-y-8 mt-12">
              <div className="flex gap-5">
                <div className="bg-blue-100 p-4 rounded-xl shrink-0"><Target className="text-blue-600" size={32} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Mission</h3>
                  <p className="text-slate-600">
                    Build practical Minimum Viable Products (MVPs) in 2026–2028 that integrate structural engineering excellence with AI/IoT to directly improve shelter safety, food production efficiency, and circular textile systems in vulnerable communities.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-green-100 p-4 rounded-xl shrink-0"><Globe className="text-green-600" size={32} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Vision 2030's</h3>
                  <p className="text-slate-600">
                    A world where every new building is disaster-resilient by design, every farming community has predictive smart infrastructure, and agricultural waste becomes high-value clothing material — all powered by transparent, accessible technology stacks.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="relative">
            <div className="aspect-video bg-slate-900 rounded-3xl border border-slate-700 relative z-10 overflow-hidden shadow-2xl">
              <div className="p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-xs text-slate-400 ml-2 font-mono uppercase tracking-widest">CivStack_Goals_v2026.terminal</span>
                </div>

                <div className="flex-1 bg-slate-950 rounded-lg p-5 font-mono text-sm space-y-3 text-slate-300">
                  <p className="text-green-400">{'>'} Loading long-term impact parameters...</p>
                  <p>{'>'} Shelter: 1.2B people need resilient housing by 2030 → AI+BIM targets 40% cost reduction</p>
                  <p>{'>'} Food: Smart structures → +35% yield in water-scarce regions</p>
                  <p className="text-blue-400 animate-pulse">{'>'} Clothing: Circular economy → 28M tons ag-waste → textile per year</p>
                  <p className="text-amber-400">{'>'} Core principle: Technology must serve physical reality, not replace it.</p>
                  <p className="text-purple-400 mt-4">{'>'} Simulation complete. Depth level: High. Ready for deployment.</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-blue-600 rounded-3xl opacity-10 blur-xl animate-pulse" />
          </div>
        </div>
      </section>


      <section className="px-8 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Guiding Principles</h2>
          <p className="text-slate-600 text-center text-lg mb-16 max-w-3xl mx-auto">
            These values define how deeply we commit to our goals — every line of code, every structural calculation, every partnership.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition group">
              <HeartHandshake className="text-blue-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4">Impact First</h3>
              <p className="text-slate-600">
                Every decision is measured by real-world human & environmental benefit — not hype or short-term metrics.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition group">
              <HardHat className="text-amber-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4">Engineering Rigor</h3>
              <p className="text-slate-600">
                We respect physics and codes of practice as sacred — digital tools exist to enhance, never shortcut, structural truth.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition group">
              <Code className="text-blue-600 mb-6 group-hover:scale-110 transition" size={44} />
              <h3 className="text-2xl font-bold mb-4">Radical Accessibility</h3>
              <p className="text-slate-600">
                Our MVPs are built for emerging markets first — affordable, offline-capable, and open to local engineers & farmers.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="px-8 py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id='founders' className="text-4xl font-bold mb-6 italic">The People Behind the Purpose</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Two complementary minds. One shared obsession: using technology to make the physical world safer, fairer, and more sustainable.
            </p>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="bg-blue-600/30 p-4 rounded-xl"><HardHat className="text-blue-400" size={40} /></div>
                <div>
                  <h4 className="text-2xl font-bold">Innocent— Civil Engineering Lead</h4>
                  <p className="text-slate-400 mt-1">Structural integrity, seismic design, sustainable materials, and real-world construction standards.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-blue-600/30 p-4 rounded-xl"><Code className="text-blue-400" size={40} /></div>
                <div>
                  <h4 className="text-2xl font-bold">Avith— Technology Lead</h4>
                  <p className="text-slate-400 mt-1">AI model integration, IoT systems, full-stack development, and scalable digital twins.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">

            <div className="aspect-square bg-linear-to-br from-blue-900 to-slate-950 rounded-3xl flex items-center justify-center">
              <span className="text-6xl font-black text-blue-600/30 tracking-widest animate-ping">CIVSTACK</span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;