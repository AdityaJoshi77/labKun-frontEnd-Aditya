"use client";
import { useState } from "react";
import { registerUser } from "../../lib/auth/auth"; 

interface SignupFormProps {
  email: string;
  isVerified: boolean;
}

const SignupForm = ({ email, isVerified }: SignupFormProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError(null);
    try {
      await registerUser(email, password, name); 
      alert(`Account created successfully for ${email}!`);
    } catch (err) {
      setError("Error creating account.");
    } 
    
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-slate-100 p-6 rounded-lg shadow-md">
      {isVerified && (
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly
            className="border border-gray-300 bg-gray-100 cursor-not-allowed rounded-lg px-4 py-2 w-full focus:outline-none"
          />
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block font-semibold mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;

  