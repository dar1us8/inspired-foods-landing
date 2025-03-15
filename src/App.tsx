import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import BrandsSection from './components/sections/BrandsSection';
import SustainabilitySection from './components/sections/SustainabilitySection';
import ContactSection from './components/sections/ContactSection';
import CaliforniaThai from './pages/brands/CaliforniaThai';
import WikkiHut from './pages/brands/WikkiHut';
import EatCanteen from './pages/brands/EatCanteen';
import BrandsPage from './pages/brands';

// Homepage component
const HomePage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <BrandsSection />
    <SustainabilitySection />
    <ContactSection />
  </Layout>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/inspired-foods-landing">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/california-thai" element={<CaliforniaThai />} />
          <Route path="/brands/wikki-hut" element={<WikkiHut />} />
          <Route path="/brands/eat-canteen" element={<EatCanteen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
