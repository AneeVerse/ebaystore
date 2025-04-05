// data/blogs.js
export const temp1 = 
  {
    id: "temp1",
    title: "How XYZ Tech Increased Conversions by 150% with Optimized Landing Pages",
    thumbnail: "/images/customer-stories/story1/thumbnail.avif",
    category: "Saas",
    date: "15 Feb, 2025",
    timeToRead: "6 min read",
    author: {
      name: "John Smith",
      role: "Head of Growth at XYZ Tech",
      image: "/images/customer-stories/author/john-smith.png",
    },
    client: {
      name: "Amazon",
      industry: "E-commerce & Technology",
      logo: "/images/customer-stories/story1/shopify-logo.avif"
    },
    shortDescription:
      "Discover how XYZ Tech revamped their landing pages with data-driven design, resulting in a 150% boost in conversion rates and increased engagement.",
    description: (
      <div>
        <div className="highlight">
          <h5>Transforming Landing Pages for Maximum Impact</h5>
          <p>
            XYZ Tech needed a landing page strategy that would drive better lead generation and sales.  
            With a focus on UX/UI optimization, A/B testing, and performance-driven design,  
            they were able to significantly improve conversion rates.
          </p>
        </div>
        <p>
          By implementing strategic A/B testing and redesigning their landing pages for faster load times,  
          XYZ Tech not only increased conversions but also improved user retention.
        </p>
      </div>
    ),
    content: [
      {
        title: "The Challenge",
        type: "text",
        srcUrl: "",
        description: (
          <div>
            <p>
              Before working with us, XYZ Tech struggled with **high bounce rates**  
              and low engagement on their landing pages.
            </p>
            <ul>
              <li>**Slow Page Load Times:** Pages took over 5 seconds to load, leading to drop-offs.</li>
              <li>**Unclear Call-to-Action:** Users found it difficult to navigate.</li>
              <li>**Low Conversion Rates:** The existing design wasn't optimized for mobile users.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "The Solution",
        type: "image",
        srcUrl: "/images/customer-stories/story1/thumbnail.avif",
        description: (
          <div>
            <p>
              Our team conducted in-depth **UX research** and implemented a new **landing page framework**  
              optimized for mobile responsiveness and speed.
            </p>
            <ul>
              <li>**Redesigned UI** to improve engagement and clarity.</li>
              <li>**A/B testing** to identify the most effective CTA placements.</li>
              <li>**Optimized load speeds** by reducing unnecessary scripts and images.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "The Results",
        type: "video",
        srcUrl: "https://www.youtube.com/embed/YLo6g58vUm0?si=GgNcq3D71jEVRyGe",
        description: (
          <div>
            <p>
              After optimizing their landing pages, XYZ Tech achieved:
            </p>
            <ul>
              <li>📈 **150% increase** in conversion rates.</li>
              <li>⚡ **50% faster** page load speeds.</li>
              <li>📊 **30% boost** in lead generation.</li>
            </ul>
            <p>
              Watch this short video to see how the transformation happened!
            </p>
          </div>
        ),
      },
    ],
  };
