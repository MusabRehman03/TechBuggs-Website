import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex justify-between flex-col md:flex-row border-b border-gray-200 md:border-b-0">
          {/* Left side with logo and description - takes exactly half */}
          <div className="flex items-center space-x-3 pb-8 md:pb-0 md:w-1/2 md:pr-8 md:border-r md:border-gray-200">
            <img src={logo} alt="Company Logo" className="w-36 h-16" />
            <div className="max-w-xs">
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          {/* Right side with other sections - takes exactly half */}
          <div className="md:w-1/2 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Services column */}
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-blue-900 mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                      Email Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                      Campaigns
                    </a>
                  </li>
                </ul>
              </div>

              {/* About column */}
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-blue-900 mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                      Benefits
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us column */}
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-blue-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - full width below the split sections */}
        <div className="pt-8 text-center text-gray-600 text-sm">
          Copyright © 2020. LogoIpsum. All rights reserved.
        </div>
      </div>
    </footer>
  )
}