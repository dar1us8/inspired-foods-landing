import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import BrandsSection from './components/sections/BrandsSection';
import SustainabilitySection from './components/sections/SustainabilitySection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <SustainabilitySection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
