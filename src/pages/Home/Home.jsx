import { useEffect, useState } from "react";
import mainImage from "../../assets/couple.jpeg"; // or .webp for better perf

export default function LandingSlider() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the image to avoid white flash
  useEffect(() => {
    const img = new Image();
    img.src = mainImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Fade In */}
      <img
        src={mainImage}
        alt="Couple"
        className={`h-full w-full object-cover transition-opacity duration-700 ease-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1
          className="text-[52px] md:text-[80px] lg:text-[100px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] leading-tight tracking-tight antialiased"
          style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
        >
          Akhil{" "}
          <span className="font-elegist text-[48px] md:text-[64px] align-middle mx-3">
            &amp;
          </span>{" "}
          Meethu
        </h1>
        <p className="mt-2 text-lg md:text-xl italic font-elegist tracking-wide">
          September 13, 2025 – Kochi, Kerala
        </p>

        {/* Quote + Countdown */}
        <div className="mt-6 flex flex-col items-center justify-center text-center">
          <p className="text-base md:text-xl italic font-elegist text-[#f2c49b] mb-4 px-4 max-w-md md:max-w-xl">
            With every sunrise, closer to forever <Heart /> counting down to us.
          </p>
          <Countdown targetDate="2025-09-13T00:00:00" />
        </div>
      </div>
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
        setIsFinished(true);
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

// Flower Confetti
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

// Heart Icon
function Heart() {
  return (
    <span
      className="inline-block text-[#f2c49b] animate-pulse"
      style={{ fontSize: "1.5rem", lineHeight: 1 }}
      aria-hidden="true"
    >
      ♥
    </span>
  );
}
