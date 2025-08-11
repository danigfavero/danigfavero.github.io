import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or markdown files
// For now, we'll use static data as an example
// This would typically come from a CMS or markdown files
// For now, we'll use static data as an example
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    content: `
      <p>Next.js 15 brings exciting new features that make building modern web applications easier and more efficient than ever before.</p>
      
      <h2>What's New in Next.js 15?</h2>
      <p>The latest version introduces several key improvements:</p>
      <ul>
        <li><strong>App Router:</strong> A new file-system based router that makes routing more intuitive</li>
        <li><strong>Server Components:</strong> React components that run on the server for better performance</li>
        <li><strong>Improved Performance:</strong> Faster builds and better runtime performance</li>
        <li><strong>Enhanced Developer Experience:</strong> Better error messages and debugging tools</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 15 project, run:</p>
      <pre><code>npx create-next-app@latest my-app --typescript --tailwind --app</code></pre>
      
      <p>This will set up a new project with the latest features and best practices.</p>
      
      <h2>Key Benefits</h2>
      <p>Next.js 15 makes it easier to build:</p>
      <ul>
        <li>Fast, SEO-friendly websites</li>
        <li>Scalable applications</li>
        <li>Modern user interfaces</li>
        <li>Performance-optimized experiences</li>
      </ul>
      
      <p>Whether you're building a personal blog, an e-commerce site, or a complex web application, Next.js 15 provides the tools you need to succeed.</p>
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    author: "Dani G. Favero"
  },
  {
    id: 2,
    title: "The Power of TypeScript in Modern Web Development",
    content: `
      <p>TypeScript has revolutionized how we write JavaScript applications, providing type safety and better developer experience.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript offers several advantages over plain JavaScript:</p>
      <ul>
        <li><strong>Type Safety:</strong> Catch errors at compile time instead of runtime</li>
        <li><strong>Better IDE Support:</strong> Enhanced autocomplete and refactoring tools</li>
        <li><strong>Improved Maintainability:</strong> Easier to understand and modify code</li>
        <li><strong>Team Collaboration:</strong> Better communication through type definitions</li>
      </ul>
      
      <h2>Getting Started with TypeScript</h2>
      <p>To add TypeScript to an existing project:</p>
      <pre><code>npm install --save-dev typescript @types/node</code></pre>
      
      <p>Then create a <code>tsconfig.json</code> file to configure the compiler.</p>
      
      <h2>TypeScript Best Practices</h2>
      <p>Some key practices to follow:</p>
      <ul>
        <li>Use strict mode for better type checking</li>
        <li>Define interfaces for complex objects</li>
        <li>Leverage union types for flexible APIs</li>
        <li>Use generics for reusable components</li>
      </ul>
    `,
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    author: "Dani G. Favero"
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    content: `
      <p>Node.js has become the go-to platform for building scalable and performant APIs. Let's explore the best practices.</p>
      
      <h2>Why Node.js for APIs?</h2>
      <p>Node.js excels at building APIs due to:</p>
      <ul>
        <li><strong>Event-driven Architecture:</strong> Handles concurrent requests efficiently</li>
        <li><strong>JavaScript Everywhere:</strong> Same language on frontend and backend</li>
        <li><strong>Rich Ecosystem:</strong> Extensive package ecosystem</li>
        <li><strong>Performance:</strong> Fast execution and low memory footprint</li>
      </ul>
      
      <h2>Essential Libraries</h2>
      <p>Key packages for building APIs:</p>
      <ul>
        <li><strong>Express.js:</strong> Minimal and flexible web framework</li>
        <li><strong>Joi:</strong> Schema validation library</li>
        <li><strong>Helmet:</strong> Security middleware</li>
        <li><strong>Morgan:</strong> HTTP request logger</li>
      </ul>
      
      <h2>API Design Principles</h2>
      <p>Follow these principles for better APIs:</p>
      <ul>
        <li>Use RESTful conventions</li>
        <li>Implement proper error handling</li>
        <li>Add authentication and authorization</li>
        <li>Include comprehensive logging</li>
        <li>Write thorough documentation</li>
      </ul>
    `,
    date: "2024-01-05",
    readTime: "8 min read",
    tags: ["Node.js", "API", "Backend"],
    author: "Dani G. Favero"
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === parseInt(id));
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article header */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
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
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
} 