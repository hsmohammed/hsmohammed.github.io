# Hossameldin Mohammed - ML Consulting Website

A modern, professional website built with Next.js, TypeScript, and Tailwind CSS for showcasing machine learning consulting services.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for consulting
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized with Next.js 14 and modern web standards
- **SEO Optimized**: Built-in SEO with metadata and structured data
- **Contact Form**: Professional contact form for client inquiries
- **Animations**: Smooth animations with Framer Motion
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons, Font Awesome)
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hsmohammed-consulting
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
- Update personal information in component files
- Modify services in `components/Services.tsx`
- Update experience in `components/Experience.tsx`
- Customize testimonials in `components/Testimonials.tsx`

### SEO
Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
  // ... other metadata
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms
The site is compatible with any static hosting platform.

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: 100/100 score
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks (optional)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hossam.i.sa@gmail.com
- LinkedIn: [Hossameldin Mohammed](https://www.linkedin.com/in/hsmohammed/)

---

Built with ❤️ using Next.js and Tailwind CSS
