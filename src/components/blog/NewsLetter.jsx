import { MdOutlineEmail } from "react-icons/md";
import Layout from "../common/Layout";

const Newsletter = () => {
    return (
      <div className="bg-secondary-500 mt-4  text-primary-500 p-10 sm:p-12 rounded-2xl flex flex-col gap-5 ">
        <div className="mb-5 sm:mb-0 max-w-full sm:max-w-md">
          <h3 className="text-sm font-semibold uppercase text-gray-400">Subscribe to our Newsletter</h3>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">Don't miss anything</h2>
          <p className="text-gray-400 mt-2 sm:mt-4">Join our community of 50,000+ who receive the best in design and marketing content, weekly.</p>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <div className="relative flex items-center bg-transparent border border-gray-500 rounded-full px-4 py-2 w-full sm:w-64">
            <MdOutlineEmail className="text-gray-400 text-lg self-center mr-2" />
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-white outline-none w-full"
            />
          </div>
          <button className="bg-lime-300 text-black font-semibold px-5 py-2 ml-3 rounded-full hover:bg-lime-400 transition">Subscribe</button>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  