# Dani's Personal Website

This is my personal portfolio website built with Next.js and deployed on GitHub Pages.

## 🚀 Features

- **Modern Design**: Built with Next.js 15 and Tailwind CSS
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: Built-in dark/light theme support
- **Static Export**: Optimized for GitHub Pages deployment
- **Auto-deploy**: Automatic deployment via GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/danigfavero/danigfavero.github.io.git
cd danigfavero.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment. Simply push to the `main` branch and your site will be automatically built and deployed to GitHub Pages.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

3. Deploy the `out/` directory to your web server.

## ⚙️ Configuration

### Next.js Configuration

The app is configured for static export in `next.config.ts`:

- `output: 'export'` - Enables static export
- `basePath` - Set for GitHub Pages deployment
- `trailingSlash: true` - Required for GitHub Pages
- `images.unoptimized: true` - Required for static export

### GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure the repository is public (or you have GitHub Pro for private repos)

## 🔧 Customization

### Updating Content

- Edit `src/app/page.tsx` to modify the homepage
- Update `src/app/layout.tsx` for global layout changes
- Modify `src/app/globals.css` for custom styles

### Adding Pages

1. Create new files in `src/app/` directory
2. Use the App Router file-based routing
3. Ensure all pages are compatible with static export

### Styling

- Tailwind CSS classes are used throughout
- Custom CSS can be added to `globals.css`
- Dark mode classes are automatically applied

## 📁 Project Structure

```
danigfavero.github.io/
├── .github/workflows/    # GitHub Actions
├── src/
│   └── app/             # Next.js App Router
│       ├── page.tsx     # Homepage
│       ├── layout.tsx   # Root layout
│       └── globals.css  # Global styles
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🚨 Important Notes

- **Static Export**: This app uses static export, so dynamic features like API routes won't work
- **Base Path**: The app is configured for GitHub Pages with the correct base path
- **Images**: Use the `next/image` component with `unoptimized: true`
- **Client-side Features**: Ensure all interactive features work with static export

## 🔗 Links

- **Live Site**: [https://danigfavero.github.io](https://danigfavero.github.io)
- **Repository**: [https://github.com/danigfavero/danigfavero.github.io](https://github.com/danigfavero/danigfavero.github.io)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and deployed on GitHub Pages
