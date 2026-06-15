import React, { useRef, useState } from "react";
import axios from "axios";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "./firebase";

export default function Login() {
  const API_URL = "http://187.127.165.63:5000/api";

  const navigate = useNavigate();

  const recaptchaVerifierRef =
    useRef<RecaptchaVerifier | null>(null);

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [otp, setOtp] = useState("");

  const [showOtp, setShowOtp] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const sendOTP = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      alert("Enter valid mobile number");
      return;
    }

    try {
      setLoading(true);
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
      }
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current =
          new RecaptchaVerifier(auth, "recaptcha-container", {
            size: "normal",
          });

        const widgetId = await recaptchaVerifierRef.current.render();
        console.log("Widget ID:", widgetId);
      }
      console.log(auth.app.options);
      const result =
        await signInWithPhoneNumber(
          auth,
          `+91${phoneNumber}`,
          recaptchaVerifierRef.current
        );

      setConfirmationResult(result);
      setShowOtp(true);

      alert("OTP Sent Successfully");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.message ||
        "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!confirmationResult) {
      alert("Please send OTP first");
      return;
    }

    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    try {
      setLoading(true);

      const result =
        await confirmationResult.confirm(
          otp
        );

      const firebaseToken =
        await result.user.getIdToken();

      const response = await axios.post(
        `${API_URL}/login`,
        {
          firebase_token: firebaseToken,
          phone_prefix: "+91",
          phone_number: phoneNumber,
        }
      );

      if (response.data.success) {
        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data)
        );

        alert("Login Successful");

        navigate("/productList");
      }
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
        error?.message ||
        "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const resetPhoneNumber = () => {
    setShowOtp(false);
    setOtp("");
    setConfirmationResult(null);
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-700">
            Frendrops
          </h1>

          <p className="text-gray-500 mt-2">
            Fresh Flowers Delivered Daily
          </p>
        </div>

        {!showOtp ? (
          <form
            onSubmit={sendOTP}
            className="space-y-5"
          >
            <label className="block text-gray-700">
              Mobile Number
            </label>

            <div className="flex border rounded-xl overflow-hidden">
              <div className="bg-gray-100 px-4 flex items-center font-medium">
                +91
              </div>

              <div className="flex items-center px-3">
                <Phone size={18} />
              </div>

              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
                placeholder="Enter mobile number"
                className="flex-1 px-3 py-4 outline-none"
                maxLength={10}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-700 to-purple-500 text-white py-4 rounded-xl font-semibold"
            >
              {loading
                ? "Sending OTP..."
                : "Send OTP"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={verifyOTP}
            className="space-y-5"
          >
            <label className="block text-gray-700">
              Enter OTP
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
              placeholder="Enter 6 digit OTP"
              maxLength={6}
              className="w-full border rounded-xl px-4 py-4 outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold"
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>

            <button
              type="button"
              onClick={resetPhoneNumber}
              className="w-full border border-purple-600 text-purple-600 py-3 rounded-xl"
            >
              Change Number
            </button>
          </form>
        )}

        <div
          id="recaptcha-container"
          className="mt-4"
        />
      </div>
    </div>
  );
}
