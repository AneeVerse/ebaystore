import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const navigation = [
        {
          title: 'Services',
          links: [
            { name: 'Video', href: '/services/video' },
            { name: 'Design', href: '/services/design' },
            { name: 'Animation', href: '/services/animation' },
            { name: 'Graphic', href: '/services/graphic' },
            { name: 'Website', href: '/services/website' },
            { name: 'Presentations', href: '/services/presentations' },
            { name: 'Brand', href: '/services/brand' },
            { name: 'Full-Service Production', href: '/services/full-service-production' },
          ],
        },
        {
          title: 'Engagement',
          links: [
            { name: 'Creative as a service', href: '/engagement/creative' },
            { name: 'Short video subscription', href: '/engagement/short-video' },
            { name: 'Product Launch Bundle', href: '/engagement/product-launch' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { name: 'Blog', href: '/resources/blog' },
            { name: 'Playbooks', href: '/resources/playbooks' },
            { name: 'Newsletter', href: '/resources/newsletter' },
            { name: 'Podcast', href: '/resources/podcast' },
          ],
        },
        {
          title: 'Competitors',
          links: [
            { name: 'aneeverse Alternatives', href: '/competitors/aneeverse' },
            { name: 'Vidico Alternatives', href: '/competitors/vidico' },
            { name: 'Wyzowl Alternatives', href: '/competitors/wyzowl' },
            { name: 'Design Pickle Alternatives', href: '/competitors/design-pickle' },
            { name: 'Penji Alternatives', href: '/competitors/penji' },
            { name: 'Kimp Alternatives', href: '/competitors/kimp' },
            { name: 'Manypixels Alternatives', href: '/competitors/manypixels' },
            { name: 'Shuttlerock Alternatives', href: '/competitors/shuttlerock' },
            { name: 'Design Force Alternatives', href: '/competitors/design-force' },
          ],
        },
      ];
      

  const customerStories = [
    { name: 'Searce Case Study', href: '/stories/searce' },
    { name: 'Xactly Case Study', href: '/stories/xactly' },
    { name: 'Truckstop Case Study', href: '/stories/truckstop' },
    { name: 'Deemedya Case Study', href: '/stories/deemedya' },
    { name: 'OneMagnify Case Study', href: '/stories/onemagnify' },
    { name: 'ServiceNow Case Study', href: '/stories/servicenow' },
    { name: 'Tailwind Case Study', href: '/stories/tailwind' },
  ];

  const capabilities = [
    { name: 'Video Ad', href: '/capabilities/video-ad' },
    { name: 'Demo Video', href: '/capabilities/demo-video' },
    // ... other capabilities
    { name: 'Product Video', href: '/capabilities/product-video' },
    { name: 'Explainer Video', href: '/capabilities/explainer-video' },
    { name: 'Social Media Video', href: '/capabilities/social-media-video' },
    { name: 'Brand Video', href: '/capabilities/brand-video' },
    { name: 'Promo Video', href: '/capabilities/promo-video' },
  ];

  const useCases = [
    { name: 'Design Team', href: '/use-case/design-team' },
    { name: 'Brand Marketing Team', href: '/use-case/brand-marketing' },
    // ... other use cases
    { name: 'Product Marketing Team', href: '/use-case/product-marketing' },
    { name: 'Growth Marketing Team', href: '/use-case/growth-marketing' },
    { name: 'Content Marketing Team', href: '/use-case/content-marketing' },
    { name: 'Social Media Marketing Team', href: '/use-case/social-media-marketing' },
    { name: 'Product Team', href: '/use-case/product-team' },
  ];

  return (
    <footer className="bg-[#fffbfa] pt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div className=" mb-8 md:mb-0">
            <h2 className="font-bold text-2xl text-purple-700">content β</h2>
            <ul className="mt-6 space-y-3">
              <li><a href="/about-us" className="text-gray-700 hover:text-purple-500">About Us</a></li>
              <li><a href="/pricing" className="text-gray-700 hover:text-purple-500">Pricing</a></li>
              {/* Other links */}
                <li><a href="/contact" className="text-gray-700 hover:text-purple-500">Contact</a></li>
                <li><a href="/careers" className="text-gray-700 hover:text-purple-500">Careers</a></li>
                <li><a href="/faq" className="text-gray-700 hover:text-purple-500">FAQ</a></li>
                <li><a href="/press" className="text-gray-700 hover:text-purple-500">Press</a></li>

            </ul>
          </div>
          {navigation.map((section, index) => (
            <div key={index} className=" mb-8 md:mb-0">
              <h3 className="font-semibold  text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3 ">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-700 hover:text-purple-500">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8">
          <h3 className="font-semibold text-lg mb-4">Customer Stories</h3>
          <ul className="flex flex-wrap gap-4  list-disc list-inside ">
            {customerStories.map((story, index) => (
              <li key={index}>
                <a href={story.href} className="text-gray-700 hover:text-purple-500">
                  {story.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border-t pt-8">
          <h3 className="font-semibold text-lg mb-4">Capabilities</h3>
          <ul className="flex flex-wrap gap-4  list-disc list-inside " >
            {capabilities.map((capability, index) => (
              <li key={index}>
                <a href={capability.href} className="text-gray-700 hover:text-purple-500">
                  {capability.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border-t pt-8">
          <h3 className="font-semibold text-lg mb-4">Use Case</h3>
          <ul className="flex flex-wrap gap-4  list-disc list-inside ">
            {useCases.map((useCase, index) => (
              <li key={index}>
                <a href={useCase.href} className="text-gray-700 hover:text-purple-500">
                  {useCase.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 bg-gray-900"> 
        <div className='max-w-7xl mx-auto flex-col md:flex-row gap-3  px-4 flex min-h-[70px] py-2 justify-between items-center '>
        <p className="text-gray-400 text-sm">All rights reserved © 2025 Earendel Media LLC</p>
        <div className=" self-center text-sm">
          <a href="/privacy-policy" className="text-gray-400 hover:text-purple-500">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="text-gray-400 hover:text-purple-500">Terms of Service</a>
        </div>
        <div className="flex justify-center text-2xl space-x-4">
          <a href="https://twitter.com" className="text-gray-400 hover:text-purple-500"><FaTwitter /></a>
          <a href="https://facebook.com" className="text-gray-400 hover:text-purple-500"><FaFacebook /></a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-purple-500"><FaInstagram /></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;