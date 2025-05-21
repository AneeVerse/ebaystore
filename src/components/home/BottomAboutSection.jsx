"use client";
import Image from "next/image";
import Layout from "../common/Layout";
import Link from "next/link";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { Heading } from "@/components/common/typography/Heading";
import { AccentText } from "@/components/common/typography/AccentText";
import Button from "@/components/common/Button";

const BottomAboutSection = () => {
  return (
    <section className={`bg-[#e6ecd6] overflow-x-hidden text-secondary-500`}>
      <div className="max-w-container mx-auto  lg:px-[50px] lg:mx-[20px] xl:mx-[50px]  2xl:mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch  lg:gap-16 xl:gap-24">
          {/* Left Content Section */}
          <div className="lg:w-1/2 px-sm md:px-md lg:px-0 flex flex-col justify-between items-stretch ">
            <div className="max-w-2xl flex flex-col justify-between h-full py-16 ">
             <div>
                <div className="border-b border-secondary-500 pb-1 mb-4">
              <UiSubheading  className="  ">
                Work with the best
              </UiSubheading>
              </div>
              <Heading
                level="h2"
                color="dark"
                spacing="lg"
                className="font-semibold mb-6"
              >
                <AccentText size="lg" className={``}>
                  World-class talent
                </AccentText>{" "}
                with no borders
              </Heading>
</div>
<div>
              <div className="space-y-6">
                <p className={`text-lg lg:text-xl  leading-relaxed`}>
                  Work with the top 1% of global creative talent – elite designers, project managers, 
                  animators, copywriters, AI technologists and more, recruited from the best brands 
                  and agencies.
                </p>
                
                <p className={` text-lg leading-relaxed`}>
                  Plus, a dedicated project manager to ensure your briefs stay on track from start to finish.
                </p>
              </div>

              <Button
                href={"/contact"}
                textColor="text-[#e6ecd6]"
                bgColor="bg-secondary-500"
                borderColor="border-secondary-500"
                hoverBgColor="bg-[#e6ecd6]"
                hoverTextColor="#073742"
                className="mt-8 lg:mt-12"
              >
                Book a Call
              </Button>
            </div></div>
          </div>

          {/* Right Image Section */}
          <div className="w-full relative lg:-mr-[10%] xl:-mr-[15%] 2xl:-mr-[20%] h-[500px] lg:h-[720px] ">
            <Image
              src={"/images/home/bottom-about.avif"}
              alt={"World-class talent"}
              fill
              className="object-cover object-center absolute right-0 shadow-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomAboutSection;