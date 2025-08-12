'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white transition-colors font-inter" aria-label="Home page">
            home
          </Link>
          
          <div className="flex space-x-8" role="navigation" aria-label="Site sections">
            <Link 
              href="/blog" 
              className={`${
                pathname === '/blog' 
                  ? 'text-gray-700 dark:text-gray-300 border-b-2 border-gray-700 dark:border-gray-300' 
                  : 'text-gray-600 dark:text-gray-300'
              } transition-colors pb-1 font-inter`}
              aria-current={pathname === '/blog' ? 'page' : undefined}
            >
              blog
            </Link>
            <Link 
              href="https://bccdev.ime.usp.br/tccs/2021/danifavero/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 transition-colors pb-1 font-inter"
              aria-label="Academic research (opens in new tab)"
            >
              academic research
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 