# Blog Guide

This guide explains how to manage blog posts in your website.

## Overview

Blog posts are now stored as individual markdown files in the `src/posts/` directory. Each post has frontmatter metadata and markdown content.

## File Structure

```
src/posts/
├── getting-started-with-nextjs-15.md
├── power-of-typescript.md
└── building-scalable-apis-nodejs.md
```

## Creating a New Blog Post

### Option 1: Using the convenience script (Recommended)

```bash
npm run new-post "Your Post Title"
```

This will:
- Create a new markdown file with the correct slug
- Add current date automatically
- Include a template with proper frontmatter structure
- Place the file in the correct directory

### Option 2: Manual creation

1. Create a new `.md` file in `src/posts/`
2. Use the filename as the slug (e.g., `my-awesome-post.md`)
3. Add the required frontmatter at the top of the file

## Frontmatter Structure

Each blog post must start with frontmatter (YAML between `---` markers):

```yaml
---
title: "Your Post Title"
excerpt: "Brief description of your post"
date: "2024-01-15"
readTime: "5 min read"
tags: ["Tag1", "Tag2"]
author: "Dani G. Favero"
---
```

### Required Fields

- `title`: The post title (displayed in the UI)
- `excerpt`: Brief description shown in the blog list
- `date`: Publication date (YYYY-MM-DD format)
- `readTime`: Estimated reading time
- `tags`: Array of tags for categorization
- `author`: Author name

## Writing Content

After the frontmatter, write your content using standard markdown:

```markdown
# Main Heading

## Subheading

Regular paragraph text.

- List item 1
- List item 2

**Bold text** and *italic text*

```bash
# Code blocks
npm install package-name
```

[Link text](https://example.com)
```

## Markdown Features Supported

- Headings (H1-H6)
- Paragraphs and line breaks
- Lists (ordered and unordered)
- **Bold** and *italic* text
- `Inline code`
- Code blocks with syntax highlighting
- Links
- Images
- Blockquotes

## Adding Images

Place images in the `public/` directory and reference them:

```markdown
![Alt text](/image-name.jpg)
```

## Building and Deployment

1. **Development**: Run `npm run dev` to see changes locally
2. **Build**: Run `npm run build` to generate static files
3. **Deploy**: Run `npm run deploy` to deploy to GitHub Pages

## File Naming Conventions

- Use lowercase letters, numbers, and hyphens only
- Avoid spaces and special characters
- Keep filenames descriptive but concise
- The filename becomes the URL slug

## Examples

### Good filenames:
- `getting-started-with-nextjs.md`
- `typescript-best-practices.md`
- `nodejs-api-tutorial.md`

### Avoid:
- `Getting Started.md` (spaces, uppercase)
- `post-1.md` (not descriptive)
- `my_post.md` (underscores)

## Troubleshooting

### Post not appearing
- Check that the frontmatter is properly formatted
- Ensure the file is in the `src/posts/` directory
- Verify the build completed successfully

### Build errors
- Check for syntax errors in markdown files
- Ensure all required frontmatter fields are present
- Look for invalid characters in filenames

## Tips

1. **Write in markdown**: It's easier to read and edit than HTML
2. **Use descriptive tags**: Helps with categorization and SEO
3. **Keep excerpts concise**: Aim for 1-2 sentences
4. **Preview locally**: Always test your posts before deploying
5. **Version control**: Commit your markdown files to track changes 