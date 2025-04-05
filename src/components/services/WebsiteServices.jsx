import Link from "next/link";

import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function WebsiteServices() {
  const services = [
    {
      title: "Website Design",
      description:
        "Create stunning, responsive websites with a focus on user-friendly UI/UX to represent your brand effectively.",
      imgUrl: "/images/services/website/website-design.png",
      pageUrl: "/services/website-design",
    },
    {
      title: "Landing Page",
      description:
        "Design high-converting landing pages tailored to campaigns or product launches for maximum engagement.",
      imgUrl: "/images/services/website/landing-page.png",
      pageUrl: "/services/landing-pages",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website's visibility and rankings with expert keyword optimization and technical SEO strategies.",
      imgUrl: "/images/services/website/seo-optimization.png",
      pageUrl: "/services/seo-optimization",
    },
    {
      title: "GMB Optimization",
      description:
        "Enhance your Google My Business profile to attract more local customers and improve search visibility.",
      imgUrl: "/images/services/website/gmb-optimization.png",
      pageUrl: "/services/gmb-optimization",
    },
    {
      title: "Local SEO",
      description:
        "Drive local traffic to your business with targeted SEO strategies tailored for your location.",
      imgUrl: "/images/services/website/email-design.png",
      pageUrl: "/services/local-seo",
    },
    {
      title: "Email Design",
      description:
        "Invigorate your communications with original email designs, templates, and creative campaigns.",
      imgUrl: "/images/services/website/local-seo.png",
      pageUrl: "/services/email-design",
    },
  ];

  return (
    <section id="website-services" className="py-6 text-white">
      <Layout>
        {/* Heading */}
        <Heading
          level="h2"
          color="light"
          spacing="lg"
          className="text-center  font-medium"
        >
          <AccentText size="lg">website </AccentText>
          Services
        </Heading>

        {/* Grid */}
        <div className="grid gap-4 grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.pageUrl}
              className={`group block h-[250px] sm:h-[370px] lg:h-auto  relative rounded-2xl overflow-hidden ${
                index === 0 || index === services.length - 1
                  ? "lg:col-span-2"
                  : index === 1
                  ? "lg:row-span-2"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden relative h-[250px] sm:h-full w-full">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-full object-cover group-hover:scale-110 transition duration-300"
                />
                {/* overlap */}
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-30 "></div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 absolute top-2 left-2">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#F7F9F2] text-sm mb-4">
                  {service.description}
                </p>
              </div>
              <div className="text-[#F7F9F2] absolute bottom-3 left-6 font-medium text-sm flex items-center gap-2 group-hover:underline">
                <span> Learn more </span>{" "}
                <MdOutlineArrowOutward className="self-center" />
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </section>
  );
}
