import Layout from "../../common/Layout";



const statsData = [
  {
    value: "500+",
    description: "Successfully designed and delivered visually captivating presentations to clients globally.",
  },
  {
    value: "3x",
    description: "Increase in audience engagement for clients with our interactive and dynamic presentations.",
  },
  {
    value: "100+",
    description: "Custom presentation templates crafted to align with various industries and brands.",
  },
  {
    value: "10x",
    description: "Boost in brand recognition and message retention for clients using our high-quality presentation designs.",
  },
];
  
  export default function PresentationiDesignStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Engage & Present".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Data-Driven Presentation Design Success
            </h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between gap-5 items-center border-b border-gray-700 pb-4"
            >
              <p className="text-lg text-gray-400 max-w-sm">{stat.description}</p>
              <span className="text-[50px] sm:text-[110px] font-normal text-white">{stat.value}</span>
            </div>
          ))}
        </div>
       </Layout>
      </div>
    );
  }
  