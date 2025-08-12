import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const blogPosts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-space-grotesk">
            my thoughts
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            whatever I&apos;m thinking, coding, or learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8" role="list" aria-label="Blog posts">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50" role="listitem">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3" role="list" aria-label="Post tags">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 text-gray-200 text-sm rounded-full border border-gray-600/50 backdrop-blur-sm"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-3 font-inter" role="group" aria-label="Post metadata">
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

                <h2 className="text-2xl font-bold text-white mb-3 transition-colors hover:text-gray-200 font-inter">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-justify font-inter">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-gray-300 hover:text-white font-medium transition-colors font-inter"
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
              <p className="text-gray-300 font-inter">
                no posts yet. check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 