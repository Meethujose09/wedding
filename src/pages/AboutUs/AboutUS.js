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

        <div
          id="brideandgroom"
          className="flex flex-col sm:flex-row flex-wrap justify-center items-start gap-8 mt-6"
        >
          {/* Akhil Card */}
          <div className="fadeCard text-center space-y-4 max-w-[500px] w-full px-4">
            <img
              alt="Akhil"
              title="Akhil"
              className="profilePicture mx-auto"
              src={Akhil}
            />
            <h3 className="text-2xl font-semibold tracking-wide text-[#f2c49b] font-[Highpath]">
              Akhil
            </h3>
            <p className="text-sm italic text-[#e6d7ca] font-elegist leading-relaxed text-justify">
              My name is Akhil, and I was born and raised in Angamaly, Kerala. I come from a loving family. My father, Varghese, and my mother, Molly, have always supported me in everything I do. I have one sister, Anns Thettayil, who works as a nurse in the UK. She is very caring and has always been there for me.
              <br /><br />
              I studied BTech in India. After that, I moved to Ireland to continue my studies. I completed my Master’s degree in Cloud Computing. Now, I am working and building my career here in Ireland. Life here has taught me a lot, and I am thankful for the journey so far.
            </p>
          </div>

          {/* Meethu Card */}
          <div className="fadeCard text-center space-y-4 max-w-[500px] w-full px-4">
            <img
              alt="Meethu"
              title="Meethu"
              className="profilePicture mx-auto"
              src={Meethu}
            />
            <h3 className="text-2xl font-semibold tracking-wide text-[#f2c49b] font-[Highpath]">
              Meethu
            </h3>
            <p className="text-sm italic text-[#e6d7ca] font-elegist leading-relaxed text-justify">
              In a home filled with warmth and love, I am the youngest of four daughters born to my dear parents, Jose and Gracy, in Idukki, Kerala. Two of my elder sisters, Sr. Gladis Maria CMC and Sr. Elizabeth Ritty CMC, have devoted their lives as nuns and educators — Sr. Gladis teaches at Assumption High School, Palampra, while Sr. Elizabeth teaches at Mount Carmel School, Jaipur. My other sister is a dedicated nurse working in the UK, and her husband, Jobin, has always been a loving and supportive part of our family.
              <br /><br />
              I completed my studies in computer applications in India, and later moved to Ireland for higher studies. There, I earned a Master’s degree in Data Analytics and am now building a meaningful career, holding close the love and values I was raised with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
