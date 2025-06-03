import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project1W from "../assets/project1W.png"
import project2W from "../assets/project2W.png"
import project3W from "../assets/project3W.png"


export default function PreviousProjects() {
    const projects = [
      {
        id: 1,
        title: "Project Alpha",
        description:
          "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
        deliveryText: "Our delivery model helps you cut costs and deliver within budget.",
        testimonial:
          "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
        author: {
          name: "Jeewa markram",
          role: "CEO",
          avatar: project1W,
        },
        image: project1,

      },
      {
        id: 2,
        title: "Project Beta",
        description:
          "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
        deliveryText: "Our delivery model helps you cut costs and deliver within budget.",
        testimonial:
          "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
        author: {
          name: "Jeewa markram",
          role: "CEO",
          avatar: project2W,
        },
        image: project2,

      },
      {
        id: 3,
        title: "Project Gama",
        description:
          "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
        deliveryText: "Our delivery model helps you cut costs and deliver within budget.",
        testimonial:
          "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
        author: {
          name: "Jeewa markram",
          role: "CEO",
          avatar: project3W,
        },
        image: project3,

      },
    ]
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 mb-16">
        <div className="w-16 h-1 mb-10 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>

          <h2 className="text-4xl  ">Our</h2>
          <h1 className="text-4xl font-bold ">Previous Projects</h1>
        </div>
  
        {/* Projects */}
        {projects.map((project, index) => {
          const isEven = index % 2 === 0
          const isLast = index === projects.length - 1
  
          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 ${isLast ? "" : "mb-24"} relative`}
            >
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <p className="mb-6">
                  Our <span className="bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent hover:underline cursor-pointer">delivery model</span> helps you cut
                  costs and deliver within budget.
                </p>
  
                {/* Testimonial */}
                <div className="border-l-4 border-[#45BCA0] pl-4 mb-6">
                  <p className="italic bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent ">"{project.testimonial}"</p>
                </div>
  
                {/* Profile */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
                    <img
                      src={project.author.avatar}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">{project.author.name}</p>
                    <p className="text-sm text-gray-500">{project.author.role}</p>
                  </div>
                </div>
              </div>
  
              {/* Image */}
              <div className="flex-1 relative">
                {/* Conditional decorative circles based on project position */}
                {index === 0 && (
                  <>
                    <div className="absolute -top-8 right-80 w-16 h-16 bg-gradient-to-t from-[#45BCA0] to-[#346197]  rounded-full z-0"></div>
                    <div className="absolute -bottom-6 right-36 w-12 h-12 bg-gradient-to-t from-[#45BCA0] to-[#346197]  rounded-full z-0"></div>
                  </>
                )}
                {index === 1 && <div className="md:block hidden absolute -bottom-8 left-80 w-16 h-16 bg-gradient-to-t from-[#45BCA0] to-[#346197]  rounded-full z-0"></div>}
                {index === 2 && (
                  <div className="absolute -bottom-6 right-32 w-16 h-16 bg-gradient-to-t from-[#45BCA0] to-[#346197] rounded-full z-0"></div>
                )}
  
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image }
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  