import React from 'react';
import { ChevronRight } from 'lucide-react';

const Doctors = () => {
  const doctorsList = [
    { 
      name: "Dr. Sarah Wijaya, Sp.KK", 
      role: "Dermatologist", 
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    },
    { 
      name: "Dr. Budi Santoso, PhD", 
      role: "AI Researcher", 
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    },
    { 
      name: "Dr. Linda Kusuma, Sp.KK", 
      role: "Aesthetic Consultant", 
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Tim Dokter Ahli</h2>
            <p className="text-slate-600">Validator medis dibalik algoritma AI kami.</p>
          </div>
          <a href="#" className="text-teal-600 font-semibold flex items-center mt-4 md:mt-0 hover:gap-2 transition-all">
            Lihat Semua <ChevronRight size={20} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {doctorsList.map((doc, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition border border-teal-50">
              <div className="flex items-center gap-4">
                <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{doc.name}</h4>
                  <p className="text-sm text-teal-600">{doc.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;