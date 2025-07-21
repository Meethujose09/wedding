import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';
import mainImage from '../../assets/couple.jpeg';
import { Menu, X } from 'lucide-react';

export default function LandingSlider() {
  const slides = [mainImage];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative h-screen w-full overflow-hidden">
  
      {/* Slider */}
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
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <h1
                  className="text-[52px] md:text-[80px] lg:text-[100px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] leading-tight tracking-tight antialiased"
                  style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
                >
                  Akhil{' '}
                  <span className="font-elegist text-[48px] md:text-[64px] align-middle mx-3">
                    &
                  </span>{' '}
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
    </div>
  );
}

// Countdown Component
function Countdown({ targetDate }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = new Date(targetDate) - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTime({ d: 0, h: 0, m: 0, s: 0 });
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
