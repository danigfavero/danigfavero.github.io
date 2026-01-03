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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back to blog link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors font-inter"
            aria-label="Back to blog listing"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            back to blog
          </Link>

          {/* Article header */}
          <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-100 transition-colors mt-6 sm:mt-8 overflow-hidden">
            <header className="mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Post tags">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                    role="listitem"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 font-space-grotesk break-words hyphens-auto leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 font-inter gap-1" role="group" aria-label="Post metadata">
                <span>By <span className="text-blue-700 font-medium">{post.author}</span></span>
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
              className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-justify prose-headings:break-words prose-headings:hyphens-auto prose-p:break-words prose-p:hyphens-auto prose-pre:overflow-x-auto prose-pre:whitespace-pre-wrap prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-headings:text-gray-900"
              style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
} 