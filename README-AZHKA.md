# Azhka Institute Website

A modern, professional website for Azhka Institute built with Next.js 15, JavaScript, and Tailwind CSS.

## 🎨 Design Features

- **Modern Educational Theme**: Clean, trustworthy design focused on skills and education
- **Color Scheme**: 
  - Primary: Azhka Blue (#1FB6C9)
  - Dark Accent: Deep Teal (#0E5E6F)
  - Professional white and gray backgrounds
- **Typography**: 
  - Headings: Poppins (SemiBold/Bold)
  - Body: Inter (Regular/Medium)

## 📋 Sections

1. **Header** - Sticky navigation with logo and CTA button
2. **Hero** - Eye-catching introduction with main value proposition
3. **Stats** - Display key metrics (courses, instructors, students, experience)
4. **Courses** - Grid of course cards (CCA, DCA, CCB, ADCA, Web Development)
5. **Why Choose Us** - Feature highlights
6. **Instructors** - Team profiles with experience
7. **About** - Institute history, mission, and vision
8. **Contact** - Contact form, information, and map
9. **Footer** - Links, social media, and copyright

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd azhka-institute
```

2. Install dependencies (already done):
```bash
npm install
```

3. Add your images to the `/public` folder:
   - `logo.png` - Main logo
   - `logo-white.png` - White version for footer
   - `hero-image.jpg` - Hero section image
   - `classroom.jpg` - Why Choose Us section
   - `about-azhka.jpg` - About section
   - `instructor1.jpg` through `instructor8.jpg` - Instructor photos

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
azhka-institute/
├── app/
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section
│   │   ├── Stats.js           # Statistics section
│   │   ├── Courses.js         # Courses grid
│   │   ├── WhyChooseUs.js     # Features section
│   │   ├── Instructors.js     # Team profiles
│   │   ├── About.js           # About section
│   │   ├── Contact.js         # Contact form & info
│   │   └── Footer.js          # Footer
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Home page
├── public/                    # Static assets (images, etc.)
└── package.json
```

## 🎨 Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --azhka-blue: #1FB6C9;
  --dark-teal: #0E5E6F;
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --bg-soft: #F9FAFB;
  --bg-white: #FFFFFF;
  --cta-hover: #0A4C59;
}
```

### Content

- **Courses**: Edit `app/components/Courses.js`
- **Instructors**: Edit `app/components/Instructors.js`
- **Stats**: Edit `app/components/Stats.js`
- **Contact Info**: Edit `app/components/Contact.js` and `app/components/Footer.js`

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm run deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 TODO Before Launch

- [ ] Add all real images to `/public` folder
- [ ] Update contact information (address, phone, email)
- [ ] Update instructor details with real names and info
- [ ] Configure Google Maps embed with actual location
- [ ] Add social media links
- [ ] Set up form submission endpoint
- [ ] Add favicon
- [ ] Test on multiple devices
- [ ] SEO optimization
- [ ] Add analytics (Google Analytics, etc.)

## 🛠️ Built With

- **Next.js 15** - React framework
- **Tailwind CSS** - Utility-first CSS
- **JavaScript** - No TypeScript
- **Google Fonts** - Poppins & Inter

## 📄 License

© 2026 Azhka Institute. All rights reserved.

## 🤝 Support

For questions or support, contact: office.azhka@gmail.com
```
