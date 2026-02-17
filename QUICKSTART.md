# 🚀 Quick Start Guide

Get your Platform website running in 3 simple steps!

## Step 1: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Verify installation: `node --version`

## Step 2: Install Dependencies
Open your terminal in the project folder and run:

```bash
npm install
```

This will download all required packages (~2-3 minutes).

## Step 3: Start the Development Server

```bash
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

## 🎉 That's It!

Your website is now running. You should see:
- ✅ Smooth animations
- ✅ Interactive carousels
- ✅ Working contact form
- ✅ Fully responsive design

## Next Steps

### Customize Your Website

1. **Change Colors**: Edit `tailwind.config.js`
2. **Update Content**: Edit files in `src/sections/`
3. **Add Your Logo**: Replace logo in `src/components/Navigation.jsx`
4. **Update Team Photos**: Edit image URLs in `src/sections/Team.jsx`

### Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized `build` folder ready for deployment.

### Deploy Your Website

**Option 1: Vercel (Easiest)**
```bash
npm i -g vercel
vercel
```

**Option 2: Netlify**
- Drag and drop the `build` folder to netlify.com

**Option 3: Your Own Server**
- Upload the `build` folder to your web server

## 📖 Full Documentation

See `README.md` for complete documentation including:
- Project structure
- Customization guide
- Backend integration
- Troubleshooting
- And more!

## 🆘 Need Help?

**Common Issues:**

**Port already in use?**
```bash
PORT=3001 npm start
```

**Installation failed?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Still stuck?**
Check the full README.md or contact support.

---

**Happy coding! 🎨✨**
