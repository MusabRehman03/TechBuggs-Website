import { Element } from "react-scroll";
import caseStudies1 from "../assets/caseStudies1.jpg";
import caseStudies3 from "../assets/caseStudies3.jpg";
import caseStudies2 from "../assets/caseStudies2.jpg";
import arrowBottom from "../assets/arrowBottom.png";
import arrowUp from "../assets/arrowUp.png"
import { ChevronRight } from "lucide-react";
import {useMediaQuery} from "react-responsive";
export default function CaseStudies() {

  const caseStudies = [
    {
      id: 1,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: caseStudies1,
      bg:"bg-[#F1F2FF]",
    },
    {
      id: 2,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: caseStudies2,
      bg:"bg-[#F0FFF7]",
    },
    {
      id: 3,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: caseStudies3,
      bg:"bg-[#FFF4F4]",
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 940 });
  const is1371 = useMediaQuery({ minWidth: 1371 });
  return (
    <Element name="case-studies" className="  bg-[#F9F9FF]">
      <img src={arrowBottom} alt="" className={`${!is1371&&"hidden"} h-50 relative -top-10 left-[75rem]`}/>
      <img src={arrowUp} alt="" className={`${!is1371&&"hidden"} h-50 relative -top-60 left-[8rem]`}/>

      <div className={ `w-full flex justify-center ${is1371?"-mt-72 pb-10":"p-10 "} `}>
        
      <div className={`${!is1371&&"hidden"} w-5 h-5 relative -top-[2rem] -left-[10rem] rounded-full bg-gradient-to-r from-[#45BCA0] to-[#346197]`}></div>

      <div className="w-16 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>
      </div>
      <div className="flex space-y-3 flex-col justify-center pb-10 items-center">
        <h1 className="text-4xl">Our Recent</h1>
        <h1 className="text-4xl font-bold">Case Studies</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center p-10 ">
      <div className=" space-y-5">
        {caseStudies.map((caseStudy) => (
          <div className={`flex p-4 ${caseStudy.bg} ${isMobile&& "flex-col"} max-w-6xl rounded-2xl`}>
            <div className="rounded-4xl flex  items-center ">
              <img src={caseStudy.image} alt=""  className=""/>
            </div>
            <div className="p-10">
              <div >
                <h2 className={`${isMobile?"text-sm":"text-2xl"}  font-semibold`}>{caseStudy.title}</h2>
                <p className={`${isMobile&&"text-xs"} `}>{caseStudy.description}</p>
              </div>
              <div className="mt-10  flex justify-end">
                <h1 className=" bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent">Read More</h1>
                <ChevronRight className="text-[#346197] "/>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="w-full flex justify-end items-center  px-20 py-10">
        <div className=" bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent">Read More Case Studies</div>
        <ChevronRight className="text-[#346197] ml-2" />
        </div>
    </Element>
  );
}
