"use client";

import Layout from "@/components/common/Layout"; // Assuming you have a layout component

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
    <Layout >
      <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            This Privacy Policy explains how we collect, use, and protect your
            information when you visit or interact with our website. We value your
            privacy and are committed to safeguarding your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-lg text-gray-700 mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-lg text-gray-700">Personal information (e.g., name, email)</li>
            <li className="text-lg text-gray-700">Usage data (e.g., IP address, browser type)</li>
            <li className="text-lg text-gray-700">Cookies and tracking data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            We may use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-lg text-gray-700">To improve our website and services</li>
            <li className="text-lg text-gray-700">To send you newsletters and marketing materials</li>
            <li className="text-lg text-gray-700">To process and manage your requests</li>
            <li className="text-lg text-gray-700">To analyze usage trends and user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Protect Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration, or
            destruction. We use encryption, secure servers, and other technologies
            to ensure your data is safe.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our website uses cookies to enhance your user experience. Cookies are
            small text files that are stored on your device to track your
            preferences and activity. You can choose to accept or reject cookies by
            adjusting your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sharing Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            We do not sell or rent your personal information to third parties.
            However, we may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-lg text-gray-700">With service providers who assist us in running our business</li>
            <li className="text-lg text-gray-700">When required by law or to protect our legal rights</li>
            <li className="text-lg text-gray-700">In connection with business transfers, such as mergers or acquisitions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p className="text-lg text-gray-700 mb-4">
            Depending on your location, you may have the right to access, update,
            or delete your personal information. You can also object to the use of
            your personal data for certain purposes. If you wish to exercise your
            rights, please contact us using the details below.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Links to Other Websites</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of these websites. We
            encourage you to review the privacy policies of any third-party sites
            you visit.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to This Privacy Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            We may update this Privacy Policy from time to time to reflect changes
            in our practices or legal requirements. When we make changes, we will
            update the date at the top of this page. We encourage you to review this
            Privacy Policy periodically to stay informed about how we are protecting
            your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please contact us:
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> team@aneeverse.com
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> +91 91527 55529
          </p>
        </div>
      </section>
    </Layout>
    </div>
  );
};

export default PrivacyPolicy;
