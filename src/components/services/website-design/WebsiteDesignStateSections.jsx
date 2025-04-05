import Layout from "../../common/Layout";

const statsData = [
    {
      value: "650+",
      description: "Talented aneeversers distributed around the globe.",
    },
    {
      value: "13",
      description: "Timezones covered. Our global coverage means unprecedented turnaround times.",
    },
    {
      value: "500+",
      description: "Happy customers. We help brands of all sizes grow even faster, from global enterprises to early-stage startups.",
    },
    {
      value: "20%",
      description: "Among the top 20% for comparable roles across all the markets we operate in.",
    },
  ];
  
  export default function WebsiteDesignStateSections() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
        <Layout className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between gap-5 items-center border-b border-gray-700 pb-4"
            >
              <p className="text-lg text-gray-400 max-w-sm">{stat.description}</p>
              <span className="text-[50px] sm:text-[110px] font-normal text-white">{stat.value}</span>
            </div>
          ))}
        </Layout>
      </div>
    );
  }
  