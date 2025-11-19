import React from 'react';
import { Activity, Camera } from 'lucide-react';

const Hero = () => {
  // Fungsi agar saat tombol diklik, halaman menggulir (scroll) dengan mulus
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Mencegah perilaku default link agar bisa kita kontrol
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Bagian dengan id '${id}' tidak ditemukan.`);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-teal-50 to-white rounded-bl-[100px] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold">
            <Activity size={16} />
            <span>Teknologi AI Kesehatan Terkini v2.4</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Deteksi Dini Kesehatan Kulit dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Kecerdasan Buatan</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Analisis kondisi kulit Anda dalam hitungan detik menggunakan teknologi Computer Vision yang telah divalidasi oleh dermatolog. Cepat, privat, dan akurat.
          </p>
          
          {/* --- BAGIAN TOMBOL DIPERBAIKI DI SINI --- */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Tombol 1: Ke Scanner */}
            <a 
              href="#scan" 
              onClick={(e) => scrollToSection(e, 'scan')}
              className="inline-flex justify-center items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-xl shadow-teal-600/20"
            >
              <Camera size={20} />
              Mulai Analisis
            </a>
            
            {/* Tombol 2: Ke Cara Kerja (Diubah dari <button> ke <a>) */}
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition cursor-pointer"
            >
              Pelajari Cara Kerja
            </a>
          </div>
          {/* ---------------------------------------- */}

          <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Dipercaya oleh 10.000+ pengguna</p>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border border-slate-100 transform rotate-2 hover:rotate-0 transition duration-500">
             <img 
              src="/model/foto/health2.jpg" 
              alt="Dermatology AI Interface" 
              className="rounded-2xl w-full h-[400px] object-cover"
            />
          </div>
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;