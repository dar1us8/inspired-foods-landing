import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  useTheme,
  Breadcrumbs,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

// Brand data
const brands = [
  {
    id: 1,
    name: 'California Thai',
    description: 'Authentic Thai cuisine with a California twist, using fresh, locally-sourced ingredients',
    image: '/product-placeholder-1.jpg',
    route: '/brands/california-thai'
  },
  {
    id: 2,
    name: 'Wikki Hut',
    description: 'Tropical-inspired healthy foods and beverages that bring the island vibes to your day',
    image: '/product-placeholder-4.jpg',
    route: '/brands/wikki-hut'
  },
  {
    id: 3,
    name: 'Eat Canteen',
    description: 'Nutritious, wholesome meals designed to fuel your active lifestyle',
    image: '/product-placeholder-7.jpg',
    route: '/brands/eat-canteen'
  }
];

const BrandsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Box 
        sx={{ 
          pt: { xs: 4, md: 6 },
          pb: { xs: 8, md: 12 },
          bgcolor: theme.palette.background.paper
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link component={RouterLink} to="/" color="inherit">
              Home
            </Link>
            <Typography color="text.primary">Brands</Typography>
          </Breadcrumbs>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              align="center" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' }
              }}
            >
              Our Brands
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              color="text.secondary"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                mb: 6
              }}
            >
              Discover our family of unique food brands, each with their own distinctive flavors and experiences
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {brands.map((brand, index) => (
              <Grid item xs={12} key={brand.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      overflow: 'hidden',
                      borderRadius: 2,
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: '100%', md: '40%' },
                        height: { xs: '300px', md: 'auto' },
                        objectFit: 'cover',
                        margin: '0 auto'
                      }}
                      image={brand.image}
                      alt={brand.name}
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: { xs: 3, md: 5 },
                        width: { xs: '100%', md: '60%' },
                      }}
                    >
                      <Typography variant="h3" component="h2" gutterBottom fontWeight={600} sx={{ width: '100%', textAlign: 'center' }}>
                        {brand.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, width: '100%', textAlign: 'center' }}>
                        {brand.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Button
                          component={RouterLink}
                          to={brand.route}
                          variant="contained"
                          color="primary"
                          size="large"
                          sx={{ px: 4, py: 1.5 }}
                        >
                          Explore {brand.name}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button 
              component={RouterLink}
              to="/"
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default BrandsPage; 