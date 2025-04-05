import Layout from "../../common/Layout";


const statsData = [
  {
    value: "80%",
    description: "Increase in engagement rates after partnering with relevant influencers for targeted campaigns.",
  },
  {
    value: "5x",
    description: "Boost in brand awareness for businesses leveraging influencer collaborations across social platforms.",
  },
  {
    value: "300+",
    description: "Influencer campaigns successfully managed, generating authentic brand content and increased customer trust.",
  },
  {
    value: "2.5M+",
    description: "Total reach across campaigns, connecting brands to millions of potential customers through influencer marketing.",
  },
];
  
  export default function InfluencerMarketingStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Influencer-Driven Growth".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Data-Driven Influencer Marketing Performance
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
  