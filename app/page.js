import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const dsaTopics = [
    {
      id: 'arrays',
      title: 'Arrays',
      description: 'Master the fundamentals of arrays and array operations.',
      image: '/images/Arrays.jpg',
    },
    {
      id: 'strings',
      title: 'Strings',
      description: 'Learn string manipulation algorithms and techniques.',
      image: '/images/Strings.png',
    },
    {
      id: 'sorting',
      title: 'Sorting',
      description: 'Explore various sorting algorithms and their implementations.',
      image: '/images/Sorting.jpg',
    },
    {
      id: 'searching',
      title: 'Searching',
      description: 'Discover efficient searching algorithms and techniques.',
      image: '/images/searching.jpg',
    },
    {
      id: 'hashing',
      title: 'Hashing',
      description: 'Understand hash functions and hash table implementations.',
      image: '/images/hashing.png',
    },
    {
      id: 'linked-list',
      title: 'Linked List',
      description: 'Explore linked lists and their variations.',
      image: '/images/linked-list.jpg',
    },
    {
      id: 'stack',
      title: 'Stack',
      description: 'Learn about stack data structure and its applications.',
      image: '/images/stack.jpg',
    },
    {
      id: 'queue',
      title: 'Queue',
      description: 'Master queue data structure and its implementations.',
      image: '/images/queue.jpg',
    },
    {
      id: 'tree',
      title: 'Tree',
      description: 'Discover tree data structures and traversal algorithms.',
      image: '/images/tree.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Master Data Structures & Algorithms</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Elevate your coding skills with our comprehensive DSA courses designed for everyone from beginners to advanced programmers.
          </p>
          <Link 
            href="/auth/signup" 
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-200 transition duration-200"
          >
            Start Learning Now
          </Link>
        </div>
      </div>

      {/* DSA Topics Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Explore DSA Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dsaTopics.map((topic) => (
            <Link 
              key={topic.id}
              href={`/topic/${topic.id}`}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${topic.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Fallback color and pattern if image doesn't load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 z-0"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-gray-400">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to become a DSA expert?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of students who have mastered DSA concepts and aced their technical interviews.
          </p>
          <Link 
            href="/auth/signup" 
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-200 transition duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
