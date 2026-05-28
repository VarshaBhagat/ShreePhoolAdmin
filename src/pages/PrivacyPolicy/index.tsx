// src/pages/PrivacyPolicy.tsx

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#fffdfb] min-h-screen">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-violet-700 to-purple-500 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white">
            Privacy Policy
          </h1>

          <p className="text-white/90 text-lg mt-4">
            Last updated: 28/05/2026
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[30px] shadow-xl p-10 space-y-10">

          <p className="text-gray-700 text-lg leading-relaxed">
            At FrendRops, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, store, and safeguard your information when you use
            our website, mobile application, and services.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              1. Information We Collect
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We may collect personal details such as your full name, email
              address, mobile number, delivery address, billing address, and
              payment information when you register, place an order, or contact
              us.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We may also collect device information including browser type,
              operating system, IP address, and cookies to improve our services
              and user experience.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Your information is used to process orders, manage deliveries,
              provide customer support, improve our platform, send updates, and
              maintain account security.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We may also use your information to notify you about offers,
              promotions, discounts, and new services provided by FrendRops.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              3. Sharing of Information
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We do not sell your personal information to third parties.
              However, we may share limited information with trusted partners
              such as payment gateways, delivery providers, analytics services,
              and technical support providers to operate our business
              effectively.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              4. Cookies and Tracking Technologies
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              FrendRops uses cookies and similar technologies to personalize
              your experience, remember your preferences, analyze website
              traffic, and improve functionality.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              You can disable cookies through your browser settings, although
              some features of the website may not function properly.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              5. Data Security
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We implement appropriate security measures to protect your
              personal data against unauthorized access, misuse, disclosure,
              alteration, or destruction.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              While we strive to use commercially acceptable means to protect
              your data, no electronic transmission or storage method is
              completely secure.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              6. User Accounts
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and password. Please notify us immediately if
              you suspect unauthorized access to your account.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              7. Payment Information
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              All online payments are processed securely through trusted payment
              gateway providers. FrendRops does not directly store your debit
              card, credit card, or banking details.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              8. Third-Party Links
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Our website may contain links to external websites or third-party
              services. We are not responsible for the privacy practices or
              content of such external platforms.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              9. Children's Privacy
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              FrendRops services are not intended for children under the age of
              13. We do not knowingly collect personal information from
              children.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              10. Your Rights
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              You have the right to access, update, modify, or request deletion
              of your personal information. You may also opt out of marketing
              communications at any time.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              11. Changes to This Privacy Policy
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be posted on this page with an updated
              revision date.
            </p>
          </div>

          <div className="bg-violet-50 rounded-2xl p-6">
            <p className="text-[#2d1457] text-lg font-medium leading-relaxed">
              By using FrendRops services, you agree to the terms outlined in
              this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;