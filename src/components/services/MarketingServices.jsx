import Link from "next/link";

import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function WebsiteServices() {
  const services = [
    {
      title: "Marketing Strategy",
      description:
        "Grow your brand with expert consultants. Develop a comprehensive marketing strategy to reach your goals.",
      imgUrl: "/images/services/marketing-strategy/hero-banner.avif",
      pageUrl: "/services/marketing-strategy",
    },
    {
      title: "Email Campaign",
      description:
        "Personalized email campaigns that convert. Engage your audience with targeted email campaigns.",
      imgUrl: "/images/services/website/landing-page.png",
      pageUrl: "/services/email-campaign",
    },
    {
      title: "Google Ads",
      description:
        "Targeted ads to maximize ROI. Reach your audience with Google Ads campaigns that drive results.",
      imgUrl: "/images/services/website/gmb-optimization.png",
      pageUrl: "/services/google-ads",
    },
    {
      title: "Meta Ads",
      description:
        "Creative campaigns that get noticed. Stand out with creative Meta Ads campaigns that drive engagement.",
      imgUrl: "/images/services/website/seo-optimization.png",
      pageUrl: "/services/meta-ads",
    },
    {
      title: "Influencer Marketing",
      description:
        "Boost brand visibility with trusted influencers. Leverage influencer partnerships to grow your brand.",
      imgUrl: "/images/services/website/email-design.png",
      pageUrl: "/services/influencer-marketing",
    },
  ];

  return (
    <section id="marketing-services" className="py-6 text-white">
      <Layout>
        {/* Heading */}
        <Heading
          level="h2"
          color="light"
          spacing="lg"
          className="text-center  font-medium"
        >
          <AccentText size="lg">marketing </AccentText>
          Services
        </Heading>

        {/* Grid */}
        <div className="grid gap-4 grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.pageUrl}
              className={`group relative  h-[250px] sm:h-[370px] lg:h-auto lg:max-h-[420px] rounded-2xl overflow-hidden ${
                index === 0 ? "lg:col-span-2" : ""
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
