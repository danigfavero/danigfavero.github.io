import Link from 'next/link';
import Image from 'next/image';
import GeometricArt from './components/GeometricArt';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[80vh]">
                {/* Left Content */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative">
                  <div className="max-w-lg mx-auto xl:mx-0">
                    <div className="mb-6">
                      <p className="text-blue-600 font-bold mb-4 tracking-wide uppercase text-sm font-inter">
                        WELCOME
                      </p>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-sora">
                        Daniela Favero
                      </h1>
                      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 font-inter">
                        software engineer
                        <br />
                        bachelor of computer science
                      </p>
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src="/profile-photo.jpg"
                            alt="Daniela Favero"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-900 font-medium font-inter">she/her</p>
                          <p className="text-gray-600 text-sm font-inter">São Paulo, Brasil</p>
                        </div>
                        
                        {/* Typing Snoopy */}
                        <div className="flex-shrink-0">
                          <Link href="/chick" className="hover:scale-105 transition-transform duration-200" title="psst... click me 🐣">
                            <Image
                              src="/snoopy-laptop.png"
                              alt="Snoopy typing on laptop"
                              width={60}
                              height={60}
                              className="cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed text-justify font-inter">
                        currently focused on functional programming, domain-driven design and cloud computing. sometimes flirting with data engineering and machine learning.
                        <br /><br />
                        in my free time, I&apos;m always visiting coffee shops / patisseries, nerding out about urban planning and checking art exhibitions.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                          href="https://github.com/danigfavero"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label="GitHub"
                        >
                          <span className="text-sm font-inter">GitHub ↗</span>
                        </Link>
                        <Link
                          href="https://linkedin.com/in/danigfavero"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <span className="text-sm font-inter">LinkedIn ↗</span>
                        </Link>
                        <Link
                          href="http://lattes.cnpq.br/4380746598220062"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label="Lattes"
                        >
                          <span className="text-sm font-inter">Lattes ↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Right Geometric Art - Hidden on screens smaller than xl */}
            <div className="hidden xl:block h-full">
              <GeometricArt variant="sidebar" />
            </div>
          </div>
          
          {/* Geometric Art for smaller screens - shown at bottom */}
          <div className="xl:hidden py-8 sm:py-12">
            <div className="max-w-lg mx-auto">
              <GeometricArt variant="bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
