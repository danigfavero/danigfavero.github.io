import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostBySlug(id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-slate-300 hover:text-white font-medium transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article header */}
          <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-slate-700/50">
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full border border-slate-600/50 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {post.title}
              </h1>
              
              <div className="flex items-center text-sm text-slate-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
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
            </header>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
} 