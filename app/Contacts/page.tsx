'use client'
import React from 'react';
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MessageSquare, Phone, Send, HardHat, Code, MapPin, ArrowLeft } from 'lucide-react';
import Nav from '../../components/Nav/page';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const serviceId=process.env.REACT_APP_SERVICE_ID
    if (!form.current) return
    emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID!,     
        process.env.EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.EMAILJS_PUBLIC_KEY!
        )
      .then(
        () => {
          setStatus('success')
          setMessage('Message sent successfully! We will get back to you soon.')
          form.current?.reset()
        },
        (error) => {
          console.error(error)
          setStatus('error')
          setMessage('Something went wrong. Please try again or Civ-Stack directly.')
        }
      )
      .finally(() => {
        setTimeout(() => setStatus('idle'), 5000)
      })
  }
  return (
    <>
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
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              We are actively looking for partners, engineers, pilot communities, investors, 
              and dreamers who believe that deep engineering + thoughtful technology 
              can solve shelter, food, and sustainability challenges at scale.
          </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          

          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="text-blue-600" /> Send a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6"/>
                 <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="user_phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              name="user_phone"
              id="user_phone"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.01] 
                    ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'}`}
            >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <p className="text-emerald-600 font-medium text-center bg-emerald-50 py-2 rounded">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 font-medium text-center bg-red-50 py-2 rounded">Something went wrong. Please try again.</p>
            )}
            </form>
          </div>


          <div className="space-y-8">

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
                      <p className="text-slate-400 text-sm">Innocent@civstack.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
                      <Code className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1">Tech Lead</p>
                      <h4 className="font-bold text-lg">Avith</h4>
                      <p className="text-slate-400 text-sm">Avith@civstack.com</p>
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
    </div>
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
    </>
  );
};

export default ContactPage;