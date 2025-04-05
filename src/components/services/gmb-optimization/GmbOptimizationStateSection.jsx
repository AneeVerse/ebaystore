import Layout from "../../common/Layout";


const statsData = [
  {
    value: "95%",
    description: "Clients saw an increase in local visibility and engagement after optimizing their Google My Business profiles with us.",
  },
  {
    value: "3x",
    description: "Increase in local leads for businesses optimizing their GMB profiles and posts through our strategies.",
  },
  {
    value: "500+",
    description: "Google My Business profiles optimized with best practices, resulting in improved local search rankings.",
  },
  {
    value: "0.9s",
    description: "Average response time for Google My Business inquiries, ensuring a fast and responsive customer experience.",
  },
];

  
  export default function GmbOptimizationStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"GMB Optimization Growthh".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Data-Driven GMB Performance
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
  