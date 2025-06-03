import { Element } from "react-scroll";
import { Users, Target, Award, Heart, Lightbulb, Zap } from "lucide-react";


export default function AboutUs() {


  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and collaboration to achieve extraordinary results."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Client Focus",
      description: "Your success is our success. We're committed to delivering solutions that exceed expectations."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "We're passionate about technology and creating solutions that make a difference."
    }
  ];

  const benefits = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology and creative problem-solving approaches."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Highly skilled professionals with years of industry experience."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes."
    }
  ];

  return (
    <Element name="about" className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197] mb-10"></div>
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent">TechBugs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
             
              We're a team of passionate developers and designers dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 right-20 w-32 h-32 bg-gradient-to-r from-[#45BCA0] to-[#346197] rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 left-20 w-32 h-32 bg-gradient-to-r from-[#45BCA0] to-[#346197] rounded-full opacity-10"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#F9F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, TechBugs emerged from a simple yet powerful vision: to create technology solutions that make a real difference in people's lives.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service digital agency, serving clients across various industries.
                </p>
                <p>
                  Our journey has been marked by continuous learning, innovation, and a steadfast commitment to excellence. We've helped numerous businesses transform their digital presence and achieve their goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/team-pic.jpg"
                  alt="Our team working together"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#45BCA0] to-[#346197] rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197] mx-auto mb-10"></div>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us maintain the highest standards of service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-[#45BCA0] to-[#346197] p-3 rounded-lg w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F9F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-[#45BCA0] to-[#346197] mx-auto mb-10"></div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with creative thinking to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-[#45BCA0] to-[#346197] p-3 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#45BCA0] to-[#346197] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
} 