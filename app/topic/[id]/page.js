'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function TopicPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const topicId = params.id;
  const videoId = searchParams.get('video');
  
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState({});
  const [expandedProblem, setExpandedProblem] = useState(null);

  // Demo video URL for all videos for now
  const demoVideoUrl = "https://youtu.be/KEs5UyBJ39g?si=-TTC35haxlMYS7_F";

  // All videos data
  const allVideos = {
    'arrays-1': {
      id: 'arrays-1',
      topicId: 'arrays',
      title: 'Find Second Largest Elemeent in Array',
      duration: '20:13',
      url: 'https://youtu.be/37E9ckMDdTk?si=qiaqRxD94dDfdIqf',
      description: 'Learn the fundamentals of arrays in data structures and their implementation.'
    },
    'arrays-2': {
      id: 'arrays-2',
      topicId: 'arrays',
      title: 'Rotation of Array',
      duration: '7:45',
      url: 'https://youtu.be/wvcQg43_V8U?si=RXvvA4oUgbhyuAHi',
      description: 'Understand 2D arrays and their applications.'
    },
    'arrays-3': {
      id: 'arrays-3',
      topicId: 'arrays',
      title: 'Multi-dimensional Arrays',
      duration: '18:30',
      url: 'https://youtu.be/CfqjAKN-AwI?si=x14P-efLboJgjE3Y',
      description: 'Explore 3D arrays and more complex array structures.'
    },
    'strings-1': {
      id: 'strings-1',
      topicId: 'strings',
      title: 'String Basics',
      duration: '14:10',
      url: 'https://youtu.be/4NGthO9F1Bo?si=Rm3poiTJDE6DxxZM',
      description: 'Understand string representation and basic string operations.'
    },
    'strings-2': {
      id: 'strings-2',
      topicId: 'strings',
      title: 'String Manipulation',
      duration: '16:25',
      url: 'https://youtu.be/kMRliZK2BU4?si=9YTrvOVI9Uj6_ynh',
      description: 'Learn various string manipulation techniques.'
    },
    'strings-3': {
      id: 'strings-3',
      topicId: 'strings',
      title: 'Pattern Matching Algorithms',
      duration: '20:15',
      url: demoVideoUrl,
      description: 'Explore algorithms for pattern matching in strings.'
    },
    'sorting-1': {
      id: 'sorting-1',
      topicId: 'sorting',
      title: 'Bubble Sort & Selection Sort',
      duration: '17:30',
      url: demoVideoUrl,
      description: 'Learn simple sorting algorithms and their implementations.'
    },
    'sorting-2': {
      id: 'sorting-2',
      topicId: 'sorting',
      title: 'Merge Sort',
      duration: '19:45',
      url: demoVideoUrl,
      description: 'Master the divide and conquer approach with merge sort.'
    },
    'sorting-3': {
      id: 'sorting-3',
      topicId: 'sorting',
      title: 'Quick Sort',
      duration: '22:10',
      url: demoVideoUrl,
      description: 'Learn about the quicksort algorithm and its efficiency.'
    },
    'hashing-1': {
      id: 'hashing-1',
      topicId: 'hashing',
      title: 'Hash Functions',
      duration: '16:20',
      url: demoVideoUrl,
      description: 'Understand how hash functions work and their properties.'
    },
    'hashing-2': {
      id: 'hashing-2',
      topicId: 'hashing',
      title: 'Hash Tables',
      duration: '14:45',
      url: demoVideoUrl,
      description: 'Learn about hash table implementation and collision resolution.'
    },
    'hashing-3': {
      id: 'hashing-3',
      topicId: 'hashing',
      title: 'Hash Applications',
      duration: '18:10',
      url: demoVideoUrl,
      description: 'Explore real-world applications of hashing in programming.'
    },
  };

  // Sample videos for each topic
  const topicVideos = {
    'arrays': [
      allVideos['arrays-1'],
      allVideos['arrays-2'],
      allVideos['arrays-3']
    ],
    'strings': [
      allVideos['strings-1'],
      allVideos['strings-2'],
      allVideos['strings-3']
    ],
    'sorting': [
      allVideos['sorting-1'],
      allVideos['sorting-2'],
      allVideos['sorting-3']
    ],
    'hashing': [
      allVideos['hashing-1'],
      allVideos['hashing-2'],
      allVideos['hashing-3']
    ],
    // Additional topic videos would be defined here
  };

  // Video practice problems
  const videoPracticeProblems = {
    'arrays-1': [
      {
        id: 'arrays-1-easy',
        difficulty: 'Easy',
        title: 'Max Element in Array',
        problem: 'Write a function to find the maximum element in an array.',
        code: `function findMax(arr) {
  if (arr.length === 0) return null;
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}`
      },
      {
        id: 'arrays-1-medium',
        difficulty: 'Medium',
        title: 'Reverse an Array',
        problem: 'Write a function to reverse an array in-place.',
        code: `function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr;
}`
      }
    ],
    'arrays-2': [
      {
        id: 'arrays-2-easy',
        difficulty: 'Easy',
        title: 'Remove Element',
        problem: 'Write a function to remove all occurrences of a given value from an array.',
        code: `function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  
  // Truncate the array
  arr.length = i;
  return arr;
}`
      },
      {
        id: 'arrays-2-hard',
        difficulty: 'Hard',
        title: 'Rotate Array',
        problem: 'Write a function to rotate an array to the right by k steps.',
        code: `function rotateArray(arr, k) {
  k = k % arr.length;
  
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  
  return arr;
  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}`
      }
    ],
    'arrays-3': [
      {
        id: 'arrays-3-medium',
        difficulty: 'Medium',
        title: 'Matrix Diagonal Sum',
        problem: 'Given a square matrix, return the sum of the matrix diagonals.',
        code: `function diagonalSum(mat) {
  const n = mat.length;
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    // Primary diagonal
    sum += mat[i][i];
    
    // Secondary diagonal (if not already counted)
    if (i !== n - i - 1) {
      sum += mat[i][n - i - 1];
    }
  }
  
  return sum;
}`
      }
    ]
  };

  // Default practice problems for videos without specific ones
  const defaultProblems = [
    {
      id: 'easy',
      difficulty: 'Easy',
      title: 'Sample Easy Problem',
      problem: 'This is a sample easy problem statement for this topic.',
      code: `function solveProblem(input) {
  // Easy solution
  return input;
}`
    },
    {
      id: 'medium',
      difficulty: 'Medium',
      title: 'Sample Medium Problem',
      problem: 'This is a sample medium problem statement for this topic.',
      code: `function solveProblem(input) {
  // Medium solution
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}`
    },
    {
      id: 'hard',
      difficulty: 'Hard',
      title: 'Sample Hard Problem',
      problem: 'This is a sample hard problem statement for this topic.',
      code: `function solveProblem(input) {
  // Hard solution
  if (input.length <= 1) return input;
  
  const mid = Math.floor(input.length / 2);
  const left = solveProblem(input.slice(0, mid));
  const right = solveProblem(input.slice(mid));
  
  return merge(left, right);
  
  function merge(left, right) {
    // Implement merge logic
    return [...left, ...right].sort();
  }
}`
    }
  ];

  // Map of topics with their display information
  const topicsMap = {
    'arrays': {
      title: 'Arrays',
      description: 'Master the fundamentals of arrays and array operations.',
      longDescription: 'Arrays are one of the most fundamental data structures in computer science. They store elements of the same type in contiguous memory locations, allowing for constant-time access to individual elements using their indices. This section covers array operations, traversal, manipulation, and common array-based algorithms.',
    },
    'strings': {
      title: 'Strings',
      description: 'Learn string manipulation algorithms and techniques.',
      longDescription: 'Strings are sequences of characters that represent text. This section covers string manipulation, pattern matching, and common string algorithms like string searching, substring operations, and string transformations.',
    },
    'sorting': {
      title: 'Sorting',
      description: 'Explore various sorting algorithms and their implementations.',
      longDescription: 'Sorting is the process of arranging elements in a specific order (usually ascending or descending). This section covers popular sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort, along with their time and space complexity analysis.',
    },
    'searching': {
      title: 'Searching',
      description: 'Discover efficient searching algorithms and techniques.',
      longDescription: 'Searching algorithms are used to find elements in a data structure. This section covers linear search, binary search, and more advanced searching techniques, along with their applications and complexity analysis.',
    },
    'hashing': {
      title: 'Hashing',
      description: 'Understand hash functions and hash table implementations.',
      longDescription: 'Hashing is a technique used to map data of arbitrary size to fixed-size values. This section covers hash functions, collision resolution strategies, and hash table implementations for efficient data retrieval.',
    },
    'linked-list': {
      title: 'Linked List',
      description: 'Explore linked lists and their variations.',
      longDescription: 'Linked lists are linear data structures where elements are stored in nodes, and each node points to the next node in the sequence. This section covers singly linked lists, doubly linked lists, circular linked lists, and common operations and algorithms on linked lists.',
    },
    'stack': {
      title: 'Stack',
      description: 'Learn about stack data structure and its applications.',
      longDescription: 'A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This section covers stack implementations, operations, and applications like expression evaluation, backtracking, and function call management.',
    },
    'queue': {
      title: 'Queue',
      description: 'Master queue data structure and its implementations.',
      longDescription: 'A queue is a linear data structure that follows the First In First Out (FIFO) principle. This section covers queue implementations, operations, and variations like circular queues, priority queues, and deques.',
    },
    'tree': {
      title: 'Tree',
      description: 'Discover tree data structures and traversal algorithms.',
      longDescription: 'Trees are hierarchical data structures with a root value and subtrees of children with a parent node. This section covers binary trees, binary search trees, AVL trees, B-trees, and common tree traversal algorithms like inorder, preorder, and postorder traversals.',
    },
  };

  useEffect(() => {
    if (topicId && topicsMap[topicId]) {
      setCurrentTopic(topicsMap[topicId]);
      
      // Initialize from localStorage if available
      const savedProgress = localStorage.getItem(`${topicId}-videos`);
      if (savedProgress) {
        setCompletedVideos(JSON.parse(savedProgress));
      }
      
      // Set current video if videoId is provided
      if (videoId && allVideos[videoId]) {
        setCurrentVideo(allVideos[videoId]);
      } else if (topicVideos[topicId] && topicVideos[topicId].length > 0) {
        // Default to first video if no specific video selected
        setCurrentVideo(topicVideos[topicId][0]);
      }
    }
  }, [topicId, videoId]);

  const toggleVideoCompletion = (videoId) => {
    setCompletedVideos(prev => {
      const updated = { ...prev, [videoId]: !prev[videoId] };
      // Save to localStorage
      localStorage.setItem(`${topicId}-videos`, JSON.stringify(updated));
      return updated;
    });
  };

  const toggleProblem = (problemId) => {
    setExpandedProblem(expandedProblem === problemId ? null : problemId);
  };

  if (!currentTopic || !currentVideo) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  // Extract YouTube video ID from URL
  const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const youtubeId = getYoutubeId(currentVideo.url);
  const currentVideos = topicVideos[topicId] || [];
  const problems = videoPracticeProblems[currentVideo.id] || defaultProblems;
  const isCompleted = completedVideos[currentVideo.id] || false;

  // Function to generate href for videos to prevent page jump
  const getVideoLink = (videoId) => {
    return {
      pathname: `/topic/${topicId}`,
      query: { video: videoId }
    };
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-16">
      {/* Topic Header */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{currentTopic.title}</h1>
          <p className="text-xl text-gray-300">{currentTopic.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Video and Problems */}
          <div className="lg:w-3/4">
            {/* Current Video Section */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl mb-8">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{currentVideo.title}</h2>
                  <p className="text-gray-400">{currentVideo.duration}</p>
                </div>
                <button 
                  onClick={() => toggleVideoCompletion(currentVideo.id)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-500'}`}
                >
                  {isCompleted && <span className="text-white">✓</span>}
                </button>
              </div>
              <div>
                <iframe 
                  className="w-full h-[60vh]"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">About this Video</h3>
                <p className="text-gray-300">{currentVideo.description}</p>
              </div>
            </div>

            {/* Practice Problems */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Practice Problems</h3>
              <div className="space-y-4">
                {/* Always show Easy, Medium, Hard problems */}
                {['Easy', 'Medium', 'Hard'].map((difficulty) => {
                  // Find a problem with this difficulty level in the video's problems
                  const problem = problems.find(p => p.difficulty === difficulty) || 
                    (difficulty === 'Easy' ? defaultProblems[0] : 
                    difficulty === 'Medium' ? defaultProblems[1] : defaultProblems[2]);
                  
                  return (
                    <div key={problem.id} className="bg-gray-800 rounded-xl overflow-hidden">
                      <div 
                        className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-700"
                        onClick={() => toggleProblem(problem.id)}
                      >
                        <div className="flex items-center">
                          <div className={`mr-3 px-3 py-1 text-sm rounded-full ${
                            difficulty === 'Easy' 
                              ? 'bg-green-900 text-green-300' 
                              : difficulty === 'Medium'
                                ? 'bg-yellow-900 text-yellow-300'
                                : 'bg-red-900 text-red-300'
                          }`}>
                            {difficulty}
                          </div>
                          <h4 className="text-lg font-semibold">{problem.title}</h4>
                        </div>
                        <div className="text-gray-400">
                          {expandedProblem === problem.id ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {expandedProblem === problem.id && (
                        <div className="border-t border-gray-700">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-900">
                              <h5 className="text-lg font-semibold mb-2">Problem Statement</h5>
                              <p className="text-gray-300">{problem.problem}</p>
                            </div>
                            <div className="p-4 bg-gray-900 font-mono text-sm overflow-auto">
                              <h5 className="text-lg font-semibold mb-2 font-sans">Solution</h5>
                              <pre className="text-gray-300 whitespace-pre">{problem.code}</pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Other Videos in Topic */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900 rounded-xl p-5 sticky top-20">
              <h3 className="text-lg font-semibold mb-4">More {currentTopic.title} Videos</h3>
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {currentVideos.map(video => {
                  const isActive = video.id === currentVideo.id;
                  const isVideoCompleted = completedVideos[video.id] || false;
                  
                  return (
                    <Link 
                      key={video.id} 
                      href={getVideoLink(video.id)}
                      scroll={false}
                      className={`block p-3 rounded-md ${isActive ? 'bg-blue-900' : 'hover:bg-gray-800'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{video.title}</h4>
                          <p className="text-gray-400 text-xs">{video.duration}</p>
                        </div>
                        {isVideoCompleted && (
                          <span className="text-green-500">✓</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <Link
                  href="/topic"
                  className="block text-center py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md transition duration-200"
                >
                  View All Videos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telegram Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Join our Telegram Community</h3>
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