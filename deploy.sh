#!/bin/bash

# Simple deployment script for danigfavero.github.io
echo "🚀 Deploying danigfavero.github.io..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create .nojekyll file for GitHub Pages
    echo "📝 Creating .nojekyll file..."
    touch out/.nojekyll
    
    # Add all changes to git
    echo "📝 Adding changes to git..."
    git add .
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Update website - $(date)"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployment complete! Your site will be updated shortly."
    echo "🌐 Visit: https://danigfavero.github.io"
else
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi 