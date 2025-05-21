import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import Layout from "../common/Layout";

const Newsletter = () => {
  return (
    <div className="mt-16 mb-8">
      <div className="relative w-full rounded-xl overflow-hidden bg-secondary-500">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/letterbox-bg.avif" 
            alt="Newsletter background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10">
          {/* Content */}
          <div className="p-10 sm:p-12">
            <h4 className="text-[#C0FF7C] uppercase text-sm tracking-wide font-medium">
              SUBSCRIBE TO
            </h4>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2">
              The Creative Brief
            </h2>
            <p className="text-white/80 mt-4 max-w-md">
              Where 70K+ creatives and marketers find the latest events, articles and
              insights sparking industry-wide interest.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex items-center bg-secondary-500/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 w-full sm:w-64">
                <MdOutlineEmail className="text-white/60 text-lg self-center mr-2" />
                <input 
                  type="email" 
                  placeholder="buzz@nasa.gov" 
                  className="bg-transparent text-white outline-none w-full"
                />
              </div>
              <button className="bg-[#C0FF7C] text-secondary-500 font-semibold px-8 py-3 rounded-full hover:bg-[#D5FFB0] transition sm:whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
  