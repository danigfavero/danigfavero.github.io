import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const blogPosts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto mb-8 px-6 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sora">
            my thoughts
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-inter">
            whatever I&apos;m thinking, coding, or learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6 sm:space-y-8" role="list" aria-label="Blog posts">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg p-6 sm:p-8 transition-all duration-300 border border-gray-200" role="listitem">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3" role="list" aria-label="Post tags">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3 font-inter" role="group" aria-label="Post metadata">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2" aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 transition-colors hover:text-blue-700 font-inter">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-justify font-inter">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors font-inter"
                  aria-label={`Read more about ${post.title}`}
                >
                  read more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
          
          {blogPosts.length === 0 && (
            <div className="text-center" role="status" aria-live="polite">
              <p className="text-gray-600 font-inter">
                no posts yet. check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 