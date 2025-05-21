import Layout from "../common/Layout";

const TextWithVideo = () => {
    return (
      <section className="pt-12">
        <Layout className=" flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="lg:w-1/2 mb-8 pr-4 lg:mb-0">
           
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-primary-500 mb-4">
            A <span className="font-Rock_Salt">smarter</span>  way to scale your creative
              
            </h1>
            <p className="text-lg text-primary-500 mb-4">
            aneeverse replaces creative bottlenecks with limitless creative output, empowering you to bring your bold visions to life faster.
            </p>
            <p className="text-gray-400 mb-6">
            “aneeverse combines creative talent from around the world with purpose-built tech to
deliver a significantly faster, cheaper and better customer experience than traditional
agency networks and freelance marketplaces.”
            </p>

            <p className="text-gray-400 mb-6">
            - Fredrik Thomassen, Co-founder and CEO
            </p>
           
          </div>
  
          {/* Right Video Section */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto lg:mr-0 lg:w-1/2">
            <div className="relative w-full h-64 lg:h-80 bg-black rounded-lg overflow-hidden">
              <button
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play Video"
              >
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.293 5.293a1 1 0 0 1 1.414 0L10.414 8l-2.707 2.707a1 1 0 1 1-1.414-1.414L8.586 8 6.293 5.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Layout>
      </section>
    );
  };
  
  export default TextWithVideo;
  