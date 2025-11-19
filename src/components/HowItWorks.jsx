import React from 'react';
import { Camera, UploadCloud, ScanLine, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera size={32} />,
      title: "1. Ambil Foto",
      desc: "Pastikan area kulit terlihat jelas dengan pencahayaan yang cukup. Hindari foto yang buram atau terlalu gelap."
    },
    {
      icon: <UploadCloud size={32} />,
      title: "2. Unggah Foto",
      desc: "Masuk ke bagian scanner di bawah, lalu upload foto tersebut dari galeri HP atau komputer Anda."
    },
    {
      icon: <ScanLine size={32} />,
      title: "3. Analisis AI",
      desc: "Tunggu beberapa detik. Sistem kecerdasan buatan akan memindai pola tekstur kulit Anda."
    },
    {
      icon: <FileText size={32} />,
      title: "4. Lihat Hasil",
      desc: "Dapatkan nama penyakit kulit, tingkat akurasi, dan saran penanganan awal secara instan."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Bagaimana Cara Kerjanya?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Deteksi dini kesehatan kulit kini bisa dilakukan sendiri dari rumah hanya dengan 4 langkah mudah.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Garis penghubung (Hanya tampil di layar Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Lingkaran Icon */}
              <div className="w-24 h-24 bg-white border-4 border-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:scale-110 group-hover:border-teal-200 transition duration-300 z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;