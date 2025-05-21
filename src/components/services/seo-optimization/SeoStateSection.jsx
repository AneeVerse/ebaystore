import Layout from "../../common/Layout";


const statsData = [
  {
    value: "98%",
    description: "Clients achieved significant growth in organic traffic after optimizing their landing pages with us.",
  },
  {
    value: "4x",
    description: "Increase in lead generation for businesses utilizing our SEO-optimized landing page strategies.",
  },
  {
    value: "700+",
    description: "Landing pages designed with industry-best practices for SEO, conversion, and performance.",
  },
  {
    value: "1.8s",
    description: "Average load time for landing pages, ensuring mobile-first, fast-loading experiences.",
  },
];
  
  export default function SeoStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"SEO-Optimized Growth".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Data-Driven SEO Performance
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
  