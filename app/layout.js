import { Inter } from 'next/font/google';
import './globals.css';
import Link from "next/link";
import { AuthProvider } from "./contexts/AuthContext";
import UserNav from "./components/UserNav";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Learn DSA',
  description: 'Master Data Structures and Algorithms',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <header className="sticky top-0 z-50 bg-black text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold">Strike DSA</Link>
                </div>
                <div className="hidden md:flex space-x-8">
                  <Link href="/" className="hover:text-gray-300">Home</Link>
                  <Link href="/topic" className="hover:text-gray-300">All Videos</Link>
                  <Link href="#" className="hover:text-gray-300">Resources</Link>
                  <Link href="#" className="hover:text-gray-300">About</Link>
                </div>
                <UserNav />
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center">© 2024 Strike DSA. All rights reserved.</p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
