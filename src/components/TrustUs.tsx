import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import sampathLogo from '../assets/sampath-logo.png';
import adclipseLogo from '../assets/adclipse-logo.png';
import pjcLogo from '../assets/pjc-logo.png';
import clickorderLogo from '../assets/clickorder-logo.png';
import techmateLogo from '../assets/techmate-logo.png';
import projectgama from '../assets/projectgama.jpg';




const companies = [
    { name: 'SAMPATH CREAM HOUSE', logo: sampathLogo },
    { name: 'AdClipse', logo: adclipseLogo },
    { name: 'PJC BRIDGE', logo: pjcLogo },
    { name: 'ClickOrder', logo: clickorderLogo },
    { name: 'TechMate', logo: techmateLogo },
  ];

const CompanySection = () => {
  return (
    <section className={`relative bg-white `}>

      <div className="absolute -top-8 left-24 w-16 h-16 bg-gradient-to-t from-[#45BCA0] to-[#346197] rounded-full"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">

            <div className="w-16 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>
            
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl  text-gray-900 leading-tight">
                Leading companies trust us
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                to develop software
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              We add development capacity to tech teams. Our value isn't 
              limited to building teams but is equally distributed across the 
              project lifecycle. We are a custom software development 
              company that guarantees the successful delivery of your 
              project.
            </p>
            
            <button className="inline-flex items-center gap-2 text-[#57007B] font-semibold hover:underline transition-colors">
              See more Informations
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          

          <div className="relative">
            <div className="relative rounded-2xl  overflow-hidden shadow-2xl">
              <img 
                src={projectgama}
                alt="Team working together"
                className="w-full h-full "
              />

              

              <button className="absolute inset-0 flex items-center justify-center ">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
        

        <div className="mt-20 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">

              <div className="w-16 h-1 mb-7 -mt-5 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>
              <h3 className="text-3xl  text-gray-900">Meet the People</h3>
              <h4 className="text-3xl font-bold text-gray-900">We are Working With</h4>
            </div>
            

            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full border-2 text-[#346197] border-[#45BCA0] flex items-center justify-center hover:bg-gradient-to-tr from-[#45BCA0] to-[#346197] hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#45BCA0] to-[#346197] text-white flex items-center justify-center hover:bg-teal-800">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="lg:block hidden relative top-3 left-[60rem] w-16 h-16 bg-gradient-to-t from-[#45BCA0] to-[#346197] rounded-full"></div>
      

      <div className="relative bg-[#F9F9FF] py-12 -mt-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center animate-scroll-left items-center gap-8 lg:gap-16">
            {companies.map((company, index) => (
              <div key={index} className=" transition-all duration-300 ">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 lg:h-10 mx-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;