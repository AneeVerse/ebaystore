import Layout from "../../common/Layout";

const statsData = [
  {
    value: "95%",
    description: "Increase in engagement for brands after incorporating creative social media campaigns.",
  },
  {
    value: "3x",
    description: "Boost in audience reach for businesses leveraging eye-catching social media visuals.",
  },
  {
    value: "500+",
    description: "Custom-designed creatives for clients across social media platforms, including Instagram, Facebook, and Twitter.",
  },
  {
    value: "2.5s",
    description: "Average load time for creative content on social media, ensuring smooth user experiences.",
  },
];
  
  
  export default function SocialMediaStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Enhance Your Social Media Presence".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Social Media Creatives That Drive Engagement
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
  