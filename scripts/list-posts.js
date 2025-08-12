#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'src/posts');

function extractFrontmatterValue(content, field) {
  const regex = new RegExp(`${field}:\\s*"([^"]+)"`, 'i');
  const match = content.match(regex);
  return match ? match[1] : null;
}

function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

try {
  if (!fs.existsSync(postsDir)) {
    console.log('📝 Posts directory does not exist. Create one with:');
    console.log('   npm run new-post "Your First Post"');
    process.exit(0);
  }

  const files = fs.readdirSync(postsDir);
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  
  if (markdownFiles.length === 0) {
    console.log('📝 No blog posts found in src/posts/');
    console.log('💡 Create your first post with: npm run new-post "Your Title"');
    process.exit(0);
  }
  
  console.log(`📚 Found ${markdownFiles.length} blog post${markdownFiles.length > 1 ? 's' : ''}:\n`);
  
  const posts = markdownFiles
    .map(file => {
      try {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        const title = extractFrontmatterValue(content, 'title') || 'No title';
        const date = extractFrontmatterValue(content, 'date') || 'No date';
        const excerpt = extractFrontmatterValue(content, 'excerpt') || '';
        const slug = file.replace('.md', '');
        
        return {
          file,
          slug,
          title,
          date,
          excerpt,
          sortDate: new Date(date).getTime() || 0
        };
      } catch (error) {
        console.warn(`⚠️  Error reading ${file}: ${error.message}`);
        return null;
      }
    })
    .filter(post => post !== null)
    .sort((a, b) => b.sortDate - a.sortDate); // Sort by date, newest first
  
  posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}`);
    console.log(`   📅 ${formatDate(post.date)}`);
    if (post.excerpt && post.excerpt !== 'Add a brief description of your blog post here.') {
      console.log(`   📝 ${post.excerpt}`);
    }
    console.log(`   🔗 /blog/${post.slug}`);
    console.log(`   📁 ${post.file}`);
    console.log('');
  });
  
  console.log('💡 To create a new post: npm run new-post "Your Title"');
  console.log('💡 To edit a post: Edit the .md file in src/posts/');
  console.log('💡 To view your blog: npm run dev and visit http://localhost:3000/blog');
  
} catch (error) {
  console.error('❌ Error reading posts directory:', error.message);
  process.exit(1);
} 