const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    id: 6,
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

export default function Timeline() {
  return (
    <div className="overflow-x-auto min-x-7xl py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
        <div className="w-12 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197] mx-auto mb-8"></div>

          <h2 className="text-4xl  font-light text-gray-800 leading-tight">
            How development<br />
            <span className="font-semibold text-gray-900">through Alcaline works</span>
          </h2>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Main horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#346197]  transform -translate-y-1/2 hidden lg:block"></div>
          
          
          {/* Top Row - Flex Layout */}
          <div className="hidden lg:flex  lg:items-start lg:mb-16">
            {[1, 3, 5].map((stepNum) => {
              const step = steps[stepNum - 1];
              return (
                <div key={step.id} className="relative flex-1 ml-10 max-w-xs mx-4">
                  {/* Card */}
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-80 h-40">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      <span className="text-teal-500">#{step.id}</span> {step.title}
                    </h3>
                    <div className="overflow-y-auto h-full">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vertical connector line */}
                  <div className="absolute left-1/2 top-full w-0.5 h-6 bg-[#45BCA0] transform -translate-x-1/2"></div>
                  
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 top-full transform -translate-x-1/2 translate-y-6 w-3 h-3 bg-teal-500 rounded-full"></div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Row - Flex Layout with Offset */}
          <div className="hidden lg:flex lg:justify-between lg:items-start lg:mt-16 lg:ml-20">
            {[2, 4, 6].map((stepNum) => {
              const step = steps[stepNum - 1];
              return (
                <div key={step.id} className="relative flex-1 ml-5 max-w-xs mx-4">
                  {/* Vertical connector line */}
                  <div className="absolute left-1/2 bottom-full w-0.5 h-6 bg-teal-500 transform -translate-x-1/2"></div>
                  
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-6 w-3 h-3 bg-teal-500 rounded-full"></div>
                  
                  {/* Card */}
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-80 h-40">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      <span className="text-teal-500">#{step.id}</span> {step.title}
                    </h3>
                    <div className="overflow-y-auto h-full">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Layout */}
          {/* Mobile vertical line */}
          <div className="absolute left-1/2 top-0 bottom-10 w-0.5 bg-[#346197] transform -translate-x-1/2 lg:hidden"></div>
          
          <div className="lg:hidden space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex justify-center">
                {/* Mobile connector */}
                {/* <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full z-10"></div> */}
                
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-80 ">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <span className="text-teal-500">#{step.id}</span> {step.title}
                  </h3>
                  <div className="overflow-y-auto h-full">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trophy at the end */}
          <div className="flex justify-center lg:justify-end mt-12 z-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:translate-x-12">
            <div className="text-4xl">🏆</div>
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full -ml-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}