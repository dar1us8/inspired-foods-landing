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

// Sample product data for Eat Canteen
const products = [
  {
    id: 1,
    name: 'Quinoa Bowl',
    description: 'Nutritious quinoa bowl with roasted vegetables and tahini dressing.',
    image: '/inspired-foods-landing/product-placeholder-1.jpg',
    price: '$10.99',
    details: 'Our Quinoa Bowl features organic quinoa, roasted seasonal vegetables, and a creamy tahini dressing. It\'s packed with protein and fiber, making it a perfect choice for a nutritious meal.'
  },
  {
    id: 2,
    name: 'Avocado Toast',
    description: 'Whole grain toast topped with avocado, microgreens, and seeds.',
    image: '/inspired-foods-landing/product-placeholder-2.jpg',
    price: '$8.99',
    details: 'Our Avocado Toast is made with freshly baked whole grain bread, ripe avocados, microgreens, and a sprinkle of seeds. We add a touch of lemon juice and red pepper flakes for extra flavor.'
  },
  {
    id: 3,
    name: 'Lentil Soup',
    description: 'Hearty lentil soup with vegetables and aromatic herbs.',
    image: '/inspired-foods-landing/product-placeholder-3.jpg',
    price: '$7.49',
    details: 'Our Lentil Soup is made with organic lentils, fresh vegetables, and a blend of aromatic herbs and spices. It\'s simmered slowly to develop rich flavors and served with a slice of whole grain bread.'
  },
  {
    id: 4,
    name: 'Falafel Wrap',
    description: 'Crispy falafel with fresh vegetables and tahini sauce in a whole wheat wrap.',
    image: '/inspired-foods-landing/product-placeholder-4.jpg',
    price: '$9.99',
    details: 'Our Falafel Wrap features house-made falafel, fresh vegetables, and a creamy tahini sauce, all wrapped in a whole wheat tortilla. It\'s a satisfying and flavorful plant-based meal.'
  },
  {
    id: 5,
    name: 'Berry Smoothie',
    description: 'Refreshing smoothie with mixed berries, banana, and almond milk.',
    image: '/inspired-foods-landing/product-placeholder-5.jpg',
    price: '$6.99',
    details: 'Our Berry Smoothie is a blend of mixed berries, banana, and almond milk. We add a touch of honey for sweetness and a scoop of plant-based protein powder for an extra nutritional boost.'
  },
  {
    id: 6,
    name: 'Chia Pudding',
    description: 'Creamy chia pudding with coconut milk and fresh fruits.',
    image: '/inspired-foods-landing/product-placeholder-6.jpg',
    price: '$7.99',
    details: 'Our Chia Pudding is made with organic chia seeds soaked in coconut milk and topped with fresh seasonal fruits. It\'s a nutritious and delicious option for breakfast or a snack.'
  }
];

const EatCanteen: React.FC = () => {
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
            <Link component={RouterLink} to="/#brands" color="inherit">
              Brands
            </Link>
            <Typography color="text.primary">Eat Canteen</Typography>
          </Breadcrumbs>

          <Box 
            sx={{ 
              textAlign: 'center',
              mb: 4,
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/inspired-foods-landing/logos/eat-canteen-logo.png" 
                alt="Eat Canteen Logo"
                sx={{
                  maxWidth: '250px',
                  height: 'auto',
                  mb: 2,
                  margin: '0 auto'
                }}
              />
            </motion.div>
          </Box>

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
              Eat Canteen
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
              Nutritious, wholesome meals designed to fuel your active lifestyle
            </Typography>
          </motion.div>

          <Box 
            component="img"
            src="/inspired-foods-landing/product-placeholder-7.jpg"
            alt="Eat Canteen"
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: 2,
              mb: 6
            }}
          />

          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              mb: 6
            }}
          >
            Eat Canteen is dedicated to providing nutritious, wholesome meals that fuel your active lifestyle. We believe that healthy food should be delicious, satisfying, and accessible to everyone. Our menu features a variety of nutrient-dense options made with locally-sourced ingredients whenever possible. We're committed to sustainability in our sourcing, preparation, and packaging.
          </Typography>

          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 600,
              mb: 4,
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}
          >
            Our Menu
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      width: '100%',
                      maxWidth: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        objectFit: 'cover',
                        width: '100%',
                        margin: '0 auto'
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {product.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {product.details}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        mt: 2, 
                        width: '100%', 
                        gap: 2,
                        mx: 'auto'
                      }}>
                        <Typography variant="h6" color="primary.main" fontWeight={600} sx={{ textAlign: 'center' }}>
                          {product.price}
                        </Typography>
                        <Button 
                          variant="outlined" 
                          color="primary"
                          sx={{ minWidth: '120px' }}
                        >
                          Order Now
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

export default EatCanteen; 