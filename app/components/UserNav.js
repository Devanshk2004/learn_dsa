'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function UserNav() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <Link 
          href="/auth/signin" 
          className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition duration-200"
        >
          Sign In
        </Link>
        <Link 
          href="/auth/signup" 
          className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition duration-200"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200"
      >
        <span className="font-medium">{user.username}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link 
              href="/dashboard" 
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setShowDropdown(false)}
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 