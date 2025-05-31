import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import testimonialPic5 from "src/assets/testimonialPic5.png";
import testimonialPic3 from "src/assets/testimonialPic3.png";
import workingWithUsPic1 from "src/assets/workingWithUsPic1.jpg";
import testimonialPic4 from "src/assets/testimonialPic4.png";
import testimonialPic2 from "src/assets/testimonialPic2.png";
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

  const handleCustomerClick = (index: number) => {
    setCurrentSlide(index);
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
    <div className="bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197] mx-auto mb-8"></div>
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-2">
            Why customers love
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
            working with us
          </h1>
        </div>

        {/* Content Area */}
        <div className="relative flex flex-col items-center">
          {/* Main Content */}
          <div className="mx-16 w-full">
            {/* Dynamic Testimonial Text */}
            <div className="text-lg text-gray-600 leading-relaxed  max-w-3xl text-center mx-auto">
              <div className="text-5xl text-[#45BCA0] font-serif leading-none">
                <RiSingleQuotesL />
              </div>
              <p className="">{currentTestimonial.text}</p>
              <div className="text-5xl flex justify-end text-[#45BCA0] mb-12 font-serif ">
                <RiSingleQuotesR />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="group absolute left-0 z-10 mt-5 w-12 h-12 border-2 border-[#45BCA0] rounded-full flex items-center justify-center bg-white hover:bg-gradient-to-tr from-[#45BCA0] to-[#346197]"
          >
            <ChevronLeft className="w-5 h-5 text-[#346197] group-hover:text-white" />
          </button>

          <div className="flex justify-center gap-8 flex-wrap">
            {testimonialsData.map((customer, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => handleCustomerClick(customer.id)}
              >
                <img
                  src={customer.img}
                  alt={customer.name}
                  className={`w-16 h-16 rounded-full mb-3 mx-auto ${
                    index === currentSlide ? "opacity-100" : "opacity-50"
                  }`}
                />

                <StarRating />

                <p className="font-medium text-gray-700 text-sm mb-1">
                  {customer.name}
                </p>

                <p className="text-gray-500 text-xs">{customer.company}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="group absolute right-0 mt-5 z-10 w-12 h-12 border-2 border-[#45BCA0] rounded-full flex items-center justify-center bg-white hover:bg-gradient-to-tr from-[#45BCA0] to-[#346197]"
          >
            <ChevronRight className="w-5 h-5 text-[#346197] group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
