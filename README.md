# Sourabh's Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience as a developer and AI/ML enthusiast.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Project Showcase**: Detailed project cards with live demos and source code links
- **Skills Visualization**: Animated skill bars and progress indicators
- **Contact Form**: Functional contact form for inquiries
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Database**: Supabase for contact form submissions

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── AnimatedSocialButton.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── GlowButton.jsx
│       ├── ModernCard.jsx
│       ├── SkillBar.jsx
│       ├── ThemeToggle.jsx
│       └── TypewriterEffect.jsx
├── contexts/
│   └── ThemeContext.jsx
├── lib/
│   ├── supabase.js
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sourabh-web21/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Customization

### Theme Colors
Modify the color scheme in `tailwind.config.js` and `src/index.css`.

### Projects
Update the projects array in `src/components/sections/Projects.jsx` to showcase your own projects.

### Personal Information
Update personal details in:
- `src/components/sections/Hero.jsx`
- `src/components/sections/About.jsx`
- `src/components/sections/Contact.jsx`

## 📱 Sections

- **Hero**: Introduction with call-to-action buttons and social links
- **About**: Personal information, skills, stats, and timeline
- **Projects**: Showcase of featured projects with filtering
- **Contact**: Contact form and additional information

## 🌟 Featured Projects

1. **YouTube Teach** - Educational video platform built with React and Gradio
2. **TechMate** - AI-powered laptop recommendation system
3. **Competitor Analysis System** - Market research tool with API integrations
4. **Dialogic** - Socratic AI chatbot for SIH 2024

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Sourabh-web21/portfolio/issues).

## 📞 Contact

- **Email**: sourabh.agarwal2023@vitstudent.ac.in
- **LinkedIn**: [Sourabh Agarwal](https://www.linkedin.com/in/sourabh-agarwal-41b13b301/)
- **GitHub**: [Sourabh-web21](https://github.com/sourabh-web21)

---

⭐ Star this repo if you found it helpful!

