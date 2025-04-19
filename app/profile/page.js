'use client';

import { useAuth } from '@/app/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    bio: '',
    level: 'beginner',
  });
  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin');
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated! (This would save to the database in a real app)');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Your Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">{user.username}</h2>
                  <p className="text-gray-400">{user.email}</p>
                  
                  <div className="mt-6 w-full">
                    <div className="border-t border-gray-700 pt-4">
                      <h3 className="text-lg font-medium text-white mb-2">Member Since</h3>
                      <p className="text-gray-400">July 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">Edit Profile</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-1">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-400 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        rows="4"
                        value={formData.bio}
                        onChange={handleChange}
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us a bit about yourself"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="level" className="block text-sm font-medium text-gray-400 mb-1">
                        Programming Level
                      </label>
                      <select
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 