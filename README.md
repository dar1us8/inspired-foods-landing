# Inspired Foods Landing Page

A modern, responsive landing page for Inspired Foods Incorporated, showcasing their sustainable food products and company mission.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for company information, products, sustainability initiatives, and contact
- Built with React, TypeScript, and Material-UI
- Animation effects using Framer Motion

## Technologies Used

- React 18
- TypeScript
- Material-UI
- Framer Motion
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/inspired-foods-landing.git
cd inspired-foods-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
inspired-foods-landing/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── sections/    # Page sections
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   ├── theme.ts         # Material-UI theme configuration
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Customization

### Images

Replace the placeholder images in the `public` directory with your own images:

- `/logo-placeholder.png` - Company logo
- `/hero-bg.jpg` - Hero section background
- `/hero-image-placeholder.png` - Hero section image
- `/about-image-placeholder.jpg` - About section image
- `/sustainability-placeholder.jpg` - Sustainability section image
- `/product-placeholder-*.jpg` - Product images

### Colors and Theme

You can customize the colors and theme by editing the `src/theme.ts` file.

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Material-UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
