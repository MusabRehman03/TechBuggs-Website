import { Element } from "react-scroll";

export default function CaseStudies() {
  return (
    <Element name="case-studies" className="py-20 bg-white">
      
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-xl font-medium text-[#2F4A88] uppercase tracking-wider">Our recent</h2>
        <h3 className="text-3xl font-bold text-[#2F4A88]">Case studies</h3>
      </div>

      <div className="space-y-12">
        {["blue", "green", "pink"].map((color, i) => (
          <div key={i} className={`rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-6 bg-${color}-100 p-6`}>
            <div className="flex-shrink-0">
              <img src={`/case-study-${i + 1}.png`} alt="Case Study" className="w-64 rounded-md" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#2F4A88]">Website Design for SCFC Canada</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. is striving to deliver the best services in the shipping and logistics sectors.
              </p>
              <a href="#" className="text-[#77BA9F] text-sm font-semibold inline-block mt-2">Read more</a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <a href="#" className="text-[#2F4A88] font-medium hover:underline">Read more case studies →</a>
      </div>
    </div>
    </Element>
  );
}