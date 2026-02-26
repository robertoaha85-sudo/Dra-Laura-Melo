import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Heart, 
  Star, 
  Calendar, 
  MapPin, 
  Instagram, 
  X,
  Baby,
  Smile,
  Sparkles,
  Clock
} from 'lucide-react';

// Data
const EXPERT = {
  name: "Dra. Laura Melo",
  profession: "Dentista, Odontopediatra",
  city: "Pouso Alegre, MG",
  whatsappLink: "https://api.whatsapp.com/message/5YS4STEK5AUPK1?autoload=1&app_absent=0&utm_source=ig",
  instagramLink: "https://www.instagram.com/dra.lauramelo/",
  specialties: [
    { icon: <Smile className="w-5 h-5 text-green-500" />, text: "Aparelho infantil e fixo" },
    { icon: <Heart className="w-5 h-5 text-blue-500" />, text: "Pacientes especiais" },
    { icon: <Sparkles className="w-5 h-5 text-purple-500" />, text: "Sedação consciente" },
  ]
};

const IMAGES = {
  hero: "https://i.imgur.com/sgWDuh7.png",
  beforeAfter: [
    "https://i.imgur.com/cSumTKc.png",
    "https://i.imgur.com/Ge0iYpm.png",
    "https://i.imgur.com/FtHpIa9.png",
    "https://i.imgur.com/y0IX1bc.png"
  ],
  kids: [
    "https://i.imgur.com/eKGZXGJ.png",
    "https://i.imgur.com/7GFCPEq.png",
    "https://i.imgur.com/yh6Rh7o.png"
  ]
};

// Components

const WhatsAppButton = ({ text = "Agendar consulta gratuita", className = "", subtext = "" }) => (
  <div className="flex flex-col items-center w-full">
    <motion.a
      href={EXPERT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-3 w-full max-w-md transition-all ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-lg">{text}</span>
    </motion.a>
    {subtext && (
      <span className="text-xs text-gray-500 mt-2 font-medium flex items-center gap-1">
        <Clock className="w-3 h-3" /> {subtext}
      </span>
    )}
  </div>
);

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-12 px-4 md:px-8 max-w-4xl mx-auto ${className}`}>
    {children}
  </section>
);

const Lightbox = ({ src, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button onClick={onClose} className="absolute top-4 right-4 text-white p-2">
      <X className="w-8 h-8" />
    </button>
    <img src={src} alt="Full screen" className="max-w-full max-h-[90vh] rounded-lg object-contain" />
  </motion.div>
);

export default function App() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-20">
      {/* 1. HERO */}
      <div className="relative bg-gradient-to-b from-purple-50 to-white pt-8 pb-12 px-4 overflow-hidden rounded-b-[3rem]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-md mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50 transform translate-y-2"></div>
            <img 
              src={IMAGES.hero} 
              alt={EXPERT.name} 
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
            />
            <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-dark mb-3 leading-tight"
          >
            Olá! Eu sou a <span className="text-primary">{EXPERT.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 mb-8 font-medium"
          >
            Cuidando do sorriso do seu filho com carinho, diversão e sem traumas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <WhatsAppButton subtext="Resposta rápida • Sem compromisso" />
          </motion.div>
        </div>
      </div>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-purple-100 rounded-2xl p-6 relative">
               <h2 className="text-2xl font-bold text-purple-800 mb-4">Muito prazer! 💜</h2>
               <p className="text-gray-700 mb-4 leading-relaxed">
                 Sou apaixonada por transformar a ida ao dentista em uma experiência mágica e positiva. 
                 Como Odontopediatra em {EXPERT.city}, meu objetivo é garantir que seu filho cresça com um sorriso saudável e feliz.
               </p>
               <div className="space-y-3">
                 {EXPERT.specialties.map((spec, index) => (
                   <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                     {spec.icon}
                     <span className="font-medium text-gray-700">{spec.text}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-blue-50 rounded-3xl my-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Resultados Reais ✨</h2>
          <p className="text-blue-700/80">Transformações que devolvem a confiança</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {IMAGES.beforeAfter.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer bg-white"
              onClick={() => setLightboxImg(img)}
            >
              <img src={img} alt={`Resultado ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 text-center backdrop-blur-sm">
                Toque para ampliar
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-center text-gray-400 mt-4 italic">
          * Resultados podem variar de pessoa para pessoa. Imagens autorizadas.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section>
        <h2 className="text-2xl font-bold text-center mb-8 text-dark">Por que as mães confiam?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Avaliação Honesta", desc: "Sem tratamentos desnecessários. Transparência total com você.", icon: <CheckCircle2 className="text-green-500" /> },
            { title: "Linguagem Lúdica", desc: "Explico tudo de forma que a criança entenda e não tenha medo.", icon: <Baby className="text-primary" /> },
            { title: "Ambiente Acolhedor", desc: "Seu filho vai se sentir em casa, não em uma clínica fria.", icon: <Heart className="text-red-500" /> },
            { title: "Foco no Resultado", desc: "Técnicas modernas para o melhor desenvolvimento do sorriso.", icon: <Star className="text-yellow-500" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-gray-50 p-3 rounded-full shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. SORRISOS FELIZES (Moved here) */}
      <Section className="bg-yellow-50 rounded-3xl my-8">
        <h2 className="text-2xl font-bold text-center mb-2 text-yellow-800">Sorrisos Felizes 😄</h2>
        <p className="text-center text-yellow-700/80 mb-8 text-sm">Aqui o medo passa longe!</p>
        
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
          {IMAGES.kids.map((img, idx) => (
            <div key={idx} className="snap-center shrink-0 w-64 md:w-72 rounded-2xl overflow-hidden shadow-md">
              <img src={img} alt="Paciente feliz" className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </Section>

      {/* 6. PRIMEIRA CONSULTA SIMPLES */}
      <Section>
        <h2 className="text-2xl font-bold text-center mb-10 text-dark">Primeira consulta simples</h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden"></div>
          
          <div className="space-y-8">
            {/* Step 1: Google Maps */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 z-10 shadow-lg ring-4 ring-white">
                1
              </div>
              <div className="pt-1 w-full">
                <h3 className="font-bold text-lg text-gray-800 mb-1">Endereço</h3>
                <p className="text-gray-600 mb-3 text-sm">Veja como é fácil chegar ao consultório.</p>
                <a 
                  href="https://maps.app.goo.gl/5hAHXdnQysv7Nhnd6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-200 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Step 2: Agendamento */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 z-10 shadow-lg ring-4 ring-white">
                2
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg text-gray-800">Agendamento</h3>
                <p className="text-gray-600">Vamos encontrar o melhor horário para vocês.</p>
              </div>
            </div>

            {/* Step 3: Avaliação */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 z-10 shadow-lg ring-4 ring-white">
                3
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg text-gray-800">Avaliação Gratuita</h3>
                <p className="text-gray-600">Conheço seu filho e avalio o sorriso com carinho.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. CTA INTERMEDIÁRIO (Moved down) */}
      <div className="bg-secondary/10 py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold text-teal-800 mb-4">
            Ainda com dúvidas sobre o tratamento?
          </h3>
          <p className="text-teal-700 mb-6 text-sm">
            Converse diretamente comigo no WhatsApp. É gratuito e sem compromisso.
          </p>
          <WhatsAppButton text="Tirar dúvidas no WhatsApp" className="bg-teal-500 hover:bg-teal-600" />
        </div>
      </div>

      {/* 8. CTA FINAL */}
      <div className="bg-gradient-to-br from-primary to-pink-600 py-16 px-4 text-center text-white rounded-t-[3rem] mt-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-display">Vamos cuidar desse sorriso?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Garanta o futuro saudável do seu filho hoje mesmo.
          </p>
          <motion.a
            href={EXPERT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-bold py-4 px-8 rounded-full shadow-xl inline-flex items-center gap-2 text-lg w-full justify-center max-w-sm"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar Consulta Gratuita
          </motion.a>
          <p className="mt-4 text-sm text-white/80 opacity-80">
            Vagas limitadas para este mês.
          </p>
        </div>
      </div>

      {/* 9. FOOTER */}
      <footer className="bg-dark text-gray-400 py-8 px-4 text-center text-sm">
        <div className="flex justify-center gap-6 mb-6">
          <a href={EXPERT.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="font-bold text-white text-lg mb-1">{EXPERT.name}</p>
        <p className="mb-1">{EXPERT.profession}</p>
        <div className="flex items-center justify-center gap-1 mb-4">
          <MapPin className="w-3 h-3" />
          {EXPERT.city}
        </div>
        <div className="border-t border-gray-700 pt-4 mt-4 text-xs">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && <Lightbox src={lightboxImg} onClose={() => setLightboxImg(null)} />}
      </AnimatePresence>
    </div>
  );
}
