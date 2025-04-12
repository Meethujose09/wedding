import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#003366] font-sans">
      {/* Hero Section */}
      <section className="bg-[#081944] text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          We’re dedicated to delivering high-quality, accessible education through expert-led instruction and personalized learning experiences.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-[#f9fbfd] text-center">
        <div className="shadow-lg rounded-2xl p-8 bg-white">
          <h2 className="text-3xl font-extrabold mb-4">Our Mission</h2>
          <p>
            To empower students with the knowledge and skills required to succeed academically and professionally while nurturing a world-class community of educators.
          </p>
        </div>
        <div className="shadow-lg rounded-2xl p-8 bg-white">
          <h2 className="text-3xl font-extrabold mb-4">Our Values</h2>
          <p>
            Excellence, inclusivity, personalization, innovation, and a commitment to lifelong learning.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="flex flex-col md:flex-row items-center py-20 px-6 md:px-20 bg-white">
        <div className="md:w-1/2 order-2 md:order-1 text-left">
          <h2 className="text-4xl font-bold mb-6">A Wide Range of Courses</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Science, Mathematics, and Accounting</li>
            <li>Coding, Programming, AI & Machine Learning</li>
            <li>Languages and Arts (Piano, Drawing, Dance, etc.)</li>
            <li>Public Speaking, Pageantry, and Modelling</li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center mb-10 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/online-education-concept_23-2148572934.jpg?w=826"
            alt="Course variety"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

     {/* Personalized Learning & Expert Tutors */}
<section className="bg-[#f9fbfd] py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    {/* Text Content */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-4xl font-bold mb-6">Expert Tutors & Personalized Learning</h2>
      <p className="text-lg mb-4">
        Learn from tutors who are alumni of top institutions across India and Ireland. We offer:
      </p>
      <ul className="list-disc pl-5 text-lg space-y-2">
        <li>Flexible class schedules</li>
        <li>One-on-one private sessions</li>
        <li>Custom learning plans tailored to each student’s goals</li>
      </ul>
    </div>

    {/* Updated Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.JkkZZCWsTUNBj6fsdp0wmQHaEO&pid=Api"
        alt="Tuition Impact on Learning"
        className="rounded-xl shadow-lg w-full max-w-md object-cover"
      />
    </div>
  </div>
</section>


      {/* Specialized Programs */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Specialized Training Programs</h2>
          <p className="text-lg mb-4">
            We go beyond standard education with advanced offerings:
          </p>
          <ul className="list-disc pl-5 text-left max-w-2xl mx-auto text-lg space-y-2">
            <li>Interview Preparation</li>
            <li>Competitive Exam Coaching</li>
            <li>Celebrity-led Sessions with Industry Insights</li>
          </ul>
        </div>
      </section>

      {/* Inclusive Education */}
      <section className=" py-20 px-4 text-white text-blue-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Affordable and Inclusive Learning</h2>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is rooted in inclusivity. We offer top-tier education at affordable rates to ensure access for students of all backgrounds.
          </p>
          <p className="text-lg">
            We also train and support our tutors to deliver high-impact instruction using best teaching practices.
          </p>
        </div>
      </section>
    </div>
  );
}
