# Raja Kalavala - Portfolio Website

A modern, responsive portfolio website for Raja Kalavala, a Senior Software Engineer with 8+ years of experience in web and mobile development.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Professional Sections**: Hero, About, Skills, Experience, Projects, Contact
- **Real Photo Integration**: Professional headshot with animated border effects
- **Floating Illustrations**: Tech-themed decorative elements

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Styling**: Tailwind CSS with custom design system

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   │   └── raja-kalavala.jpg    # Your professional photo
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Hero.tsx             # Main hero section with photo
│   │   ├── About.tsx            # Professional summary
│   │   ├── Skills.tsx           # Technical skills
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Projects.tsx         # Portfolio projects
│   │   ├── Contact.tsx          # Contact information
│   │   └── Navbar.tsx           # Navigation with theme toggle
│   ├── App.tsx                  # Main application component
│   ├── index.tsx                # Entry point
│   └── index.css                # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Customization

### Personal Information
Update your information in the respective component files:
- **Hero.tsx**: Name, title, description
- **About.tsx**: Professional summary and personal details
- **Experience.tsx**: Work history and achievements
- **Projects.tsx**: Portfolio projects
- **Contact.tsx**: Contact information

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update Google Fonts in `public/index.html`
- **Animations**: Adjust Framer Motion animations in components

### Photo
- Replace `public/images/raja-kalavala.jpg` with your professional photo
- Recommended: Square format (1:1 aspect ratio), 400x400px minimum

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Stacked layout with optimized spacing
- **Tablet**: Adaptive grid layouts
- **Desktop**: Full-width layouts with side-by-side content

## 🌟 Key Features

### Hero Section
- Professional photo with animated border
- Floating tech illustrations
- Call-to-action buttons
- Experience statistics

### Navigation
- Smooth scrolling to sections
- Dark/light mode toggle
- Mobile-responsive menu
- Download resume button

### Experience Timeline
- Professional work history
- Company logos and details
- Technology tags
- Achievement highlights

### Projects Showcase
- Filterable project categories
- Live demo and GitHub links
- Technology stacks
- Project descriptions

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select `gh-pages` branch or `/docs` folder

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Deploy automatically

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Name**: Raja Kalavala
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

**Note**: This is a personal portfolio website showcasing Raja Kalavala's professional experience and projects. Feel free to customize it for your own use!
