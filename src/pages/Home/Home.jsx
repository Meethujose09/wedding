import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import mainImage from "../../assets/couple.jpeg";

export default function LandingSlider() {
  const audioRef = useRef(null);
  const [showSlider, setShowSlider] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSlider(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          // Animate modal close
          setAnimationPlayed(true);
          setTimeout(() => setShowPopup(false), 500);
        })
        .catch((e) => console.error("Audio play prevented:", e));
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background content blurred & dimmed while popup visible */}
      <div
        className={`h-full w-full transition-all duration-300 ${
          showPopup ? "blur-sm brightness-75 pointer-events-none select-none" : ""
        }`}
      >
        {showSlider && (
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 7000 }}
            loop={true}
            className="h-full w-full"
          >
            <SwiperSlide>
              <div className="relative h-full w-full">
                <img
                  src={mainImage}
                  alt="Couple"
                  className="h-full w-full object-cover scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1
                    className="text-[52px] md:text-[80px] lg:text-[100px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] leading-tight tracking-tight antialiased"
                    style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
                  >
                    Akhil{" "}
                    <span className="font-elegist text-[48px] md:text-[64px] align-middle mx-3">
                      &
                    </span>{" "}
                    Meethu
                  </h1>
                  <p className="mt-2 text-lg md:text-xl italic font-elegist tracking-wide">
                    September 13, 2025 – Kochi, Kerala
                  </p>

                  <div className="mt-6 flex flex-col items-center justify-center text-center">
                    <p className="text-base md:text-xl italic font-elegist text-[#f2c49b] mb-4 px-4 max-w-md md:max-w-xl">
                      With every sunrise, closer to forever — counting down to us.
                    </p>
                    <Countdown targetDate="2025-09-13T00:00:00" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {/* Invitation letter style popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6 text-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="welcome-heading"
        >
          <div
            className={`bg-black/85 rounded-3xl shadow-2xl max-w-md w-full p-10 select-none
              transform origin-top transition-transform duration-500 ease-in-out
              ${
                animationPlayed
                  ? "scale-90 -rotate-x-30 opacity-0"
                  : "scale-100 rotate-x-0 opacity-100"
              }`}
            style={{ fontFamily: "'Rallocate Personal Use', cursive, serif" }}
          >
            <h2
              id="welcome-heading"
              className="text-[36px] md:text-[48px] lg:text-[56px] text-[#f2c49b] leading-snug mb-6 drop-shadow-lg tracking-wide"
            >
              Welcome to <br />
              Our beautiful story
            </h2>
            <button
              onClick={handlePlayAudio}
              className="mt-6 text-[#f2c49b] text-xl md:text-2xl underline underline-offset-4 cursor-pointer font-elegist
              transition-colors duration-300 hover:text-yellow-300"
              aria-label="Click here to start"
            >
              Click here
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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
    "flex flex-col items-center px-4 py-2 bg-white/10 rounded-lg shadow-md backdrop-blur-sm";
  const labelStyle =
    "text-xs uppercase tracking-widest mt-1 text-white font-elegist";

  return (
    <div className="flex space-x-4 mt-4 text-white">
      {[
        { label: "Days", value: time.d },
        { label: "Hours", value: time.h },
        { label: "Minutes", value: time.m },
        { label: "Seconds", value: time.s },
      ].map((t, i) => (
        <div key={i} className={boxStyle}>
          <div className="text-3xl md:text-5xl font-bold">
            {String(t.value).padStart(2, "0")}
          </div>
          <div className={labelStyle}>{t.label}</div>
        </div>
      ))}
    </div>
  );
}
