'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            home
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              href="/blog" 
              className={`${
                pathname === '/blog' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              } transition-colors pb-1`}
            >
              blog
            </Link>
            <Link 
              href="https://bccdev.ime.usp.br/tccs/2021/danifavero/" 
              className={`${
                pathname === 'https://bccdev.ime.usp.br/tccs/2021/danifavero/' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              } transition-colors pb-1`}
            >
              academic research
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 