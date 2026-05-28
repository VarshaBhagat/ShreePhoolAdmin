// src/pages/TermsConditions.tsx

import React from "react";

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-[#fffdfb] min-h-screen">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-violet-700 to-purple-500 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white">
            Terms & Conditions
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
            Welcome to FrendRops. By accessing or using our website,
            mobile application, or services, you agree to comply with
            and be bound by the following Terms & Conditions.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              By using FrendRops services, you confirm that you have
              read, understood, and agreed to these Terms &
              Conditions.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              2. User Accounts
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              You are responsible for maintaining the confidentiality
              of your account credentials and for all activities under
              your account.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              FrendRops reserves the right to suspend or terminate
              accounts that violate our policies.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              3. Orders and Payments
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              All orders placed through FrendRops are subject to
              product availability and acceptance.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Payments must be completed using approved payment
              methods available on our platform.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              4. Pricing
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Prices displayed on FrendRops may change without prior
              notice. We reserve the right to modify product pricing at
              any time.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              5. Delivery
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Delivery times are estimates and may vary depending on
              location, weather conditions, or unforeseen
              circumstances.
            </p>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              FrendRops is not liable for delays caused by third-party
              delivery services.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              6. Cancellation and Refunds
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Orders may only be cancelled before dispatch. Refunds
              will be processed according to our refund policy.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              7. Prohibited Activities
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Users must not misuse the platform, attempt unauthorized
              access, upload harmful content, or engage in fraudulent
              activities.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              8. Intellectual Property
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              All content, logos, trademarks, graphics, and materials
              on FrendRops are the property of FrendRops and protected
              under applicable laws.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              9. Limitation of Liability
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              FrendRops shall not be held liable for any indirect,
              incidental, or consequential damages resulting from the
              use of our services.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              10. Privacy
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Your use of FrendRops is also governed by our Privacy
              Policy.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-[#2d1457]">
              11. Changes to Terms
            </h2>

            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              We reserve the right to modify these Terms &
              Conditions at any time without prior notice.
            </p>
          </div>

          {/* FOOT NOTE */}
          <div className="bg-violet-50 rounded-2xl p-6">
            <p className="text-[#2d1457] text-lg font-medium leading-relaxed">
              By continuing to use FrendRops services, you agree to
              these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;