// app/navbar.tsx
"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-black transition"
            >
              MyApp
            </Link>
          </div>

          {/* Nav Links (optional) */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-black font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black font-medium"
            >
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
