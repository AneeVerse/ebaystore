"use client";
import Image from "next/image";
import Layout from "../../common/Layout";
import Link from "next/link";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { Heading } from "@/components/common/typography/Heading";
import { AccentText } from "@/components/common/typography/AccentText";
import Button from "@/components/common/Button";

const DynamicSupportSection = ({
  // Component props with default values
  subtitle = "",
  title = "",
  highlightText = "",
  description = "",
  additionalText = "",
  ctaText = "Book a Call",
  ctaLink = "/contact",
  imageSrc = "/images/services/email-design/about-email.avif",
  imageAlt = "Service illustration",
  theme = {
    background: "bg-primary-500",
    textColor: "text-secondary-500",
    textHighlightColor : "text-secondary-500",
  },
}) => {
  return (
    <section className={`${theme.background} py-16`}>
      <Layout className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content Section */}
        <div className="lg:w-1/2 text-left lg:text-left">
          <UiSubheading border={true} className="text-secondary-500 mb-2">
            {subtitle}
          </UiSubheading>
          <Heading
            level="h2"
            color="dark"
            spacing="lg"
            className="font-semibold"
          >
            {title}{" "}
            <AccentText size="lg" className={`${theme.textHighlightColor}`}>
              {" "}{highlightText}
            </AccentText>
          </Heading>

          <p
            className={`text-lg lg:text-xl ${theme.textColor} leading-relaxed mb-6`}
          >
            {description}
          </p>
        {additionalText &&  <p className={`${theme.textColor} text-md leading-relaxed mb-8`}>
            {additionalText}
          </p>} 
          <Button
            href={ctaLink}
            textColor="text-primary-500"
            bgColor="bg-secondary-500"
            borderColor="border-secondary-500"
            hoverBgColor="bg-primary-500"
            hoverTextColor="#073742"
            className="mt-6"
          >
            {ctaText}
          </Button>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </Layout>
    </section>
  );
};

export default DynamicSupportSection;
