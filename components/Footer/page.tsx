export default function Footer(){
    return(
        <>
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Footer */}
            <footer className="px-8 py-12 border-t border-slate-200 bg-white sticky">
                <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
                <p className="text-slate-500 text-sm">© 2026 CivStack Innovations. Powered by Civil Eng & CS.</p>
                <div className="flex gap-6 text-sm font-medium text-slate-600">
                    <a href="#" className="hover:text-blue-600">LinkedIn</a>
                    <a href="#" className="hover:text-blue-600">GitHub</a>
                    <a href="#" className="hover:text-blue-600">Documentation</a>
                    <a href="#" className="hover:text-blue-600">WhatsApp</a>
                </div>
                </div>
            </footer>
        </div>
        </>
    )
}