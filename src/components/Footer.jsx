import React from 'react';
import { Scan, AlertCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-teal-600 mb-4">
              <Scan size={24} />
              <span className="text-xl font-bold text-slate-800">DermaSmart.AI</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-sm">
              Platform kesehatan kulit berbasis AI terdepan di Indonesia. Misi kami adalah mendemokratisasi akses ke skrining dermatologi awal untuk semua orang.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Layanan</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-teal-600">AI Skin Check</a></li>
              <li><a href="#" className="hover:text-teal-600">Konsultasi Telemedisin</a></li>
              <li><a href="#" className="hover:text-teal-600">Ensiklopedia Kulit</a></li>
              <li><a href="#" className="hover:text-teal-600">Untuk Klinik & RS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-teal-600">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-teal-600">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-teal-600">Disclaimer Medis</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 DermaSmart AI Indonesia. All rights reserved.</p>
          <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-xs font-medium border border-orange-100">
            <AlertCircle size={12} />
            <span>Disclaimer: Aplikasi ini untuk skrining awal, bukan diagnosis medis.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;