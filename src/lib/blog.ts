import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  content: string;
  slug: string;
}

export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  slug: string;
}

export function getPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown content to HTML
    const processedContent = remark()
      .use(html)
      .processSync(content)
      .toString();

    return {
      id: slug,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      author: data.author,
      content: processedContent,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        readTime: post.readTime,
        tags: post.tags,
        author: post.author,
      };
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
} 