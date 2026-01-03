'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-50 pt-4" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-16 px-6 sm:px-8 lg:px-12">
            <Link href="/" className="flex items-center" aria-label="Home page">
            <Image 
              src="/favicon.ico" 
              alt="Site logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
          </Link>
          
          <div className="flex space-x-6 sm:space-x-8 lg:space-x-16" role="navigation" aria-label="Site sections">
            <Link 
              href="/blog" 
              className={`${
                pathname === '/blog' 
                  ? 'text-black font-bold' 
                  : 'text-black hover:text-gray-700'
              } transition-colors font-bold font-poppins text-sm sm:text-base`}
              aria-current={pathname === '/blog' ? 'page' : undefined}
            >
              Blog
            </Link>
            <Link 
              href="https://bccdev.ime.usp.br/tccs/2021/danifavero/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors font-bold font-poppins flex items-center gap-1 text-sm sm:text-base"
              aria-label="Academic research (opens in new tab)"
            >
              Research ↗
            </Link>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
} 