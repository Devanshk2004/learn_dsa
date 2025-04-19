'use client';

import Link from 'next/link';

export default function TopicsPage() {
  // All videos across different topics
  const allVideos = [
    {
      id: 'arrays-1',
      topicId: 'arrays',
      title: 'Introduction to Arrays',
      duration: '15:20',
      thumbnail: '/images/arrays.jpg',
      description: 'Learn the basics of arrays and their importance in programming.'
    },
    {
      id: 'arrays-2',
      topicId: 'arrays',
      title: 'Array Operations',
      duration: '12:45',
      thumbnail: '/images/arrays.jpg',
      description: 'Master common array operations like insertion, deletion, and traversal.'
    },
    {
      id: 'strings-1',
      topicId: 'strings',
      title: 'String Basics',
      duration: '14:10',
      thumbnail: '/images/strings.jpg',
      description: 'Understand string representation and basic string operations.'
    },
    {
      id: 'sorting-1',
      topicId: 'sorting',
      title: 'Bubble Sort & Selection Sort',
      duration: '17:30',
      thumbnail: '/images/sorting.jpg',
      description: 'Learn simple sorting algorithms and their implementations.'
    },
    {
      id: 'searching-1',
      topicId: 'searching',
      title: 'Linear Search',
      duration: '10:15',
      thumbnail: '/images/searching.jpg',
      description: 'Master the simplest searching algorithm and its applications.'
    },
    {
      id: 'hashing-1',
      topicId: 'hashing',
      title: 'Hash Functions',
      duration: '16:20',
      thumbnail: '/images/hashing.jpg',
      description: 'Understand how hash functions work and their properties.'
    },
    {
      id: 'linked-list-1',
      topicId: 'linked-list',
      title: 'Singly Linked Lists',
      duration: '16:40',
      thumbnail: '/images/linked-list.jpg',
      description: 'Learn about singly linked lists and their operations.'
    },
    {
      id: 'stack-1',
      topicId: 'stack',
      title: 'Stack Basics',
      duration: '12:30',
      thumbnail: '/images/stack.jpg',
      description: 'Understand the stack data structure and its LIFO property.'
    },
    {
      id: 'queue-1',
      topicId: 'queue',
      title: 'Queue Basics',
      duration: '13:25',
      thumbnail: '/images/queue.jpg',
      description: 'Learn about queues and their FIFO property.'
    },
    {
      id: 'tree-1',
      topicId: 'tree',
      title: 'Binary Trees',
      duration: '17:40',
      thumbnail: '/images/tree.jpg',
      description: 'Understand binary trees and their representations.'
    },
    {
      id: 'arrays-3',
      topicId: 'arrays',
      title: 'Multi-dimensional Arrays',
      duration: '18:30',
      thumbnail: '/images/arrays.jpg',
      description: 'Explore 2D and 3D arrays and their applications.'
    },
    {
      id: 'strings-2',
      topicId: 'strings',
      title: 'String Manipulation',
      duration: '16:25',
      thumbnail: '/images/strings.jpg',
      description: 'Learn various string manipulation techniques.'
    },
  ];

  // Topic map for displaying topic names
  const topicMap = {
    'arrays': 'Arrays',
    'strings': 'Strings',
    'sorting': 'Sorting',
    'searching': 'Searching',
    'hashing': 'Hashing',
    'linked-list': 'Linked List',
    'stack': 'Stack',
    'queue': 'Queue',
    'tree': 'Tree',
  };

  // Get only the first two rows (6 videos)
  const displayedVideos = allVideos.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-950 pb-16">
      {/* Topic Header */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-white">All DSA Videos</h1>
          <p className="text-xl text-gray-300">Browse our comprehensive collection of DSA video lectures</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVideos.map(video => (
            <Link 
              key={video.id}
              href={`/topic/${video.topicId}?video=${video.id}`}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="h-40 relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${video.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Fallback color and pattern if image doesn't load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 z-0"></div>
                  
                  {/* Topic label */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                      {topicMap[video.topicId]}
                    </span>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 z-10">
                    <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Telegram Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Join our Telegram Community</h3>
            <p className="text-gray-300">Get additional resources, updates, and connect with other learners</p>
          </div>
          <a 
            href="https://t.me/strikeDSA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-200 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.131c-.14.63-.306 3.354-.633 6.397-.16 1.495-.412 2.809-.525 3.124-.24.668-.721.668-1.08.223-.613-.763-1.91-2.083-3.019-3.248.758-.674 1.657-1.526 2.342-2.439.153-.205.24-.327-.025-.522-.287-.21-4.054-2.728-4.217-2.862-.163-.134-.45-.15-.643.042-1.437 1.433-3.343 3.902-3.79 4.641-.288.478-.624.371-.624.371l-2.016-.652s-.49-.21-.541-.666c-.05-.456.417-.702.417-.702l7.905-3.539c.38-.166 1.678-.732 1.678-.732s.595-.254.546.32z" />
            </svg>
            Join Telegram
          </a>
        </div>
      </div>
    </div>
  );
} 