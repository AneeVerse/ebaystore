import Layout from "../../common/Layout";

const statsData = [
  {
    value: "95%",
    description: "Clients saw a significant increase in conversions after optimizing their Meta Ads campaigns with us.",
  },
  {
    value: "3x",
    description: "Increase in click-through rates for businesses using our Meta Ads targeting and ad creative strategies.",
  },
  {
    value: "500+",
    description: "Meta Ads campaigns managed, delivering improved performance across various industries and ad formats.",
  },
  {
    value: "1.2s",
    description: "Average load time for landing pages linked from Meta Ads, ensuring a fast and seamless user experience.",
  },
];
  
  export default function MetaAdsStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Meta Ads Performance".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Data-Driven Meta Ads Results
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
  