#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'src/posts');

try {
  const files = fs.readdirSync(postsDir);
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  
  if (markdownFiles.length === 0) {
    console.log('📝 No blog posts found in src/posts/');
    return;
  }
  
  console.log(`📚 Found ${markdownFiles.length} blog post(s):\n`);
  
  markdownFiles.forEach((file, index) => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title from frontmatter
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : 'No title';
    
    // Extract date from frontmatter
    const dateMatch = content.match(/date:\s*"([^"]+)"/);
    const date = dateMatch ? dateMatch[1] : 'No date';
    
    const slug = file.replace('.md', '');
    
    console.log(`${index + 1}. ${title}`);
    console.log(`   📅 ${date}`);
    console.log(`   🔗 /blog/${slug}`);
    console.log(`   📁 ${file}`);
    console.log('');
  });
  
  console.log('💡 To create a new post: npm run new-post "Your Title"');
  console.log('💡 To edit a post: Edit the .md file in src/posts/');
  
} catch (error) {
  console.error('❌ Error reading posts directory:', error.message);
} 