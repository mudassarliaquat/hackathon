import Image from 'next/image';
import React from 'react';
import JoinClub from '../public/images/joinClub.jpeg';

const JoinClubSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={JoinClub}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-md md:text-lg mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>

        {/* Features */}
        <div className="flex justify-center items-center gap-4 text-sm md:text-base mb-6">
          <span className="flex items-center gap-1">
            <span>✅</span> Exclusive offers
          </span>
          <span className="flex items-center gap-1">
            <span>✅</span> Free events
          </span>
          <span className="flex items-center gap-1">
            <span>✅</span> Large discounts
          </span>
        </div>

        {/* Signup Form */}
        <form className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-4 py-2 rounded-l-md bg-white text-black w-[300px] md:w-[400px] focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-900 text-white rounded-r-md hover:bg-indigo-700"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinClubSection;