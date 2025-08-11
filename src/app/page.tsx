export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hi, I&apos;m Dani! This is my personal website built with Next.js and deployed on GitHub Pages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Check out my latest work and contributions</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Skills</h3>
              <p className="text-gray-600 dark:text-gray-300">Technologies and tools I work with</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contact</h3>
              <p className="text-gray-600 dark:text-gray-300">Get in touch for collaborations</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              This site is automatically deployed from my GitHub repository using GitHub Actions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/danigfavero"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="https://danigfavero.github.io"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
