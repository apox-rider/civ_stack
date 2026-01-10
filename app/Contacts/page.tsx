import React from 'react';
import { Mail, MessageSquare, Phone, Send, HardHat, Code, MapPin, ArrowLeft } from 'lucide-react';
import Nav from '../../components/Nav/page';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Nav/>
      <header className="px-8 pt-12 pb-16 max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Let’s Build the <span className="text-blue-600">Future</span> Together.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Whether you have a structural challenge or a digital vision, our team is ready to bridge the gap.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          

          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="text-blue-600" /> Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interest Area</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition">
                  <option>Shelter & Infrastructure</option>
                  <option>Agricultural Tech (Food)</option>
                  <option>Smart Textiles (Clothing)</option>
                  <option>Fintech/Cosmic™️ Integration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Project Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Send Proposal <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info & Founders */}
          <div className="space-y-8">
            {/* The Duo - Direct Lines */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <HardHat size={120} />
                  <Code size={120}/>
               </div>
               
               <h3 className="text-2xl font-bold mb-8 relative z-10">Direct Lines</h3>
               
               <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
                      <HardHat className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1">Civil Lead</p>
                      <h4 className="font-bold text-lg">Innocent</h4>
                      <p className="text-slate-400 text-sm">innocent@civstack.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
                      <Code className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1">Tech Lead</p>
                      <h4 className="font-bold text-lg">Avith</h4>
                      <p className="text-slate-400 text-sm">avith@civstack.com</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-600">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold">Call Us</h4>
                <p className="text-sm text-slate-500">+255 123 456 789</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold">Headquarters</h4>
                <p className="text-sm text-slate-500">Innovation Hub, 2026</p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <footer className="px-8 py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2026 CivStack Innovations. Powered by Civil Eng & CS.</p>
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
};

export default ContactPage;