import pythonLogo from "../assets/PythonLogo.png";
import javaLogo from "../assets/javaLogo.png";
import MongoDBLogo from "../assets/mongodbLogo.png";
import mySqlLogo from "../assets/mySqlLogo.png";
import nodeLogo from "../assets/Node.jsLogo.png";
import phpLogo from "../assets/phpLogo.svg";
import netLogo from "../assets/netLogo.png";
import railsLogo from "../assets/railsLogo.png";
import goLogo from "../assets/goMuscotLogo.png";

export default function TechStack() {
  const categories = [
    {
      id: "backend",
      name: "Backend",
      active: true,
    },
    {
      id: "frontend",
      name: "Frontend",
      active: false,
    },
    {
      id: "databases",
      name: "Databases",
      active: false,
    },
    {
      id: "cms",
      name: "CMS",
      active: false,
    },
    {
      id: "cloudtesting",
      name: "CloudTesting",
      active: false,
    },
    {
      id: "devops",
      name: "DevOps",
      active: false,
    },
  ];

  const technologies = {
    backend: [
      {
        id: 1,
        name: "Node.js",
        logo: nodeLogo,
        alt: "Node.js logo",
      },
      {
        id: 2,
        name: "PHP",
        logo: phpLogo,
        alt: "PHP logo",
      },
      {
        id: 3,
        name: "MySQL",
        logo: mySqlLogo,
        alt: "MySQL logo",
      },
      {
        id: 4,
        name: "Java",
        logo: javaLogo,
        alt: "Java logo",
      },
      {
        id: 5,
        name: ".NET Core",
        logo: netLogo,
        alt: ".NET Core logo",
      },
      {
        id: 6,
        name: "Python",
        logo: pythonLogo,
        alt: "Python logo",
      },
      {
        id: 7,
        name: "Rails",
        logo: railsLogo,
        alt: "Rails logo",
      },
      {
        id: 8,
        name: "Go",
        logo: goLogo,
        alt: "Go mascot",
      },
      {
        id: 9,
        name: "MongoDB",
        logo: MongoDBLogo,
        alt: "MongoDB logo",
      },
    ],
    frontend: [
      {
        id: 1,
        name: "React",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "React logo",
      },
      {
        id: 2,
        name: "Vue.js",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Vue.js logo",
      },
      {
        id: 3,
        name: "Angular",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Angular logo",
      },
    ],
    databases: [
      {
        id: 1,
        name: "PostgreSQL",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "PostgreSQL logo",
      },
      {
        id: 2,
        name: "MongoDB",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "MongoDB logo",
      },
      {
        id: 3,
        name: "Redis",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Redis logo",
      },
    ],
    cms: [
      {
        id: 1,
        name: "WordPress",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "WordPress logo",
      },
      {
        id: 2,
        name: "Drupal",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Drupal logo",
      },
    ],
    cloudtesting: [
      {
        id: 1,
        name: "AWS",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "AWS logo",
      },
      {
        id: 2,
        name: "Jest",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Jest logo",
      },
    ],
    devops: [
      {
        id: 1,
        name: "Docker",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Docker logo",
      },
      {
        id: 2,
        name: "Kubernetes",
        logo: "/placeholder.svg?height=80&width=120",
        alt: "Kubernetes logo",
      },
    ],
  };

  const activeCategory = categories.find((cat) => cat.active)?.id || "backend";
  const activeTechnologies =
    technologies[activeCategory as keyof typeof technologies] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 space-y-3">
        <div className="w-16 h-1 mb-10 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>

        <h2 className="text-4xl  t text-center">Our</h2>
        <h1 className="text-4xl font-bold t text-center">Tech Stack</h1>
      </div>

      {/* Category Navigation */}
      <div className=" w-full mb-12 ">
        <div className="flex overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center gap-8 pb-4 pl-4 pr-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`relative px-4 py-2 text-lg font-medium whitespace-nowrap transition-colors duration-300 flex-shrink-0 ${
                category.active
                  ? "bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent"
                  : "text-black hover:bg-gradient-to-r from-[#45BCA0] to-[#346197] hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {category.name}
              {category.active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Grid - unchanged */}
      <div className="flex w-full overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center gap-10 p-10 border-b border-[#E7DAED]">
        {activeTechnologies.map((tech) => (
          <div
            key={tech.id}
            className="flex-shrink-0 p-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={tech.logo}
              alt={tech.alt}
              className="h-20 w-20 md:h-14 md:max-w-[10rem] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
