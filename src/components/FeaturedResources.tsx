import resources1 from "../assets/resources1.jpg";
import resources2 from "../assets/resources2.jpg";
import resources3 from "../assets/resources3.jpg";
import resources4 from "../assets/resources4.jpg";
import resources5 from "../assets/resources5.jpg";
import { ChevronRight } from "lucide-react"
const FeaturedResources = () => {
  const resources = [
    {
      id: 1,
      img: resources1,
    },
    {
      id: 2,
      img: resources2,
    },
    {
      id: 3,
      img: resources3,
    },
    {
      id: 4,
      img: resources4,
    },
    {
      id: 5,
      img: resources5,
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center space-y-3 mb-16">
        <div className="w-16 h-1 mb-10 bg-gradient-to-r from-[#45BCA0] to-[#346197]"></div>

        <h2 className="text-4xl  ">Featured</h2>
        <h1 className="text-4xl font-bold ">Resources</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center p-5 ">
        {resources.map((resource) => (
          <div className="flex flex-col w-72 space-x-3">
            <div key={resource.id} className="mb-4">
              <img
                src={resource.img}
                alt={`Resource ${resource.id}`}
                className="w-64 h-40 rounded-lg shadow-lg"
              />
            </div>
            <div>

                <p className="text-xs">
                How to Build a Scalable Application up to 1 Million Users on AWS
                </p>
                <div className="flex justify-end mt-4 px-5">
                <p className="bg-gradient-to-r from-[#45BCA0] text-sm to-[#346197] bg-clip-text text-transparent">Read More</p>
                <ChevronRight className="text-teal-600 text-sm" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedResources;
