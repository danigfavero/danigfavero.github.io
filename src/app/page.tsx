import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/profile-photo.jpg"
                alt="Daniela Favero"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Daniela Favero
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
              she/her
              <br />
              hi there! I&apos;m a brazilian software engineer, with a bachelor&apos;s degree in computer science.
              technology can thrive along with accountability and empathy, all it takes is for us to be aware of it.
              check out my latest thoughts and projects on my <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">blog</Link> and feel free to reach out to me!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700/50">
              <div className="w-20 h-20 mx-auto mb-6">
                <Image
                  src="/snoopy-laptop.png"
                  alt="Snoopy at laptop"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                software engineering
              </h2>
              <p className="text-gray-300 text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                currently focused on functional programming, domain-driven design and cloud computing. sometimes flirting with data engineering and machine learning.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700/50">
              <div className="w-20 h-20 mx-auto mb-6">
                <Image
                  src="/snoopy-pilot.png"
                  alt="Snoopy as pilot"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                beyond code
              </h2>
              <p className="text-gray-300 text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                when I&apos;m not coding, you&apos;ll find me exploring coffee shops and patisseries, studying urban planning or diving into art exhibitions.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://github.com/danigfavero"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-10 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border border-gray-500 hover:border-gray-400 flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>github</span>
              <span>↗</span>
            </Link>
            <Link
              href="https://linkedin.com/in/danigfavero"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-10 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border border-gray-500 hover:border-gray-400 flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>linkedin</span>
              <span>↗</span>
            </Link>
            <Link
              href="http://lattes.cnpq.br/4380746598220062"
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-10 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border border-gray-500 hover:border-gray-400 flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>lattes</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
