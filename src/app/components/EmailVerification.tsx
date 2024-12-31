"use client";
import { useState } from "react";

interface EmailVerificationProps {
  onEmailVerified: (email: string) => void;
}

const EmailVerification = ({ onEmailVerified }: EmailVerificationProps) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const handleVerifyEmail = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("A verification link has been sent to your email.");
    console.log("Verification link sent to: ", email);
    onEmailVerified(email);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-100 p-6 rounded-lg shadow-md">
      <label htmlFor="email" className="block font-semibold mb-2">Email Address:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        onClick={handleVerifyEmail}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
      >
        Verify Email
      </button>
      {message && (
        <p className="mt-4 text-sm text-gray-600 bg-gray-100 p-2 rounded-lg">
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailVerification;
