import React from 'react';
// Import komponen UI
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
// Import komponen AI (Otak utamanya)
// Pastikan file AIScanner.jsx sudah berisi logika TensorFlow yang baru
import AIScanner from './components/AIScanner';

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white scroll-smooth">
      {/* 1. Menu Navigasi Paling Atas */}
      <Navbar />
      
      {/* 2. Bagian Judul Besar (Hero) */}
      <Hero />
      
      {/* 3. Penjelasan Fitur */}
      <Features />
      
      {/* 4. Penjelasan Fitur */}
      <HowItWorks />

      {/* 5. BAGIAN AI SCANNER (Memanggil file AIScanner.jsx) */}
      {/* Di sinilah logika deteksi kulit yang asli berjalan */}
      <AIScanner />
      
      {/* 6. Daftar Dokter */}
      <Doctors />
      
      {/* 7. Bagian Kaki Website */}
      <Footer />
    </div>
  );
}