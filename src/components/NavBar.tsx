import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className=" w-full fixed top-0 left-0 z-50 bg-white shadow-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <img src={logo} alt="dc" className="h-10 w-24" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            to="hero"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#77BA9F]"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#77BA9F]"
          >
            Services
          </Link>
          <Link
            to="case-studies"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#77BA9F]"
          >
            Case Studies
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#77BA9F]"
          >
            Projects
          </Link>
          <Link
            to="hire"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#77BA9F]"
          >
            Hire
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#77BA9F]"
          >
            About us
          </Link>
        </nav>
        
        {/* Desktop Contact Button */}
        <Link to="contact" smooth duration={500}>
          <div className="hidden md:block">
            <button className="bg-gradient-to-tr cursor-pointer from-[#2F4A88] to-[#77BA9F] text-white px-5 py-2 rounded-md hover:opacity-90 transition">
              Contact us
            </button>
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white shadow-lg`}>
        <nav className="px-4 py-4 space-y-4">
          <Link
            to="hero"
            smooth
            duration={500}
            className="block cursor-pointer hover:text-[#77BA9F] py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            className="block cursor-pointer hover:text-[#77BA9F] py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="case-studies"
            smooth
            duration={500}
            className="block cursor-pointer hover:text-[#77BA9F] py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="block cursor-pointer hover:text-[#77BA9F] py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="hire"
            smooth
            duration={500}
            className="block cursor-pointer hover:text-[#77BA9F] py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Hire
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="block cursor-pointer hover:text-[#77BA9F] py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            About us
          </Link>
          <div className="w-full flex justify-center">
            <Link
              to="contact"
              smooth
              duration={500}
              onClick={closeMenu}
            >
              <button className="bg-gradient-to-tr from-[#2F4A88] to-[#77BA9F] text-white px-5 py-3 rounded-md hover:opacity-90 transition my-4">
                Contact us
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}