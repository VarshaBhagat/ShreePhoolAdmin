import {
  Mail,
  Phone,
  Globe,
  Headphones,
} from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-violet-50 p-4">
      <div className="max-w-4xl mx-auto">

        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-sm p-8 text-center">

          <div className="h-20 w-20 bg-violet-100 rounded-full mx-auto flex items-center justify-center">
            <Headphones
              size={40}
              className="text-violet-600"
            />
          </div>

          <h1 className="mt-6 text-4xl font-bold">
            We're here to help
          </h1>

          <p className="mt-4 text-gray-500">
            For complaints, order issues,
            refunds, or any assistance,
            please contact our support team.
          </p>
        </div>

        {/* Support Info */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mt-5">

          <h2 className="text-2xl font-semibold mb-6">
            Support Information
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-violet-100 flex items-center justify-center">
                <Mail className="text-violet-600" />
              </div>

              <div>
                <div className="text-gray-500">
                  Email
                </div>
                <div className="font-medium">
                  fernanddrops@gmail.com
                </div>
              </div>
            </div>

            <hr />

            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-violet-100 flex items-center justify-center">
                <Phone className="text-violet-600" />
              </div>

              <div>
                <div className="text-gray-500">
                  Phone
                </div>
                <div className="font-medium">
                  +91 8050515079
                </div>
              </div>
            </div>

            <hr />

            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-violet-100 flex items-center justify-center">
                <Globe className="text-violet-600" />
              </div>

              <div>
                <div className="text-gray-500">
                  Website
                </div>
                <div className="font-medium">
                  frendrops.in
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mt-5">

          <h2 className="text-2xl font-semibold mb-6">
            Get in Touch
          </h2>

          <a
            href="tel:+918050515079"
            className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white py-4 rounded-2xl font-semibold"
          >
            <Phone size={18} />
            Call Us
          </a>

          <a
            href="mailto:fernanddrops@gmail.com"
            className="w-full flex justify-center items-center gap-3 border-2 border-violet-500 text-violet-600 py-4 rounded-2xl font-semibold mt-4"
          >
            <Mail size={18} />
            Email Us
          </a>

        </div>

      </div>
    </div>
  );
}