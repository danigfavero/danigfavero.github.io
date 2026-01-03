import Link from 'next/link';
import Image from 'next/image';
import GeometricArt from './components/GeometricArt';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="max-w-6xl 2xl:max-w-[90%] mx-auto">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 2xl:gap-16 min-h-[80vh] 2xl:min-h-[70vh] 2xl:pt-16">
                {/* Left Content */}
                <div className="p-6 sm:p-8 lg:p-12 2xl:p-16 flex flex-col 2xl:justify-start 2xl:pt-20 relative">
                  <div className="max-w-lg 2xl:max-w-2xl mx-auto xl:mx-0">
                    <div className="mb-6 2xl:mb-8">
                      <p className="text-blue-600 font-bold mb-4 2xl:mb-6 tracking-wide uppercase text-sm 2xl:text-base font-inter">
                        WELCOME
                      </p>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 2xl:mb-8 leading-tight font-sora">
                        Daniela Favero
                      </h1>
                      <p className="text-lg sm:text-xl 2xl:text-2xl text-gray-600 leading-relaxed mb-8 2xl:mb-10 font-inter">
                        software engineer
                        <br />
                        bachelor of computer science
                      </p>
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 2xl:space-x-6">
                        <div className="w-16 h-16 2xl:w-20 2xl:h-20 rounded-full overflow-hidden flex-shrink-0">
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
                          <p className="text-gray-900 font-medium 2xl:text-lg font-inter">she/her</p>
                          <p className="text-gray-600 text-sm 2xl:text-base font-inter">São Paulo, Brasil</p>
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
                      
                      <p className="text-gray-600 text-sm 2xl:text-base leading-relaxed text-justify font-inter">
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
                          <span className="text-sm 2xl:text-base font-inter">GitHub ↗</span>
                        </Link>
                        <Link
                          href="https://linkedin.com/in/danigfavero"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <span className="text-sm 2xl:text-base font-inter">LinkedIn ↗</span>
                        </Link>
                        <Link
                          href="http://lattes.cnpq.br/4380746598220062"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label="Lattes"
                        >
                          <span className="text-sm 2xl:text-base font-inter">Lattes ↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Right Geometric Art - Hidden on screens smaller than xl */}
            <div className="hidden xl:flex h-full 2xl:items-start 2xl:pt-20 items-center justify-center">
              <div className="w-full max-w-[500px] 2xl:max-w-[700px]">
                <GeometricArt variant="sidebar" />
              </div>
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
