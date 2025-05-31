// import React from "react";
import { Element } from "react-scroll";
import heroImage from "../assets/hero-img.png"; // Replace with actual image path

export default function HeroSection() {
  return (
    <Element name="hero">
      <section className="pt-32 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-12">
          <div className="max-w-xl mb-10 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extralight ">
              Great <span className="text-[#77BA9F] font-semibold">Product</span> is
              <br />
              <h1 className=" font-extrabold">built by great 
                <span className="text-[#77BA9F] ml-4">teams</span> </h1>
            </h1>
            <p className="text-gray-600 text-base lg:text-lg">
              We help build and manage a team of world-class developers
              <br /> to bring your vision to life
            </p>
            <button className="bg-gradient-to-tr from-[#2F4A88] to-[#77BA9F] text-white px-6 py-3 rounded-md  shadow hover:opacity-90">
              Let’s get started!
            </button>
          </div>
          <div className="max-w-lg mb-10 lg:mb-0">
            <img src={heroImage} alt="Team working" className="w-full" />
          </div>
        </div>
        <div className="hidden md:block  h-16 w-16 bg-gradient-to-t relative top-10  left-[25rem] from-[#45BCA0] to-[#346197] rounded-full"></div>
      </section>
    </Element>
  );
}