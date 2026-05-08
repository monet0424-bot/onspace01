import { motion, AnimatePresence } from "motion/react";
import { Search, Menu, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Allow scrolling to trigger entrance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && showIntro) {
        setShowIntro(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showIntro]);

  return (
    <div className={`selection:bg-black selection:text-white ${showIntro ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="https://pikaso.cdnpk.net/private/production/4232244952/1e752071-b9f0-476e-85ab-3beaad649031-0.mp4?token=exp=1778630400~hmac=fca389808c7710cb6499770b58ddc7cb0c5f389dfbca2fd6f9e6f3c5f9877463" type="video/mp4" />
            </video>

            {/* Content Over Video */}
            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="w-16 h-16 mb-4 filter invert brightness-0">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="white" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h1 className="text-white text-2xl font-sans font-medium uppercase tracking-[0.5em] mb-12">ONSPACE</h1>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowIntro(false)}
                  className="bg-white text-black px-12 py-5 font-sans uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-neutral-200 transition-colors"
                >
                  스튜디오 입장
                </motion.button>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="mt-8 text-white/50 text-[10px] uppercase tracking-widest flex flex-col items-center gap-4"
                >
                  <span className="w-px h-12 bg-white/20 animate-bounce" />
                  스크롤하여 탐색
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="font-sans">
        {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#f9f9f9]/80 backdrop-blur-xl px-6 md:px-margin-edge border-b fine-border">
        <div className="flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-4 md:gap-6 hover:opacity-70 transition-opacity">
            <div className="w-5 h-5 md:w-6 md:h-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="black" fill-rule="evenodd"></path>
              </svg>
            </div>
            <h1 className="text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] h-[25px] w-[93.7031px] flex items-center">ONSPACE</h1>
          </a>
          <nav className="hidden md:flex items-center gap-12">
            <a href="#philosophy" className="font-sans font-medium uppercase text-[13px] tracking-widest hover:opacity-50 transition-opacity">철학 (Philosophy)</a>
            <a href="#archive" className="font-sans font-medium uppercase text-[13px] tracking-widest hover:opacity-50 transition-opacity">아카이브</a>
            <a href="#bespoke" className="font-sans font-medium uppercase text-[13px] tracking-widest hover:opacity-50 transition-opacity">비스포크</a>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 md:p-2 hover:bg-neutral-100 rounded-full transition-colors"><Search size={18} className="md:w-5 md:h-5" strokeWidth={1.5} /></button>
            <button className="p-2 md:p-2 hover:bg-neutral-100 rounded-full transition-colors"><Menu size={18} className="md:w-5 md:h-5" strokeWidth={1.5} /></button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-12 md:pt-24 pb-16 md:pb-section-gap px-6 md:px-margin-edge">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-8 mb-12 md:mb-20"
            >
              <div className="lg:w-7/12">
                <motion.span variants={fadeIn} className="font-sans uppercase text-neutral-500 mb-6 md:mb-8 block tracking-[0.3em] text-[10px] md:text-xs">제 4 호 — 에센셜리즘 (본질주의)</motion.span>
                <motion.h2 variants={fadeIn} className="font-sans text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] font-bold">침묵,</motion.h2>
                <motion.h2 variants={fadeIn} className="font-sans text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] -mt-1 md:-mt-2 pl-[0.5em] font-light">형상이 되다.</motion.h2>
              </div>
              <motion.div variants={fadeIn} className="lg:w-4/12 pb-2 md:pb-4">
                <p className="text-neutral-600 leading-relaxed max-w-sm font-sans text-sm md:text-base">
                  건축적 정밀함과 여백의 미가 만나는 접점을 탐구합니다.<br className="hidden md:block" />
                  우리의 최신 컬렉션은 모더니즘 유산의 절제미를<br className="md:hidden" /> 기념합니다.
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 relative overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                alt="Architectural space"
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>
          </div>
        </section>

        {/* Editorial Grid */}
        <section id="philosophy" className="py-16 md:py-section-gap px-6 md:px-margin-edge bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
              {/* Left Column */}
              <div className="md:col-span-5 flex flex-col gap-12">
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                  className="fine-border p-8 md:p-12 editorial-shadow bg-[#f9f9f9]"
                >
                  <span className="font-sans uppercase text-neutral-400 block mb-4 md:mb-6 text-[10px] tracking-widest">텍스타일 & 어스 (Textiles & Earth)</span>
                  <h3 className="font-sans text-2xl md:text-3xl font-bold mb-4 md:mb-6">촉각적 미니멀리스트</h3>
                  <p className="text-neutral-600 mb-8 md:mb-10 leading-relaxed font-sans text-sm md:text-base">
                    시각적 소음이 줄어들 때 소재의 중요성은 더욱 커집니다.<br className="hidden md:block" />
                    우리의 시그니처 팔레트를 완성하는 소재 선택에 대한 심층적 분석.
                  </p>
                  <a href="#" className="inline-flex items-center gap-4 group">
                    <span className="font-sans uppercase text-[10px] tracking-widest border-b border-black py-1">에디토리얼 보기</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </motion.div>
                <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop" 
                    alt="Minimalist design"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-6 md:col-start-7 flex flex-col gap-16 md:gap-section-gap md:pt-32">
                <div className="aspect-[3/4] bg-neutral-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Architecture detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-10 md:-bottom-12 md:-left-12 bg-white p-6 md:p-8 fine-border max-w-[240px] md:max-w-xs editorial-shadow">
                    <h4 className="font-sans text-lg md:text-xl font-bold mb-1 md:mb-2 leading-tight">오스만 모던 (Haussmann Modern)</h4>
                    <p className="text-neutral-500 font-sans text-xs md:text-sm">파리, 제 8구</p>
                  </div>
                </div>
                <div className="pl-6 md:pl-12 border-l fine-border mt-20 md:mt-0">
                  <p className="font-sans text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 md:mb-8 font-medium">
                    "디자인은 철학을 위해서가 아니라 인생을 위해 존재한다."
                  </p>
                  <span className="font-sans uppercase text-neutral-400 text-[10px] tracking-widest">— 이사무 노구치 (Isamu Noguchi)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section (Dark) */}
        <section id="archive" className="py-16 md:py-section-gap px-6 md:px-margin-edge bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-12 md:mb-20">
              <div className="max-w-2xl">
                <span className="font-sans uppercase text-neutral-500 block mb-4 md:mb-6 tracking-[0.4em] text-[10px]">케이스 스터디: 재생 (The Reclamation)</span>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold">위엄의 부활.</h2>
              </div>
              <div className="flex items-center gap-6 md:gap-8 mt-6 md:mt-0">
                <span className="font-sans text-[10px] opacity-50 tracking-widest">01 / 02</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ArrowLeft size={16} className="md:w-[18px] md:h-[18px]" />
                  </button>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Penthouse renovation"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/60 backdrop-blur-md px-3 py-1 md:px-4 md:py-1 border border-white/10">
                    <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-widest">완공 후 (After / Completed)</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start pt-2 md:pt-4 gap-4">
                  <h4 className="font-sans text-lg md:text-xl font-bold">펜트하우스 B</h4>
                  <p className="text-neutral-400 max-w-xs font-sans text-xs md:text-sm leading-relaxed">
                    90년대의 어수선한 미학에서<br className="hidden md:block" /> 순수한 빛과 소재의 안식처로의 전환.
                  </p>
                </div>
              </div>
              
              <div className="hidden lg:block space-y-6 pt-32">
                <div className="aspect-video relative opacity-40 grayscale group overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
                    alt="Original state"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-1 border border-white/10">
                    <span className="font-sans text-[9px] uppercase tracking-widest">원형 (The Origin)</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 max-w-sm">
                  <span className="h-px w-20 bg-white/20" />
                  <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                    "우리의 과제는 수년 동안 덧칠해진 외적인 요소들 아래에서<br className="hidden md:block" /> 건물의 영혼을 찾는 것이었습니다."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="bespoke" className="py-20 md:py-section-gap px-6 md:px-margin-edge bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.98 }}
              className="max-w-3xl mx-auto space-y-8 md:space-y-12"
            >
              <span className="font-sans uppercase text-neutral-500 tracking-[0.5em] text-[10px]">디자인 레지스트리 (Design Registry)</span>
              <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-tight font-bold">당신만의 서사를<br className="md:hidden" /> 시작하세요.</h2>
              <p className="text-neutral-600 mb-8 md:mb-12 font-sans max-w-xl mx-auto leading-relaxed text-sm md:text-base">
                저희 스튜디오는 매년 한정된 수의 주거 프로젝트만을<br />
                맡아 ONSPACE 경험의 모든 디테일에<br />
                세심한 주의를 기울입니다.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <button className="bg-black text-white px-8 md:px-12 py-4 md:py-5 font-sans uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-neutral-800 transition-colors">
                  문의하기
                </button>
                <button className="bg-transparent border fine-border px-8 md:px-12 py-4 md:py-5 font-sans uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-white transition-colors">
                  포트폴리오 보기
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 md:py-20 px-6 md:px-margin-edge border-t fine-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-5 h-5">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="black" fill-rule="evenodd"></path>
                </svg>
              </div>
              <h2 className="font-sans font-medium uppercase text-base md:text-lg tracking-[0.2em]">ONSPACE</h2>
            </div>
            <p className="text-neutral-500 max-w-xs font-sans text-xs md:text-sm leading-relaxed">
              영속성과 고요한 럭셔리의 관점을 통해 차세대 건축 인테리어를 정의합니다.
            </p>
          </div>
          <div>
            <h5 className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-6 md:mb-8 text-neutral-400">스튜디오</h5>
            <ul className="space-y-3 md:space-y-4 font-sans text-xs md:text-sm text-neutral-600">
              <li>뉴욕</li>
              <li>코펜하겐</li>
              <li>도쿄</li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-6 md:mb-8 text-neutral-400">팔로우</h5>
            <ul className="space-y-3 md:space-y-4 font-sans text-xs md:text-sm text-neutral-600">
              <li>인스타그램</li>
              <li>핀터레스트</li>
              <li>저널</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-8 border-t fine-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[8px] md:text-[9px] text-neutral-400 tracking-[0.2em] uppercase text-center md:text-left">© 2024 ONSPACE DESIGN GROUP. 모든 권리 보유.</span>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="font-sans text-[8px] md:text-[9px] text-neutral-400 hover:text-black transition-colors uppercase tracking-[0.2em]">개인정보 보호정책</a>
            <a href="#" className="font-sans text-[8px] md:text-[9px] text-neutral-400 hover:text-black transition-colors uppercase tracking-[0.2em]">법적 고지</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
);
}
