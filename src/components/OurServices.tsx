import { Element } from "react-scroll";
import codeIcon from "../assets/codeIcon.png";
import mobileIcon from "../assets/mobileIcon.png";
import laptopIcon from "../assets/laptopIcon.png";
import { useState } from "react";
const services = [
  {
    id:1,
    title: "UI/UX Design",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: codeIcon,
  },
  {
    id:2,
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: mobileIcon,
  },
  {
    id:3,
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: laptopIcon,
    // highlight: true,
  },
  {
    id:4,
    title: "Software Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: codeIcon,
  },
  {
    id:5,
    title: "QA & Testing",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: laptopIcon,
  },
];

export default function ServicesSection() {
    const [clicked, setClicked] = useState(0);
  return (
    <Element name="services">
      <section className="py-20 relative z-10 bg-[#F9F9FF]">
        <div className="px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Services We Offer</h2>
          <div className="flex flex-wrap justify-center gap-6 cursor-pointer h-full">
            {services.map((service) => (
              <div 
              onClick={() => setClicked(service.id)}
                key={service.id}
                className={`p-6 rounded-lg shadow w-64 h-56 text-left mb-10 transition hover:shadow-lg border ${
                  clicked===service.id
                    ? "border-[#77BA9F] xl:mt-10 md:shadow-lg"
                    : "border-transparent"
                } bg-white`}
              >
                <img 
                  src={service.icon} 
                  className="w-10 h-10 p-2 border border-[#77BA9F]  rounded-full mb-4" 
                  alt="" 
                />
                <h3 className={`${clicked===service.id ? "text-[#77BA9F]" : "text-black"} text-sm font-semibold mb-2`}>
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}