# Blog Guide

This guide explains how to add new blog posts to your GitHub Pages site.

## Adding New Blog Posts

Currently, blog posts are stored as static data in the `src/app/blog/[id]/page.tsx` file. To add a new post:

1. **Edit the blog posts array** in `src/app/blog/[id]/page.tsx`
2. **Add a new entry** to the `blogPosts` array with:
   - `id`: Unique identifier (increment from the last one)
   - `title`: Post title
   - `content`: HTML content of the post
   - `date`: Publication date (YYYY-MM-DD format)
   - `readTime`: Estimated reading time
   - `tags`: Array of relevant tags
   - `author`: Your name

3. **Update the blog listing** in `src/app/blog/page.tsx` to include the new post in the `blogPosts` array

## Example Blog Post Structure

```typescript
{
  id: 4,
  title: "Your New Blog Post Title",
  content: `
    <p>Your blog post content goes here. You can use HTML tags for formatting.</p>
    
    <h2>Section Heading</h2>
    <p>More content...</p>
    
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  `,
  date: "2024-01-20",
  readTime: "6 min read",
  tags: ["Tag1", "Tag2"],
  author: "Dani G. Favero"
}
```

## Future Improvements

For a more scalable solution, consider:

1. **Markdown files**: Store posts as `.md` files in a `posts/` directory
2. **CMS integration**: Use a headless CMS like Contentful or Strapi
3. **Database**: Store posts in a database with an admin interface
4. **Git-based CMS**: Use tools like Netlify CMS or Forestry

## Styling

Blog posts use custom CSS classes defined in `src/app/globals.css`. The `.prose` class provides consistent typography and spacing for blog content.

## Deployment

After adding new posts, commit and push your changes. The site will automatically rebuild and deploy through GitHub Actions. 