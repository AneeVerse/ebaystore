import Layout from "../../common/Layout";


const statsData = [
  {
    value: "95%",
    description: "Clients saw increased credibility and engagement after publishing ghostwritten content under their name.",
  },
  {
    value: "3x",
    description: "More engagement on thought leadership articles and books written by our expert ghostwriters.",
  },
  {
    value: "500+",
    description: "Books, blogs, and speeches crafted for individuals, brands, and businesses worldwide.",
  },
  {
    value: "100%",
    description: "Confidentiality guaranteed—your voice, our words, and complete privacy protection.",
  },
];
  
  export default function GhostWritingStateSection() {
    return (
      <div className="bg-secondary-500 text-primary-500 pb-0 pt-5 md:pt-12 md:pb-12 ">
       <Layout>
         {/* Heading */}
         <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Powerful Words, Lasting Impact".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 mb-4 md:text-6xl max-w-4xl mx-auto font-semibold">
            Ghost writing Success by the Numbers
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
  