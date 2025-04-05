import Layout from "../common/Layout";

export default function HeroSectionOurTeam() {
    return (
        <section className="bg-secondary-500  text-white">
            {/* Hero Section */}
            <div className=" ">
                {/* Text Content */}
                <Layout className="flex pb-8 flex-col gap-4 md:flex-row  justify-between ">
                    <div>
                        <span className="text-[#a5bcc5] ">MEET YOUR DEDICATED TEAM</span>
                        <h1 style={{lineHeight: "120%"}} className="text-4xl max-w-xl mt-2 lg:text-6xl font-semibold">
                            The creative force{" "}
                            <span className=" font-Rock_Salt text-[#d9d9d9]">behind
                          
                                world-leading brands
                            </span>
                        </h1>
                    </div>

                    <p className="text-md self-end max-w-md text-[#a5bcc5] mt-6">
                        The only creative service where enterprise teams get the top 1% of
                        global talent, powered by AI, plugged directly into their workflows.
                    </p>
                </Layout>

                {/* Image */}
                <div className=" mt-12 ">
                    <img
                        src="/images/our-team/our-team-banner.avif"
                        alt="Creative Showcase"
                        className="rounded-lg h-[400px] w-full object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* Supporting Text Section */}
            <div className=" py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl lg:text-4xl font-medium text-white">
                        Not an agency, not a bunch of freelancers—a world-class creative
                        team ready to support you whenever, and however, you need.
                    </p>
                </div>
            </div>
        </section>
    );
}
