import { FaLightbulb, FaListAlt, FaStar } from "react-icons/fa";
import Layout from "../../common/Layout";

export default function MarketingStrategyFeatureSection() {
  return (
    <section className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
      {/* Heading */}
      <div className="text-center mb-12">
            <p className="uppercase text-sm tracking-widest">Our difference</p>
            <h2 className="text-3xl mt-3 md:text-5xl max-w-4xl mx-auto font-semibold">
            Superside is the  <span className="font-Rock_Salt text-3xl md:text-4xl tracking-wider"> perfect fit </span> for fast moving brands
            </h2>
          </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 ">
        {/* Feature 1 */}
        <div className=" ">
          <span className="bg-[#c4e878] text-secondary-500 inline-block   p-4 rounded-lg mb-2">
            <FaLightbulb size={32} />
          </span>
          <h3 className="text-md font-light  uppercase">Specific Marketing Objectives</h3>
          <p className="mt-2">
          No matter your goal, our expert strategists craft tailored solutions to increase brand awareness, improve conversion rates, and enhance creative performance
          </p>
        </div>

        {/* Feature 2 */}
        <div className="">
          <span className="bg-[#c4e878] text-secondary-500 inline-block   p-4 rounded-lg mb-2">
            <FaListAlt size={32} />
          </span>
          <h3 className="text-md font-light  uppercase">Various Marketing Disciplines</h3>
          <p className=" mt-2">
          Our global team of specialists covers a wide range of marketing disciplines, including social media, digital ads, SEO, content marketing, email campaigns, ABM, and more.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="">
          <span className="bg-[#c4e878] text-secondary-500  inline-block p-4 rounded-lg mb-2">
            <FaStar size={32} />
          </span>
          <h3 className="text-md font-light uppercase">All Stages of the Journe</h3>
          <p className=" mt-2">
          From GTM strategies to ongoing performance audits, Superside’s strategy services support your brand at every stage, ensuring continuous growth and improvement.
          </p>
        </div>
      </div>
      </Layout>
    </section>
  );
}
