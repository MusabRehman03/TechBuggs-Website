import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import testimonialPic5 from "../assets/testimonialPic5.png";
import testimonialPic3 from "../assets/testimonialPic3.png";
import workingWithUsPic1 from "../assets/workingWithUsPic1.jpg";
import testimonialPic4 from "../assets/testimonialPic4.png";
import testimonialPic2 from "../assets/testimonialPic2.png";

const testimonialsData = [
    {
      id: 0,
      text: "Alcaline Solutions has been a game-changer for our business. Their web design and digital marketing expertise have significantly boosted our online presence and sales.",
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      img: testimonialPic5
    },
  
    {
      id: 1,
      text: "Working with Alcaline Solutions has been a pleasure. Their team is professional, responsive, and delivers high-quality work on time.",
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      img: testimonialPic3,
    },
    {
      id: 2,
      text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.",
      name: "Imran Khan",
      company: "Software Engineer",
      img: workingWithUsPic1
    },
    {
      id: 3,
      text: "I can't recommend Alcaline Solutions enough. Their attention to detail and commitment to excellence is unmatched in the industry.",
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      img: testimonialPic4,
    },
    {
      id: 4,
      text: "Alcaline Solutions transformed our website and helped us reach a wider audience. Their digital marketing strategies are top-notch.",
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      img: testimonialPic2
    },
  ];

export default function CustomerTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };


  const StarRating = () => (
    <div className="flex justify-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const currentTestimonial = testimonialsData[currentSlide];

  return (
    <div className="bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <div className="w-12 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197] mx-auto mb-4"></div>
          <h1 className="text-4xl text-gray-800 mb-2">
            Why customers love
          </h1>
          <h1 className="text-4xl font-semibold text-gray-800">
            working with us
          </h1>
        </div>

        {/* Content Area */}
        <div className="relative flex flex-col items-center">
          {/* Main Content */}
          <div className="mx-4 w-full">
            {/* Dynamic Testimonial Text */}
            <div className="text-base text-gray-600 leading-relaxed max-w-3xl text-center mx-auto">
              <div className="text-4xl text-[#45BCA0] font-serif leading-none">
                <RiSingleQuotesL />
              </div>
              <p className="px-4">{currentTestimonial.text}</p>
              <div className="text-4xl flex justify-end text-[#45BCA0] mb-8 font-serif">
                <RiSingleQuotesR />
              </div>
            </div>
          </div>

          {/* Single Customer Layout for All Screens */}
          <div className="w-full">
            <div className="flex items-center justify-between px-8">
              {/* Left Navigation Button */}
              <button
                onClick={prevSlide}
                className="group w-10 h-10 border-2 border-[#45BCA0] rounded-full flex items-center justify-center bg-white hover:bg-gradient-to-tr from-[#45BCA0] to-[#346197]"
              >
                <ChevronLeft className="w-4 h-4 text-[#346197] group-hover:text-white" />
              </button>

              {/* Current Customer */}
              <div className="text-center flex-1 mx-4">
                <img
                  src={currentTestimonial.img}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full mb-3 mx-auto opacity-100"
                />
                <StarRating />
                <p className="font-medium text-gray-700 text-sm mb-1">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-500 text-xs">
                  {currentTestimonial.company}
                </p>
              </div>

              {/* Right Navigation Button */}
              <button
                onClick={nextSlide}
                className="group w-10 h-10 border-2 border-[#45BCA0] rounded-full flex items-center justify-center bg-white hover:bg-gradient-to-tr from-[#45BCA0] to-[#346197]"
              >
                <ChevronRight className="w-4 h-4 text-[#346197] group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}