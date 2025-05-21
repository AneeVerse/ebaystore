import Layout from "../common/Layout";

export default function OurTeamSection() {
    const team = [
        {
            name: "Kai Kjeldsen",
            about: "Previously a Creative Director with Ogilvy in Johannesburg where she worked on brands like Coca-Cola, Unilever, and Nestle.",
            image: "/images/about/team5.avif",
            bgColor: "bg-[#f9f9f9]",
            textColor: "text-[#3d3d3d]",
        },
        {
            name: "Kari Rapp",
            about: "Previously a Creative Director with Ogilvy in Johannesburg where she worked on brands like Coca-Cola, Unilever, and Nestle.",
            image: "/images/about/team6.avif",
            bgColor: "bg-[#f6edf9]",
            textColor: "text-[#4a124f]",
        },
        {
        name: "Fredrik Thomassen",
        about: "Previously a Creative Director with Ogilvy in Johannesburg where she worked on brands like Coca-Cola, Unilever, and Nestle.",
        image: "/images/about/team1.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
      },
      {
        name: "Haakon Heir",
        about: "Previously a Creative Director with Ogilvy in Johannesburg where she worked on brands like Coca-Cola, Unilever, and Nestle.",
        image: "/images/about/team2.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
      },
      {
        name: "Jing Kjeldsen",
        about: "Previously a Creative Director with Ogilvy in Johannesburg where she worked on brands like Coca-Cola, Unilever, and Nestle.",
        image: "/images/about/team3.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
      },
      {
        name: "Jen Rapp",
        about: "Previously a Creative Director with Ogilvy in Johannesburg where she worked on brands like Coca-Cola, Unilever, and Nestle.",
        image: "/images/about/team4.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
      },
        
    ];
  
    return (
      <section className=" py-12">
        <Layout>
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="uppercase text-sm text-primary-500 tracking-wide">
              Our Team
            </p>
            <h2 className="text-4xl mt-3 md:text-6xl max-w-4xl mx-auto font-bold text-primary-500">
            Your  <span className="font-Rock_Salt">creative team's </span> creative team
            
            </h2>
            <div className="text-md text-primary-500 mt-6">Meet some of the creative experts behind the world’s top brands</div>
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
                <div className={`p-4 h-[60px] group-hover:h-[150px] transition-all duration-300 absolute bottom-0 left-0 w-full ${member.bgColor}`}>
                  <p className={`text-2xl font-semibold ${member.textColor}`}>
                    {member.name}
                  </p>
                  <p className="text-md  h-0 group-hover:h-fit group-hover:mt-2  overflow-hidden duration-300 transition-transform">
                    <span className={`${member.textColor} line-clamp-3`}>{member.about}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </section>
    );
  }
  