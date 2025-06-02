import { Rocket, Code, TrendingUp, CheckCircle, FileCheck, Shield } from "lucide-react"

export default function DesignApproach() {
  return (
    <div className="w-full mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-[#F7F7FA]">
      {/* Header */}
      <div className="flex flex-col items-center space-y-3 mb-16">
      <div className="w-16 h-1 bg-gradient-to-r mb-10 from-[#45BCA0] to-[#346197]"></div>

        <h2 className="text-4xl   text-center">Our design and</h2>
        <h1 className="text-4xl font-bold  text-center">development approach</h1>
      </div>

      {/* Approaches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-40">
        {/* UX Driven Engineering */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 rounded-lg p-3 flex-shrink-0">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold  mb-3">UX Driven Engineering</h3>
              <p className="t leading-relaxed">
                Unlike other companies, we are a <span className="font-medium ">UX first</span> development
                company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
          </div>
        </div>

        {/* Developing Shared Understanding */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-tr from-[#509CF5] to-[#68DBF2] rounded-lg p-3 flex-shrink-0">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Developing Shared Understanding</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike other companies, we are a <span className="font-medium bg-gradient-to-tr from-[#509CF5] to-[#68DBF2] bg-clip-text text-transparent">UX first</span> development
                company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
          </div>
        </div>

        {/* Proven Experience and Expertise */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-tr from-[#FF3D9A] to-[#FF92AE] rounded-lg p-3 flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Experience and Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike other companies, we are a <span className="font-medium bg-gradient-to-tr from-[#FF3D9A] to-[#FF92AE] bg-clip-text text-transparent">UX first</span> development
                company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Intellectual Property (IP) */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-tr from-[#24E795] to-[#67E9F1] rounded-lg p-3 flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Intellectual Property (IP)</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike other companies, we are a <span className="font-medium bg-gradient-to-tr from-[#24E795] to-[#67E9F1] bg-clip-text text-transparent">UX first</span> development
                company. Projects are driven by designers and they make sure design and experiences translate to code.
              </p>
            </div>
          </div>
        </div>

        {/* Code Reviews */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-tr from-[#F7936F] to-[#FFEF5E] rounded-lg p-3 flex-shrink-0">
              <FileCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Code Reviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike other companies, we are a <span className="font-medium bg-gradient-to-tr from-[#F7936F] to-[#FFEF5E] bg-clip-text bg-transparent">UX first</span>{" "}
                development company. Projects are driven by designers and they make sure design and experiences
                translate to code.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Assurance & Testing */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-lg p-3 flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance & Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike other companies, we are a <span className="font-medium bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">UX first</span>{" "}
                development company. Projects are driven by designers and they make sure design and experiences
                translate to code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
