import Layout from '@/components/common/Layout';
import { AccentText } from '@/components/common/typography/AccentText';
import { Heading } from '@/components/common/typography/Heading';
import Link from 'next/link';
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export const metadata = {
  title: "Contact Us | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Contact Us | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/contact`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Contact Us | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}



const ContactUsPage = () => {


  return (
    <div className="bg-gray-50 mt-[-80px] pt-[80px] text-gray-900">


      {/* Header Section */}
      {/* <div className="py-20 px-3 text-center bg-secondary-500 text-primary-500">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl font-light">We'd love to hear from you! Schedule a meeting or reach out to us.</p>
      </div> */}

      {/* Calendly Embed */}
      <div className="pt-6 sm:pt-16 sm:pb-16 bg-[#fbfcfd] text-secondary-500">
        <Layout>
          <Heading
            level="h2"
            color="dark"
            spacing="lg"
            className="text-center font-semibold mb-2"
          >
            Schedule a Discovery Call

          </Heading>
          <p className="text-md sm:text-lg md:text-xl mb-4 text-center font-normal">
            Schedule a call below or email{" "}
            <Link href="mailto:team@aneeverse.com" className='inline-block'>
              <span className="text-blue-600">team@aneeverse.com</span>
            </Link>{" "}
            or  {" "}
            {/* send message to whatsapp */}
            <Link href="https://wa.me/+919152755529" className='inline-block'>
              <span className="text-blue-600">send us a text </span>
            </Link>{" "}
            to learn more about our plans, process, and results.
          </p>
          <div className="rounded-lg overflow-hidden ">
            <iframe
              src="https://calendly.com/aneeverse/discovery-call"
              className="w-full min-h-[1090px] lg:min-h-[760px] border-none"
              frameBorder="0"
              scrolling="no"

              title="Calendly Scheduling"
            ></iframe>
          </div>
        </Layout>
      </div>

      {/* Contact Details Section */}
      <div className="py-20 bg-secondary-500  text-primary-500 ">
        <Layout className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
          <Heading
            level="h4"
            color="light"
            spacing="lg"
            className="text-left font-semibold"
          >
            Get in Touch

          </Heading>
            <div className="space-y-6 text-md sm:text-lg">
              <Link href={"tel:+91 91527 55529"} className="flex items-center  ">
                <FaPhone className="  mr-4" /> +91 91527 55529
              </Link>
              <Link href="mailto:team@aneeverse.com" className="flex items-center   ">
                <FaEnvelope className=" mr-4" /> team@aneeverse.com
              </Link>
              <p className="flex items-center  ">
                <FaMapMarkerAlt className=" min-w-fit mr-4" /> Office No. 03, Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44, Seawoods, Navi Mumbai, Maharashtra 400706
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" target='_blank' className="  ">
                <FaFacebookF size={24} />
              </a>
              <a href="#" target='_blank' className="">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/aneeverse/" target='_blank' className="  ">
                <FaInstagram size={24} />
              </a>
              <Link href="https://www.linkedin.com/company/aneeverse" target='_blank' className=" ">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
          <Heading
            level="h4"
            color="light"
            spacing="lg"
            className="text-left font-semibold "
          >
           Our Location

          </Heading>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8045.169104825051!2d73.005389!3d19.0155818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c103ebdfb625%3A0xee9ac3282c16c2!2sAneeverse%20Creative%20Solutions%20%7C%20Digital%20Marketing%2C%20Web%20Development%20Services%20in%20Navi%20Mumbai!5e1!3m2!1sen!2sin!4v1738217506212!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
                title="Google Maps Location"
              ></iframe>

            </div>
          </div>

        </Layout>
      </div>

    </div>
  );
};

export default ContactUsPage;