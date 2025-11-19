import React from 'react';
import { Brain, ShieldCheck, Activity } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: "Deep Learning AI",
      desc: "Model kami dilatih dengan lebih dari 2 juta gambar klinis untuk mendeteksi 15+ jenis penyakit kulit umum."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      title: "Privasi Terjamin",
      desc: "Foto Anda dienkripsi secara end-to-end dan tidak disimpan secara permanen di server kami tanpa izin."
    },
    {
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      title: "Hasil Real-time",
      desc: "Dapatkan analisis awal dan saran perawatan dalam waktu kurang dari 5 detik setelah mengunggah foto."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Teknologi Medis Masa Depan</h2>
          <p className="text-slate-600">Kombinasi keahlian dermatologi klinis dengan kecepatan komputasi modern.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-teal-100 transition duration-300 group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
