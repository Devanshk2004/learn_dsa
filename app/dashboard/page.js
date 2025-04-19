'use client';

import { useAuth } from '@/app/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin');
    }
  }, [user, loading, router]);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Welcome, {user.username}!</h1>
          
          <div className="border-t border-gray-800 pt-6 mt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Topics Completed</h3>
                <p className="text-3xl font-bold text-blue-500">0/9</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Exercises Solved</h3>
                <p className="text-3xl font-bold text-green-500">0</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Learning Streak</h3>
                <p className="text-3xl font-bold text-yellow-500">1 day</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 mt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recommended Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Start with Arrays</h3>
                <p className="text-gray-400 mb-4">Master the fundamentals of arrays and array operations.</p>
                <a href="/topic/arrays" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Begin Learning</a>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Complete Your Profile</h3>
                <p className="text-gray-400 mb-4">Add more details to your profile to track your progress better.</p>
                <a href="/profile" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Update Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 