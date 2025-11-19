import React, { useState, useEffect, useRef } from 'react';
import { Upload, Scan, CheckCircle, X, AlertTriangle } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

const AIScanner = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [model, setModel] = useState(null);
  const [modelLoading, setModelLoading] = useState(true);
  const imageRef = useRef(null);

  // --- PENTING: DAFTAR LABEL KELAS ---
  // Ubah daftar ini agar SAMA PERSIS dengan urutan 'class_names' di model Python Anda.
  // Contoh: Jika di Python [0] adalah 'Blackheads', maka di sini array pertama juga harus 'Blackheads'.
  const CLASSES = [
    'Blackheads', 
    'Cyst', 
    'Papules', 
    'Pustules',
    'Whiteheads'
  ];

  // Load Model TensorFlow.js
  useEffect(() => {
    const loadModel = async () => {
      try {
        // Pastikan file model.json & .bin ada di folder public/model/
        const loadedModel = await tf.loadGraphModel('/model/model.json');
        setModel(loadedModel);
        setModelLoading(false);
        console.log("Model TensorFlow berhasil dimuat.");
      } catch (error) {
        console.error("Gagal memuat model:", error);
        setModelLoading(false);
      }
    };
    loadModel();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setImage(file); // Simpan file asli
      setResult(null);
    }
  };

  const startAnalysis = async () => {
    if (!model || !imageRef.current) return;
    setAnalyzing(true);

    // Beri jeda sedikit untuk animasi loading
    setTimeout(async () => {
      try {
        const tensor = tf.tidy(() => {
          // 1. Ambil gambar dari tag <img>
          let img = tf.browser.fromPixels(imageRef.current);
          
          // 2. Resize gambar (Sesuaikan dengan input shape model Anda, misal 224x224)
          img = tf.image.resizeBilinear(img, [224, 224]); 

          // 3. Normalisasi (0-255 menjadi 0-1)
          img = img.div(tf.scalar(255.0));

          // 4. Tambah dimensi batch (jadi array 4D)
          return img.expandDims(0);
        });

        // 5. Prediksi
        const prediction = await model.predict(tensor).data();
        
        // 6. Ambil nilai tertinggi
        const maxProbability = Math.max(...prediction);
        const classIndex = prediction.indexOf(maxProbability);
        
        const detectedLabel = CLASSES[classIndex] || "Tidak Dikenali";

        // Simpan hasil murni dari AI
        setResult({
          condition: detectedLabel,
          confidence: (maxProbability * 100).toFixed(2)
        });

        // Bersihkan memori tensor
        tensor.dispose();

      } catch (err) {
        console.error("Error prediksi:", err);
        alert("Terjadi kesalahan saat memproses gambar.");
      } finally {
        setAnalyzing(false);
      }
    }, 1000);
  };

  const resetScan = () => {
    setPreviewUrl(null);
    setImage(null);
    setResult(null);
    setAnalyzing(false);
  };

  return (
    <section id="scan" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2dd4bf 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">
            {modelLoading ? "Memuat Model..." : "TensorFlow Model Ready"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">AI Skin Detector</h2>
          <p className="text-slate-300">Deteksi murni menggunakan model Deep Learning Anda.</p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-2xl">
          {!previewUrl ? (
            // TAMPILAN UPLOAD
            <div className="border-2 border-dashed border-slate-600 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:border-teal-500 hover:bg-slate-700/50 transition cursor-pointer group relative">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                disabled={modelLoading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-600 transition">
                {modelLoading ? (
                   <div className="animate-spin w-8 h-8 border-4 border-slate-400 border-t-transparent rounded-full"></div>
                ) : (
                   <Upload className="w-8 h-8 text-slate-300 group-hover:text-white" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {modelLoading ? "Loading Model..." : "Upload Gambar"}
              </h3>
              <p className="text-slate-400 text-sm">Format JPG/PNG</p>
            </div>
          ) : (
            // TAMPILAN HASIL
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-square md:aspect-auto group border border-slate-700">
                <img 
                  ref={imageRef}
                  src={previewUrl} 
                  alt="Preview" 
                  className="w-full h-full object-cover" 
                />
                
                {analyzing && (
                  <div className="absolute inset-0 bg-teal-900/60 flex flex-col items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="font-mono text-teal-300 animate-pulse tracking-widest">PROCESSING...</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center">
                {!result && !analyzing && (
                  <div className="space-y-6">
                     <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                        <h4 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-teal-400"/> Gambar Siap</h4>
                        <p className="text-sm text-slate-400">Klik tombol di bawah untuk menjalankan model prediksi.</p>
                     </div>
                     <button 
                        onClick={startAnalysis}
                        disabled={!model}
                        className="w-full bg-teal-600 hover:bg-teal-500 disabled:bg-slate-600 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Scan size={20} />
                        {model ? "Prediksi Sekarang" : "Tunggu Model..."}
                      </button>
                      <button onClick={resetScan} className="w-full text-slate-400 hover:text-white text-sm py-2">Ganti Foto</button>
                  </div>
                )}

                {result && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mb-6 text-center md:text-left">
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Hasil Model AI</p>
                      
                      {/* Nama Penyakit (Besar) */}
                      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white mb-2">
                        {result.condition}
                      </h3>
                      
                      {/* Persentase Confidence */}
                      <div className="flex items-center gap-3 justify-center md:justify-start mt-4">
                        <span className="text-3xl font-mono text-teal-400 font-bold">{result.confidence}%</span>
                        <span className="text-sm text-slate-400">Confidence Score</span>
                      </div>

                      {/* Progress Bar Visual */}
                      <div className="w-full bg-slate-700 h-4 rounded-full mt-2 overflow-hidden border border-slate-600">
                        <div 
                            className="bg-teal-500 h-full rounded-full transition-all duration-1000" 
                            style={{width: `${result.confidence}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-8">
                      <button onClick={resetScan} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl transition text-sm font-semibold">
                        Coba Gambar Lain
                      </button>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 justify-center">
                        <AlertTriangle size={12} />
                        <p>Raw output from TensorFlow.js model</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIScanner;