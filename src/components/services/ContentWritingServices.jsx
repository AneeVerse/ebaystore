import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function ContentWritingServices() {
  const creativeServices = [
    {
      title: "Blog Writing",
      description:
        "SEO-friendly blogs tailored to your niche. Engage your audience with informative and engaging content.",
      imgUrl: "/images/services/creative/borchore.png",
      pageUrl: "/services/blog-writing",
    },
    {
      title: "Ghost Writing",
      description:
        "Captivating content under your brand's name. Let our expert writers craft compelling content for your brand.",
      imgUrl: "/images/services/creative/presentation-design.png",
      pageUrl: "/services/ghost-writing",
    },
  ];

  return (
    <section id="content-writing" className="py-6 text-white">
      <Layout>
        {/* Heading */}
        <Heading
          level="h2"
          color="light"
          spacing="lg"
          className="text-center  font-medium"
        >
          <AccentText size="lg">content </AccentText>
          Writing
        </Heading>

        {/* Grid */}
        <div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
          {creativeServices.map((service, index) => (
            <Link
              href={service.pageUrl}
              key={index}
              className={`group relative h-[250px] sm:h-[370px] lg:h-[420px] rounded-2xl overflow-hidden `}
            >
              {/* Image */}
              <div className="overflow-hidden h-full w-full">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
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
