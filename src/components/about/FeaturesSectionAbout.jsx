import { FaLightbulb, FaListAlt, FaStar } from "react-icons/fa";
import Layout from "../common/Layout";

export default function FeaturesSectionAbout() {
  return (
    <section className="bg-primary-500 py-16">
      <Layout>
      <div className="max-w-xl mx-auto text-center">
        <div  className=" font-light tracking-widest mb-3 text-sm">CREATIVE THAT WORKS</div>
        {/* Heading */}
        <h2 className="text-4xl font-medium text-gray-800">
        A creative partner that <span className="font-Rock_Salt">just clicks</span>
        </h2>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {/* Feature 1 */}
        <div className=" ">
          <span className="bg-[#E6ECD6] inline-block  text-secondary-500 p-4 rounded-lg mb-2">
            <FaLightbulb size={32} />
          </span>
          <h3 className="text-sm font-light text-gray-800 uppercase">ONLY THE BEST</h3>
          <h4 className="text-lg font-medium text-gray-800 uppercase">The top 1% of global talent</h4>
          <p className="text-gray-600 mt-2">
            Boost your in-house creative. We handle the heavy lifting so you can focus on strategic, high-impact work without adding overhead to the team.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="">
          <span className="bg-[#E6ECD6] inline-block  text-secondary-500 p-4 rounded-lg mb-2">
            <FaListAlt size={32} />
          </span>
          <h3 className="text-sm font-light text-gray-800 uppercase">TAILORED TO YOU</h3>
          <h4 className="text-lg font-medium text-gray-800 uppercase">The top 1% of global talent</h4>
          <p className="text-gray-600 mt-2">
            Say yes to more projects. Whether you need more bandwidth or different skills, Aneeverse has the resources you need to get the job done.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="">
          <span className="bg-[#E6ECD6] text-secondary-500 inline-block p-4 rounded-lg mb-2">
            <FaStar size={32} />
          </span>
          <h3 className="text-sm font-light text-gray-800 uppercase">ULTRA-FAST
          </h3>
          <h4 className="text-lg font-medium text-gray-800 uppercase">The top 1% of global talent</h4>
          <p className="text-gray-600 mt-2">
            Don't sacrifice quality for speed. Our global team of creatives delivers agency-level work in a fraction of the time.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="">
          <span className="bg-[#E6ECD6] text-secondary-500 inline-block p-4 rounded-lg mb-2">
            <FaStar size={32} />
          </span>
          <h3 className="text-sm font-light text-gray-800 uppercase">ready for the future</h3>
          <h4 className="text-lg font-medium text-gray-800 uppercase">The top 1% of global talent</h4>
          <p className="text-gray-600 mt-2">
            Don't sacrifice quality for speed. Our global team of creatives delivers agency-level work in a fraction of the time.
          </p>
        </div>
        
      </div>
      </Layout>
    </section>
  );
}
