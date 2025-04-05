import Layout from "../../common/Layout";


const statsData = [
  {
    value: "85%",
    description: "Boost in local business discovery after implementing targeted local SEO strategies, including GMB optimization.",
  },
  {
    value: "5x",
    description: "Growth in website visits for businesses leveraging local SEO tactics like citation building and local backlinks.",
  },
  {
    value: "1,000+",
    description: "Local SEO strategies implemented across over a thousand business profiles, improving their local search rankings.",
  },
  {
    value: "0.7s",
    description: "Average Google My Business listing load time, ensuring faster and more efficient interactions with local customers.",
  },
];
  
  export default function LocalSeoStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Local SEO Excellence".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Proven Local SEO Results
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
  