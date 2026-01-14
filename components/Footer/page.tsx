import { Si1Dot1Dot1Dot1, SiGithub, SiInstagram, SiLinkedin, SiStackbit, SiTheboringcompany, SiWhatsapp, SiYoutube } from "react-icons/si";

 export default function Footer(){
    return(
        <>
         <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-gray-300 py-10 px-6 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white tracking-wide font-serif">
                Civ-Stack
              </p>
              <p className="text-sm mt-1 opacity-80">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>


            <div className="flex justify-center gap-8 text-sm">
              <button  className="hover:text-emerald-400 transition-colors"><SiStackbit size={50}/></button>
              <button  className="hover:text-emerald-400 transition-colors">Co-orp</button>
            </div>


            <div className="flex justify-center md:justify-end gap-6">
              
              <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600"><SiLinkedin size={35}/></a>
            <a href="#" className="hover:text-blue-600"><SiGithub size={35}/></a>
            <a href="#" className="hover:text-blue-600"><SiYoutube size={35}/></a>
            <a href="#" className="hover:text-blue-600"><SiInstagram size={35}/></a>
            <a href="#" className="hover:text-blue-600"><SiWhatsapp size={35}/></a>
          </div>

            </div>
          </div>
        </footer>
        </>
    )
};