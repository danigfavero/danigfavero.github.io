#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'src/posts');

// Get the title from command line arguments
const title = process.argv[2];

if (!title) {
  console.error('Please provide a title for the blog post');
  console.error('Usage: node scripts/create-post.js "Your Post Title"');
  process.exit(1);
}

// Create slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

// Get current date
const date = new Date().toISOString().split('T')[0];

// Create frontmatter
const frontmatter = `---
title: "${title}"
excerpt: "Add a brief description of your blog post here."
date: "${date}"
readTime: "5 min read"
tags: ["Tag1", "Tag2"]
author: "Dani G. Favero"
---

# ${title}

Start writing your blog post content here...

## Introduction

Begin with an introduction to your topic.

## Main Content

Add your main content here with proper markdown formatting.

## Conclusion

Wrap up your post with a conclusion.
`;

// Create the file
const filePath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`A post with slug "${slug}" already exists!`);
  process.exit(1);
}

fs.writeFileSync(filePath, frontmatter);

console.log(`✅ Created new blog post: ${filePath}`);
console.log(`📝 Edit the file to add your content`);
console.log(`🔗 Your post will be available at: /blog/${slug}`); 