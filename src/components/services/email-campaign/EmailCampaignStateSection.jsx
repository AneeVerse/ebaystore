import Layout from "../../common/Layout";


const statsData = [
  {
    value: "95%",
    description: "Clients saw a significant increase in email open rates after implementing our personalized email campaigns.",
  },
  {
    value: "3x",
    description: "Growth in click-through rates for businesses leveraging our targeted email segmentation and A/B testing.",
  },
  {
    value: "500+",
    description: "Email campaigns delivered with industry-leading engagement, conversion rates, and optimization best practices.",
  },
  {
    value: "0.9s",
    description: "Average response time for automated email sequences, ensuring timely and efficient communication with subscribers.",
  },
];
  export default function EmailCampaignStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Email Campaign Success".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Data-Driven Email Campaign Results
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
  