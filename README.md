# Platform® - React Landing Page

A modern, fully-responsive landing page built with React.js, featuring smooth animations, interactive components, and a stunning design inspired by the original Platform website.

## 🚀 Features

- **Fully Responsive Design** - Works beautifully on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Using Framer Motion for professional scroll animations and transitions
- **Interactive Components**:
  - Product carousel with navigation
  - Pricing toggle (Monthly/Yearly)
  - FAQ accordion
  - Testimonials slider with auto-play
  - Contact form with validation
  - Mobile-friendly navigation menu
- **Modern Tech Stack**:
  - React 18
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Icons & Lucide React for icons
  - React Intersection Observer for scroll effects

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Extract the project** (if you received a ZIP file)
   ```bash
   cd platform-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
platform-react/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navigation.jsx  # Header with mobile menu
│   │   └── Footer.jsx      # Footer with links & newsletter
│   ├── sections/           # Page sections
│   │   ├── Hero.jsx        # Hero section with CTA
│   │   ├── Work.jsx        # Work showcase with carousel
│   │   ├── Services.jsx    # Services grid
│   │   ├── Process.jsx     # Process timeline
│   │   ├── Pricing.jsx     # Pricing cards with toggle
│   │   ├── FAQ.jsx         # FAQ accordion
│   │   ├── Team.jsx        # Team members
│   │   ├── Testimonials.jsx # Client testimonials slider
│   │   └── Contact.jsx     # Contact form & info
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles & Tailwind
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Change this to your brand color
  },
}
```

### Content
Update text content directly in the component files:
- Hero text: `src/sections/Hero.jsx`
- Services: `src/sections/Services.jsx`
- Pricing plans: `src/sections/Pricing.jsx`
- Team members: `src/sections/Team.jsx`

### Images
Replace placeholder images with your own:
- Team photos in `src/sections/Team.jsx`
- Testimonial avatars in `src/sections/Testimonials.jsx`

### Logo
Replace the logo placeholder in:
- `src/components/Navigation.jsx`
- `src/components/Footer.jsx`

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm run build`
Builds the app for production to the `build` folder
- Optimized and minified
- Ready for deployment

### `npm test`
Launches the test runner in interactive watch mode

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your Git repository

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/platform-react",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Key Features Explained

### Smooth Scroll
All navigation links use smooth scrolling to sections with proper anchor IDs.

### Form Handling
The contact form includes:
- Client-side validation
- Loading states
- Success messages
- Ready for backend integration (just add your API endpoint)

### Animations
- Scroll-triggered animations using Framer Motion
- Intersection Observer for performance
- Staggered animations for list items
- Hover effects on interactive elements

### SEO Ready
- Semantic HTML structure
- Proper heading hierarchy
- Alt tags for images
- Meta tags in index.html

## 🔌 Backend Integration

To connect the contact form to your backend:

1. Open `src/sections/Contact.jsx`
2. Find the `handleSubmit` function
3. Replace the simulation code with your API call:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🐛 Troubleshooting

### Port 3000 is already in use
Run the app on a different port:
```bash
PORT=3001 npm start
```

### Build fails
1. Clear cache: `rm -rf node_modules package-lock.json`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

### Animations not working
Make sure all dependencies are installed:
```bash
npm install framer-motion react-intersection-observer
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Open an issue on GitHub
- Contact: hello@platform.nl

## 🙏 Credits

- Design inspired by the original Platform website
- Icons from Lucide React
- Fonts from Google Fonts (Space Grotesk, Inter)
- Built with React, Tailwind CSS, and Framer Motion

---

**Built with ❤️ using React and Tailwind CSS**
