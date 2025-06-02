import {useMediaQuery} from 'react-responsive';
import { Element } from 'react-scroll';

export default function HeroSection() {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
      <Element name="hire" className="">
        <div className='flex w-full items-center justify-center p-20 '>

      <section className="bg-[#F1F1F5] lg:min-w-6xl w-4xl rounded-4xl py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl lg:text-4xl mb-10 md:mb-0 font-bold text-gray-800 max-w-xl lg:max-w-2xl">
              Hire the best developers and designers around!
            </h1>
          </div>
          <div className="relative">
            {!isMobile && (
                <div>
                 <div className="absolute -top-14 right-1/2 transform translate-x-1/2 w-1 h-8 bg-gradient-to-t from-[#45BCA0] to-[#346197]"></div>
                 <div className="absolute -top-10 right-1/3 transform translate-x-1/2 w-1 h-8 bg-gradient-to-t from-[#45BCA0] to-[#346197] rotate-45"></div>
                 <div className="absolute -top-10 right-2/3 transform translate-x-1/2 w-1 h-8 bg-gradient-to-t from-[#45BCA0] to-[#346197] -rotate-45"></div>
                 </div>
            )}
           
            <button className="bg-gradient-to-tr from-[#45BCA0] to-[#346197] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
              Hire Top Developers
            </button>
  
            {!isMobile && (
                <div>
                <div className="absolute -bottom-14 right-1/2 transform translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#45BCA0] to-[#346197] "></div>
                <div className="absolute -bottom-10 right-1/3 transform translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#45BCA0] to-[#346197] -rotate-45"></div>
                <div className="absolute -bottom-10 right-2/3 transform translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#45BCA0] to-[#346197] rotate-45"></div>
     </div>
            )}
                     </div>
        </div>
      </section>
      </div>
      </Element>
    )
  }