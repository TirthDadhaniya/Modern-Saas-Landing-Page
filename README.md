# ADmyBRAND AI Suite - Modern SaaS Landing Page

A modern, responsive landing page for ADmyBRAND AI Suite - an AI-powered marketing automation platform. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and excellent user experience.

![ADmyBRAND Landing Page](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-black?style=for-the-badge)

## 🌐 Live Demo

**[🚀 View Live Website](https://modern-saas-landing-page-lac.vercel.app/)**

Experience the full interactive landing page with smooth animations, responsive design, and all features in action.

## 🚀 Features

### ✨ Modern Design

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme** - Sleek dark gradient background with purple/blue accents
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Elements** - Hover effects, micro-interactions, and engaging UI

### 🎯 Key Sections

- **Hero Section** - Compelling headline with call-to-action buttons
- **Features Section** - AI-powered features showcase with icons
- **Pricing Calculator** - Interactive pricing tool for personalized quotes
- **Pricing Plans** - Three-tier pricing structure (Starter, Pro, Enterprise)
- **Testimonials** - Customer testimonials with rotating carousel
- **FAQ Section** - Accordion-style frequently asked questions
- **Contact Form** - Lead generation form with validation

### 🛠 Technical Features

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Lucide React** - Beautiful icons

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/admybrand-landing-page.git
   cd admybrand-landing-page
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
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗 Project Structure

```
Modern-Saas-Landing-Page/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix-based)
│   ├── contact-form.tsx  # Contact form component
│   ├── dashboard-preview.tsx # Hero dashboard preview
│   └── pricing-calculator.tsx # Interactive pricing tool
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── favicon.png       # Website favicon
│   ├── Sarah.jpg         # Testimonial profile
│   ├── Emily.jpg         # Testimonial profile
│   ├── Marcus.jpg        # Testimonial profile
│   └── placeholder-*.    # Placeholder images
├── styles/               # Additional styles
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Changing Testimonial Images

Update the testimonial images in `app/page.tsx`:

```typescript
const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechFlow Inc.",
    image: "/sarah-chen.jpg", // Update this path
    quote: "Your testimonial quote here...",
  },
  // ... more testimonials
];
```

### Updating Favicon

Replace `public/favicon.png` with your own favicon image.

### Modifying Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors here
      },
    },
  },
};
```

### Adding New Sections

Create new components in the `components/` directory and import them in `app/page.tsx`.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### AI-Powered Marketing Focus

The landing page emphasizes AI-driven marketing automation with features like:

- **Smart Targeting** - AI-powered customer identification
- **Campaign Automation** - 24/7 automated campaign management
- **Real-Time Analytics** - Live performance monitoring
- **Predictive Insights** - Data-driven marketing decisions

### Interactive Pricing Calculator

Custom pricing calculator that allows users to:

- Select their business size
- Choose features they need
- Get personalized pricing quotes
- Compare different plans

### Testimonials Carousel

- Auto-rotating customer testimonials
- Manual navigation controls
- Smooth transitions between testimonials
- Real customer profile pictures

## 🔧 Technologies Used

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

## 🎨 Design System

### Color Palette

- **Primary**: Purple/Blue gradient
- **Background**: Dark slate gradient
- **Text**: White and light gray
- **Accents**: Purple, blue, and green highlights

### Typography

- **Font**: Geist Sans (modern, clean)
- **Headings**: Bold, gradient text
- **Body**: Light gray, readable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible components
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide** for beautiful icons

## 📞 Support

For support, email work.tirthdadhaniya@gmail.com or create an issue in this repository.

---

**Built with ❤️ for modern SaaS marketing**
