# Thriving Greens - Premium Microgreens E-commerce Website

A modern, responsive e-commerce website for **Thriving Greens**, a premium microgreens brand. Built with Next.js, TypeScript, and Tailwind CSS, featuring a clean organic design aesthetic and full shopping cart functionality.

## 🌱 Features

- **Modern E-commerce Experience**: Complete shopping cart, product catalog, and checkout flow
- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Organic Design Aesthetic**: Clean, natural color palette with green tones and organic feel
- **Product Management**: Dynamic product display with categories and filtering
- **Shopping Cart**: Full cart functionality with quantity management
- **Multiple Pages**: Home, Shop, Product Details, Cart, About, and Contact pages
- **Performance Optimized**: Built with Next.js App Router and TypeScript
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## 🛠 Tech Stack

- **Framework**: [Next.js 16.2.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom organic color palette
- **State Management**: React Context API for shopping cart
- **Font**: Inter & Poppins from Google Fonts
- **Icons**: Heroicons (SVG icons)
- **Build Tool**: Turbopack (Next.js bundler)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or use this repository**
   ```bash
   git clone <repository-url>
   cd microgreens
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
microgreens/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About/Our Process page
│   │   ├── cart/              # Shopping cart page
│   │   ├── contact/           # Contact page
│   │   ├── shop/              # Product catalog
│   │   │   └── [id]/          # Dynamic product detail pages
│   │   ├── api/               # API routes
│   │   │   └── products/      # Products API endpoint
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout with navigation
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx         # Main navigation
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ProductCard.tsx    # Product display card
│   │   ├── Hero.tsx           # Homepage hero section
│   │   ├── Features.tsx       # Features section
│   │   └── FeaturedProducts.tsx # Featured products grid
│   ├── contexts/              # React Context providers
│   │   └── CartContext.tsx    # Shopping cart state management
│   └── data/                  # Static data files
│       └── products.json      # Product catalog data
├── public/
│   └── images/                # Image assets (placeholders)
│       └── README.md          # Image requirements guide
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary Green**: Vibrant, fresh green tones
- **Sage**: Muted, natural green accents  
- **Cream**: Warm, off-white backgrounds
- **Earth**: Natural brown tones for grounding

### Typography
- **Display**: Poppins (headings, brand name)
- **Body**: Inter (body text, UI elements)

### Components
- **Rounded corners**: Soft, organic feel
- **Soft shadows**: Subtle depth without harshness
- **Animations**: Gentle fade-ins and hover effects
- **Responsive grid**: Mobile-first layout system

## 🛒 E-commerce Features

### Product Catalog
- 6+ microgreen varieties with detailed information
- Category filtering (Shoots, Brassicas, Leafy Greens, Asian)
- Sort by name, price, or featured status
- Rich product details including flavor profiles and uses

### Shopping Cart
- Add/remove items with quantity control
- Persistent cart state across pages
- Real-time total calculation
- Responsive cart summary

### Pages
1. **Homepage**: Hero section, features, featured products
2. **Shop**: Product grid with filtering and sorting
3. **Product Details**: Individual product pages with related items
4. **Cart**: Full cart management and checkout prep
5. **About**: Farm story and growing process breakdown
6. **Contact**: Contact form, business info, and FAQ

## 🖼 Images

The website requires high-quality images that are not included in this repository. See `public/images/README.md` for detailed image requirements including:

- Product hero shots for each microgreen variety
- Farm and growing process photos  
- Behind-the-scenes gallery images
- Hero/lifestyle photography

## 🔧 Customization

### Adding Products
Edit `src/data/products.json` to add/modify products:

```json
{
  "id": 7,
  "name": "New Microgreen",
  "price": 7.99,
  "shortDescription": "Brief description",
  "description": "Full product description...",
  "flavorProfile": "Taste characteristics",
  "nutritionalBenefits": "Health benefits",
  "bestUses": ["Salads", "Garnish"],
  "image": "/images/new-microgreen.jpg",
  "featured": false,
  "category": "shoots"
}
```

### Styling Changes
Modify `tailwind.config.ts` for color palette, fonts, or design tokens.

### Adding Pages
Create new pages in `src/app/` following Next.js App Router conventions.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components are designed mobile-first with progressive enhancement.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab/Bitbucket
2. Connect to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag & drop the `dist` folder after `npm run build`
- **DigitalOcean App Platform**: Connect your repository
- **AWS Amplify**: Connect your repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions about this project:
- Create an issue on GitHub
- Check the documentation in `/docs`
- Review the component examples

---

**Built with ❤️ for sustainable, local agriculture and healthy living.**
