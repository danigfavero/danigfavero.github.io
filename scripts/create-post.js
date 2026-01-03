#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'src/posts');

// Get the title from command line arguments
const title = process.argv[2];

if (!title) {
  console.error('❌ Please provide a title for the blog post');
  console.error('Usage: npm run new-post "Your Post Title"');
  process.exit(1);
}

// Validate title length
if (title.length > 100) {
  console.error('❌ Title is too long (max 100 characters)');
  process.exit(1);
}

// Create slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

if (!slug) {
  console.error('❌ Title contains no valid characters for URL slug');
  process.exit(1);
}

// Get current date in ISO format
const date = new Date().toISOString().split('T')[0];

// Create frontmatter template
const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}" # Escape quotes in title
excerpt: "Add a brief description of your blog post here."
date: "${date}"
readTime: "5 min read"
tags: ["draft"]
author: "Daniela Favero"
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

// Ensure posts directory exists
if (!fs.existsSync(postsDir)) {
  try {
    fs.mkdirSync(postsDir, { recursive: true });
    console.log(`📁 Created posts directory: ${postsDir}`);
  } catch (error) {
    console.error(`❌ Failed to create posts directory: ${error.message}`);
    process.exit(1);
  }
}

// Create the file
const filePath = path.join(postsDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`❌ A post with slug "${slug}" already exists!`);
  console.error(`   File: ${filePath}`);
  process.exit(1);
}

try {
  fs.writeFileSync(filePath, frontmatter, 'utf8');
  console.log(`✅ Created new blog post: ${path.relative(process.cwd(), filePath)}`);
  console.log(`📝 Edit the file to add your content`);
  console.log(`🔗 Your post will be available at: /blog/${slug}`);
  console.log(`💡 Remember to update the excerpt and tags before publishing!`);
} catch (error) {
  console.error(`❌ Failed to create post file: ${error.message}`);
  process.exit(1);
} 