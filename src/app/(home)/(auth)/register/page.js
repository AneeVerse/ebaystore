'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ firstName, lastName, email, password, agreedToTerms });
  };

  return (
    <main className="min-h-screen flex">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#4338CA] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/login/bj1hg05g80241.jpg"
            alt="Desert at night"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[#4338CA]/30 mix-blend-multiply" />
        </div>
        
        {/* Logo and Back Button */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <div className="text-2xl font-bold">ANEEVERSE</div>
          <Link 
            href="/"
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm hover:bg-white/20 transition-colors"
          >
            Back to website →
          </Link>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-20 left-8 right-8">
          <h2 className="text-4xl font-light mb-4">
            Capturing Moments,<br />
            Creating Memories
          </h2>
          <div className="flex gap-2 mt-8">
            <div className="w-8 h-1 rounded-full bg-white/30" />
            <div className="w-8 h-1 rounded-full bg-white/30" />
            <div className="w-8 h-1 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 bg-[#1F1F1F] p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-semibold text-white mb-2">Create an account</h1>
          <p className="text-gray-400 mb-8">
            Already have an account?{' '}
            <Link href="/login" className="text-[#8B5CF6] hover:underline">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#8B5CF6]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#8B5CF6]"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#8B5CF6]"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] text-white border border-[#3D3D3D] focus:outline-none focus:border-[#8B5CF6]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 text-[#8B5CF6] focus:ring-[#8B5CF6] bg-[#2D2D2D]"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <Link href="/terms" className="text-[#8B5CF6] hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#8B5CF6] text-white font-medium hover:bg-[#7C3AED] transition-colors"
            >
              Create account
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-[#1F1F1F]">Or register with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#3D3D3D] text-white hover:bg-[#2D2D2D] transition-colors"
              >
                <FcGoogle size={20} />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#3D3D3D] text-white hover:bg-[#2D2D2D] transition-colors"
              >
                <FaApple size={20} />
                <span>Apple</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 