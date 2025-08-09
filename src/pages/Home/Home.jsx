import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { useEffect, useRef, useState } from 'react';
import mainImage from '../../assets/couple.jpeg'; // or .webp if optimized
import { Menu, X } from 'lucide-react';

export default function LandingSlider() {
  const slides = [mainImage];
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Delay slider mount slightly to avoid visual jank
    const timer = setTimeout(() => setShowSlider(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <WelcomeModalWithAudio />
      {showSlider && (
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 7000 }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt={`Slide ${idx}`}
                  className="h-full w-full object-cover scale-105"
                  loading="eager" // force immediate load
                />
                {/* Overlay with reduced darkness */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1
                    className="text-[52px] md:text-[80px] lg:text-[100px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] leading-tight tracking-tight antialiased"
                    style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
                  >
                    Akhil{' '}
                    <span className="font-elegist text-[48px] md:text-[64px] align-middle mx-3">
                      &amp;
                    </span>{''}
                    Meethu
                  </h1>
                  <p className="mt-2 text-lg md:text-xl italic font-elegist tracking-wide">
                    September 13, 2025 – Kochi, Kerala
                  </p>

                  {/* Quote and Countdown */}
                  <div className="mt-6 flex flex-col items-center justify-center text-center">
                    <p className="text-base md:text-xl italic font-elegist text-[#f2c49b] mb-4 px-4 max-w-md md:max-w-xl">
                      With every sunrise, closer to forever — counting down to us.
                    </p>
                    <Countdown targetDate="2025-09-13T00:00:00" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

// Countdown Component
function Countdown({ targetDate }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = new Date(targetDate) - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        setIsFinished(true); // Mark countdown finished
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isFinished) {
    return (
      <>
        <h2 className="text-4xl font-bold text-[#f2c49b] drop-shadow-lg mb-4">
          The Day is Here! 💐
        </h2>
        <FlowerConfetti />
      </>
    );
  }

  const boxStyle =
    'flex flex-col items-center px-4 py-2 bg-white/10 rounded-lg shadow-md backdrop-blur-sm';
  const labelStyle =
    'text-xs uppercase tracking-widest mt-1 text-white font-elegist';

  return (
    <div className="flex space-x-4 mt-4 text-white">
      {[
        { label: 'Days', value: time.d },
        { label: 'Hours', value: time.h },
        { label: 'Minutes', value: time.m },
        { label: 'Seconds', value: time.s },
      ].map((t, i) => (
        <div key={i} className={boxStyle}>
          <div className="text-3xl md:text-5xl font-bold">
            {String(t.value).padStart(2, '0')}
          </div>
          <div className={labelStyle}>{t.label}</div>
        </div>
      ))}
    </div>
  );
}

// Flower Confetti Animation Component
function FlowerConfetti() {
  return (
    <div className="confetti-container fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="flower"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            fontSize: `${12 + Math.random() * 18}px`,
          }}
        >
          🌸
        </div>
      ))}
      <style jsx>{`
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        .flower {
          position: absolute;
          top: -2rem;
          opacity: 0.9;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          user-select: none;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Welcome Modal with Audio (NEW)
function WelcomeModalWithAudio() {
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const audioEl = audioRef.current;

    // Try autoplay on mount
    audioEl.play().then(() => {
      setPlayed(true);
    }).catch(() => {
      // Autoplay blocked - wait for user interaction
    });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioEl.pause();
      } else if (played) {
        audioEl.play().catch(() => { });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [played]);

  // Play audio and close modal on any user interaction while modal is shown
  const handleUserInteraction = () => {
    if (showModal) {
      audioRef.current.play().catch(() => { });
      setPlayed(true);
      setShowModal(false);
    }
  };

  return (
   <>
  {showModal && (
    <div
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md p-6"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div
        className="bg-transparent rounded-2xl max-w-md w-full p-10 text-center font-[Rallocate] select-none border border-[#f2c49b] shadow-lg"
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <h1
          className="text-[32px] sm:text-[40px] md:text-[48px] text-[#f2c49b] font-[Rallocate] drop-shadow-lg mb-4 leading-tight"
          style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
        >
          Welcome To Our Story
        </h1>

        {/* Centered animated heart */}
        <div className="flex justify-center mb-6">
          <Heart />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleUserInteraction();
          }}
          className="mt-2 px-10 py-3 uppercase font-elegist tracking-widest text-[#f2c49b] text-xl rounded-xl border border-[#f2c49b] hover:bg-[#f2c49b] hover:text-[#3a2c27] transition-colors duration-300 select-none"
          style={{ fontFamily: "'Elegist', cursive", fontStyle: 'italic' }}
        >
          Click Here
        </button>
      </div>
    </div>
  )}

  {/* Hidden audio element */}
  <audio ref={audioRef} src="/music.mp3" preload="auto" />
</>

  );
}

function Heart() {
  return (
    <span
      className="inline-block text-[#f2c49b] animate-pulse"
      style={{ fontSize: '1.5rem', lineHeight: 1 }}
      aria-hidden="true"
    >
      ♥
    </span>
  );
}
