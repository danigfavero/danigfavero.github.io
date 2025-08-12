import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

// Add metadata generation for better SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostBySlug(id);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  
  const post = getPostBySlug(id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-300 hover:text-white font-medium transition-colors font-inter"
            aria-label="Back to blog listing"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            back to blog
          </Link>

          {/* Article header */}
          <article className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700/50 mt-8">
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Post tags">
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
              
              <h1 className="text-4xl font-bold text-white mb-4 font-space-grotesk">
                {post.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-300 mb-6 font-inter" role="group" aria-label="Post metadata">
                <span>By {post.author}</span>
                <span className="mx-2" aria-hidden="true">•</span>
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