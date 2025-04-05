import Layout from "../common/Layout";

export default function TeamSectionAbout() {
    const team = [
      {
        name: "Fredrik Thomassen",
        role: "Co-founder and CEO",
        image: "/images/about/team1.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
      },
      {
        name: "Haakon Heir",
        role: "Co-founder and CTO",
        image: "/images/about/team2.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
      },
      {
        name: "Jing Kjeldsen",
        role: "Co-founder and CPO",
        image: "/images/about/team3.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
      },
      {
        name: "Jen Rapp",
        role: "Co-founder and CMO",
        image: "/images/about/team4.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
      },
        {
            name: "Kai Kjeldsen",
            role: "Co-founder and COO",
            image: "/images/about/team5.avif",
            bgColor: "bg-[#f9f9f9]",
            textColor: "text-[#3d3d3d]",
        },
        {
            name: "Kari Rapp",
            role: "Co-founder and CCO",
            image: "/images/about/team6.avif",
            bgColor: "bg-[#f6edf9]",
            textColor: "text-[#4a124f]",
        },
    ];
  
    return (
      <section className="bg-primary-500 py-12">
        <Layout>
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="uppercase text-sm text-secondary-500 tracking-wide">
              Our Executive Team
            </p>
            <h2 className="text-4xl mt-3 md:text-5xl max-w-4xl mx-auto font-bold text-secondary-500">
              A team of <span className="font-Rock_Salt">experts and leaders</span> helping democratize access to{" "}
              <span className="italic">good creative</span>
            </h2>
          </div>
  
          {/* Horizontal Scroll Section */}
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
            {team.map((member, index) => (
              <div
                key={index}
                className={`min-w-[350px] relative h-[480px] pb-[30px] hover:pb-[90px]  hover:mt-[-5px] transition-all duration-300 cursor-pointer group ${member.bgColor} shadow-sm rounded-lg overflow-hidden`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className={`p-4 h-[60px] group-hover:h-[90px] transition-all duration-300 absolute bottom-0 left-0 w-full ${member.bgColor}`}>
                  <p className={`text-2xl font-semibold ${member.textColor}`}>
                    {member.name}
                  </p>
                  <p className="text-md h-0 group-hover:h-fit overflow-hidden duration-300 transition-transform">
                    <span className={`${member.textColor}`}>{member.role}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </section>
    );
  }
  