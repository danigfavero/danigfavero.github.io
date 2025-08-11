import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const blogPosts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            my thoughts
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            whatever I&apos;m thinking, coding, or learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full border border-slate-600/50 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-slate-400 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 transition-colors hover:text-slate-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-300 leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-slate-300 hover:text-white font-medium transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                No posts yet
              </h3>
              <p className="text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                I&apos;m working on some great content. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 