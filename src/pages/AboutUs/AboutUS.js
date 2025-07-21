import React from "react";
import "./AboutUs.css";
import Akhil from '../../assets/akhil.jpeg';
import Meethu from '../../assets/meethu1.jpeg';

const AboutUs = () => {
  return (
    <div className="aboutUsSection" id="aboutUs">
      <div className="overlay backdrop-blur-sm">
        <h1
          className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] tracking-wide leading-tight text-center"
          style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
        >
          Meet the Couple
        </h1>

        <p className="intro font-elegist italic text-[#e6d7ca] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 mb-8 px-4 text-center">
          From a simple conversation, our story blossomed into a lifelong bond.
          <br />
          Hand in hand, with shared dreams, we now begin this beautiful journey together.
        </p>

      

        <div id="brideandgroom" className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 mt-6">
          <div className="fadeCard text-center space-y-4">
            <img
              alt="Meethu"
              title="Meethu"
              className="profilePicture mx-auto"
              src={Meethu}
            />

            <h3 className="text-2xl font-semibold tracking-wide text-[#f2c49b] font-[Highpath]">
              Meethu
            </h3>

            <p className="text-sm italic text-[#e6d7ca] font-elegist leading-relaxed">
              Born and raised in the lush hills of Idukki, Kerala, Meethu grew up in a warm, loving home.
              With two sisters who are devoted nuns and a youngest sister working as a nurse in the UK,
              she carries a legacy of compassion, strength, and grace.
            </p>
          </div>


          <div className="fadeCard text-center space-y-4">
            <img
              alt="Akhil"
              title="Akhil"
              className="profilePicture mx-auto"
              src={Akhil}
            />

            <h3 className="text-2xl font-semibold tracking-wide text-[#f2c49b] font-[Highpath]">
              Akhil
            </h3>

            <p className="text-sm italic text-[#e6d7ca] font-elegist leading-relaxed">
              Raised in Angamaly, Kerala, and later pursuing his dreams in Ireland,
              Akhil blends tradition with ambition. Surrounded by his loving parents and sister,
              he steps into this new journey with strength and heart.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
