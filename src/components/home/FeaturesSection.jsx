import { FaLightbulb, FaListAlt, FaStar } from "react-icons/fa";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function FeaturesSection() {
  return (
    <section className="bg-primary-500 py-16">
      <Layout>
        <div className=" max-w-xl lg:max-w-2xl mx-auto text-center">
          {/* Heading */}
          <Heading
            level="h2"
            color="dark"
            spacing="lg"
            className="text-center font-semibold"
          >
            Aneeverse is the{" "}
            <AccentText
              size="lg"
              className={"text-blue-500 whitespace-nowrap mt-1 "}
            >
              perfect fit{" "}
            </AccentText>
            for fast moving brands
          </Heading>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 ">
          {/* Feature 1 */}
          <div className=" ">
            <span className="bg-[#E6ECD6] inline-block  text-secondary-500 p-4 rounded-lg mb-2">
              <FaLightbulb size={32} />
            </span>
            <h3 className="text-md font-light text-gray-800 uppercase">
              Scalable
            </h3>
            <p className="text-gray-600 mt-2">
              Boost your in-house creative. We handle the heavy lifting so you
              can focus on strategic, high-impact work without adding overhead
              to the team.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="">
            <span className="bg-[#E6ECD6] inline-block  text-secondary-500 p-4 rounded-lg mb-2">
              <FaListAlt size={32} />
            </span>
            <h3 className="text-md font-light text-gray-800 uppercase">
              Flexible
            </h3>
            <p className="text-gray-600 mt-2">
              Say yes to more projects. Whether you need more bandwidth or
              different skills, Aneeverse has the resources you need to get the
              job done.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="">
            <span className="bg-[#E6ECD6] text-secondary-500 inline-block p-4 rounded-lg mb-2">
              <FaStar size={32} />
            </span>
            <h3 className="text-md font-light text-gray-800 uppercase">24/7</h3>
            <p className="text-gray-600 mt-2">
              Don't sacrifice quality for speed. Our global team of creatives
              delivers agency-level work in a fraction of the time.
            </p>
          </div>
        </div>
      </Layout>
    </section>
  );
}
