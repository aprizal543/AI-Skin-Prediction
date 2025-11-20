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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Bagaimana Cara Kerjanya?</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Deteksi dini kesehatan kulit kini bisa dilakukan sendiri dari rumah hanya dengan 4 langkah mudah.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Garis penghubung (Hanya tampil di layar Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Lingkaran Icon */}
              <div className="z-10 flex items-center justify-center w-24 h-24 mb-6 text-teal-600 transition duration-300 bg-white border-4 rounded-full shadow-sm border-teal-50 group-hover:scale-110 group-hover:border-teal-200">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;