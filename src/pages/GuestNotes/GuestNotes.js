import React, { useState } from "react";
import couple2 from '../../assets/couple 2.jpeg'
const GuestNotes = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${couple2}')`, // 🔁 Replace with your actual image path (e.g., from public folder)
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with backdrop and centered content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-2xl bg-black/30 backdrop-blur-md p-8 sm:p-12 rounded-xl text-center shadow-lg">
          <h1
            className="text-[36px] sm:text-[48px] md:text-[60px] text-[#f2c49b] font-[Rallocate] drop-shadow-lg mb-4"
            style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
          >
            Share Your Wishes
          </h1>

          <p className="text-[#e6d7ca] font-elegist italic mb-4 text-base sm:text-lg">
            This is your page in our story. Share a thought, a blessing, or a favorite memory with us.
          </p>

          <p className="text-[#e6d7ca] font-elegist italic mb-8 text-base sm:text-lg">
            Your words will become part of our forever.
          </p>

          {!submitted ? (
            <form
              action="https://formspree.io/f/mldllqdq"
              method="POST"
              className="space-y-6 text-left"
              onSubmit={() => {
                setTimeout(() => setSubmitted(true), 1000);
              }}
            >
              <div>
                <label className="text-[#e6d7ca] font-elegist mb-1 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-[#e6d7ca] bg-transparent text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#e6d7ca] font-elegist mb-1 block">Your Wishes</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg border border-[#e6d7ca] bg-transparent text-white focus:outline-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#f2c49b] text-[#3a2c27] font-bold py-2 px-6 rounded-xl hover:bg-[#ddb88c] transition"
                >
                  Send Wish
                </button>
              </div>
            </form>
          ) : (
            <div className="text-[#e6d7ca] font-elegist mt-10 text-lg">
              Thank you for your warm wishes! 💌
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestNotes;
