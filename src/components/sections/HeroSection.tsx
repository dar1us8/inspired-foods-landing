import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="home"
      sx={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                component="h1" 
                color="primary"
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Nourishing the Future with Inspired Foods
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary"
                sx={{ 
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.5
                }}
              >
                Home to California Thai, Wikki Hut, and Eat Canteen - innovative food brands that inspire healthier living and a better planet.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  onClick={() => scrollToSection('#brands')}
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Explore Brands
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  onClick={() => scrollToSection('#about')}
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Our Mission
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'flex-end',
                marginTop: isMobile ? '2rem' : 0
              }}
            >
              <Box
                component="img"
                src="/hero-image-placeholder.png"
                alt="Inspired Foods Brands"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 