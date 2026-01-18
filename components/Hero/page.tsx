 import React from 'react';
import { HardHat, Code, Building2, Sprout, Shirt, BarChart3, ArrowRight } from 'lucide-react';
import Footer from '../Footer/page';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="relative px-8 py-20 lg:py-32 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#e2e8f0_0%,#f8fafc_100%)] opacity-50" />
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          The Future of Infrastructure & Intelligence
        </span>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Where <span className="text-blue-500">Civil Engineering</span> <br /> 
          Meets Digital Innovation.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build the physical foundations of tomorrow using the digital tools of today. Solving global challenges in Shelter, Food, and Sustainability through Structural Engineering digital solutions and proposals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <a href='#solutions'>Explore Solutions<ArrowRight size={20} /></a>
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition">
            <a href='/Contacts'>Contact the Founders</a>
          </button>
        </div>
      </header>


      <section id="solutions" className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 id='solutions' className="text-3xl font-bold mb-4">Core Focus Areas</h2>
          <p className="text-slate-500 mb-12 max-w-xl">Leveraging diploma-level expertise to create Minimum Viable Products for 2026's high-demand markets.</p>
          
          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <Building2 className="text-blue-600 mb-6 group-hover:scale-110 transition" size={40} />
              <h3 className="text-2xl font-bold mb-3">Shelter</h3>
              <p className="text-slate-600 mb-6">Software advancements will drive affordable and resilient housing through BIM (Building Information Modeling), AI-optimized design, and digital twins for modular/prefabricated construction, slashing costs and timelines by enabling precise planning, waste reduction, and faster assembly. Cloud-based project management platforms, 3D printing software, and automated permitting systems will streamline scaling of energy-efficient, low-carbon units while supporting community-focused upgrades and resilient builds in high-demand areas.</p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• Cloud streamlines project management. </li>
                <li>• BIM integrates AI design.</li>
              </ul>
            </div>


            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <Sprout className="text-green-600 mb-6 group-hover:scale-110 transition" size={40} />
              <h3 className="text-2xl font-bold mb-3">Food</h3>
              <p className="text-slate-600 mb-6"> Solutions will rely heavily on AI-powered software for precision fermentation and alternative proteins, optimizing microbial strains, bioreactor conditions, and production yields to make cultivated or fermented options cheaper and more scalable. Integrated platforms using big data analytics, IoT sensors, blockchain for traceability, and machine learning-driven farm management (e.g., satellite monitoring tools) will enhance sustainable agriculture, reduce waste through predictive analytics, and enable circular systems with real-time supply chain transparency.</p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• Analytics cuts food waste.</li>
                <li>• Blockchain ensures supply transparency.</li>
              </ul>
            </div>


            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition group">
              <Shirt className="text-orange-500 mb-6 group-hover:scale-110 transition" size={40} />
              <h3 className="text-2xl font-bold mb-3">Clothing</h3>
              <p className="text-slate-600 mb-6">Trend forecasting and demand prediction to curb overproduction, blockchain and digital product passports for transparent traceability, and software platforms enabling fiber-to-fiber recycling, resale/rental models, and circular supply chains. Design software incorporating sustainable parameters, along with data analytics for material innovation (e.g., bio-based textiles), will promote durable, repairable, and biodegradable options while enforcing regulations and consumer-driven accountability.</p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• AI predicts demand accurately.</li>
                <li>• Data promotes durable textiles.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="px-8 py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 italic animate-bounce">Engineering meets Software.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our strength lies in our duality. By combining structural principles with modern code, we bridge the gap between heavy industry and agile technology.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg"><HardHat className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold">Innocent — Civil Lead</h4>
                  <p className="text-slate-400 text-sm">Structural integrity, material science, and design standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg"><Code className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold">Avith - Tech Lead</h4>
                  <p className="text-slate-400 text-sm">AI integration, IoT dashboards, and full-stack development.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-blue-600 rounded-3xl rotate-3 absolute inset-0 opacity-20 animate-pulse" />
            <div className="aspect-square bg-slate-800 rounded-3xl border border-slate-700 relative z-10 flex items-center justify-center">
              <span className="text-slate-500 italic uppercase tracking-widest"> 
                <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 shadow-2xl overflow-hidden group">

                    <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <span className="text-[10px] text-slate-500 ml-2 font-mono uppercase tracking-widest">Structural_Analysis_v1.0.app</span>
                    </div>


                    <div className="relative h-64 w-full bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center overflow-hidden">

                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[20px_20px]" />
                        

                        <svg width="200" height="120" viewBox="0 0 200 120" className="relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <path d="M20,100 L180,100 L150,40 L50,40 Z" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        <path d="M50,40 L100,10 L150,40" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        <circle cx="100" cy="10" r="3" fill="#ef4444" className="animate-ping" />
                        </svg>


                        <div className="absolute top-4 right-4 bg-blue-600/20 border border-blue-500/50 p-2 rounded text-[10px] font-mono text-blue-400">
                        LIVE_STRESS: 0.042%
                        </div>
                    </div>


                    <div className="mt-6 font-mono text-[12px] space-y-1">
                        <p className="text-green-400">{">"} Initializing AI Structural Audit...</p>
                        <p className="text-slate-400">{">"} Sensor nodes  activating....</p>
                        <p className="text-slate-400">{">"} Sensor nodes 1-12 active. Connection stable.</p>
                        <p className="text-blue-400 animate-pulse">{">"} Optimizing load distribution for 2026 climate standards...</p>
                    </div>
                    </div>
              </span>
            </div>
          </div>
        </div>
      </section>


      <section id="finance" className="px-8 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart3 className="mx-auto text-blue-600 mb-6 " size={48} />
          <h2 className="text-3xl font-bold mb-6 ">Integrated Fintech</h2>
          <div className="text-slate-600 text-lg mb-10">
            We don't just build structures; we build accessibility. Every solution comes with embedded micro-financing and blockchain-based transparency. <br/>Our main resource is the <br/>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className='bg-amber-200 text-amber-800 px-8 py-4 rounded-xl font-bold text-lg shadow-lg  hover:bg-amber-300 transition flex items-center justify-center cursor-pointer'>Cosmic™️</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {['Micro-Loans', 'Blockchain Pay', 'SBA Grant Ready', 'Crowdfunded'].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg border border-slate-200 text-sm font-bold shadow-sm hover:text-blue-600 cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  );
};

export default LandingPage;