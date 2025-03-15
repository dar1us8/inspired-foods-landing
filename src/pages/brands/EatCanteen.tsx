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
    name: 'Harvest Bowl',
    description: 'Nutritious bowl with seasonal vegetables, grains, and protein.',
    image: '/product-placeholder-7.jpg',
    price: '$11.99',
    details: 'Our Harvest Bowl features a base of quinoa and brown rice, topped with roasted seasonal vegetables, your choice of protein, and our house-made tahini dressing. It\'s a complete meal packed with nutrients and flavor.'
  },
  {
    id: 2,
    name: 'Superfood Salad',
    description: 'Nutrient-packed salad with kale, quinoa, and superfoods.',
    image: '/product-placeholder-8.jpg',
    price: '$10.99',
    details: 'Our Superfood Salad combines fresh kale, protein-rich quinoa, antioxidant-packed berries, and crunchy seeds. Dressed with our apple cider vinaigrette, it\'s a nutritional powerhouse that doesn\'t compromise on taste.'
  },
  {
    id: 3,
    name: 'Power Sandwich',
    description: 'Hearty sandwich with whole grain bread, lean protein, and vegetables.',
    image: '/product-placeholder-9.jpg',
    price: '$9.49',
    details: 'Our Power Sandwich is made with locally-baked whole grain bread, filled with lean protein, avocado, sprouts, and vegetables. It\'s a satisfying meal that provides sustained energy throughout your day.'
  },
  {
    id: 4,
    name: 'Energy Wrap',
    description: 'Protein-packed wrap with hummus, vegetables, and quinoa.',
    image: '/product-placeholder-1.jpg',
    price: '$9.99',
    details: 'Our Energy Wrap features a whole grain tortilla filled with house-made hummus, quinoa, roasted vegetables, and fresh greens. It\'s a perfect on-the-go meal that will keep you energized and satisfied.'
  },
  {
    id: 5,
    name: 'Protein Smoothie',
    description: 'Creamy smoothie with plant-based protein, fruits, and superfoods.',
    image: '/product-placeholder-2.jpg',
    price: '$8.49',
    details: 'Our Protein Smoothie blends plant-based protein with banana, berries, spinach, and almond milk. It\'s a delicious way to refuel after a workout or to start your day with a nutritional boost.'
  },
  {
    id: 6,
    name: 'Grain Bowl',
    description: 'Customizable bowl with your choice of grains, vegetables, and protein.',
    image: '/product-placeholder-3.jpg',
    price: '$12.99',
    details: 'Our Grain Bowl lets you build your perfect meal. Choose your base (quinoa, brown rice, or mixed greens), add seasonal vegetables, select your protein, and finish with one of our signature sauces for a personalized, nutritious meal.'
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

          {/* Logo Section */}
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mb: 4
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/inspired-foods-landing/logos/canteen-logo.png" 
                alt="Eat Canteen Logo"
                sx={{
                  maxWidth: '250px',
                  height: 'auto',
                  mb: 2
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
            src="/product-placeholder-7.jpg"
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

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
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
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, width: '100%', gap: 2 }}>
                        <Typography variant="h6" color="primary.main" fontWeight={600}>
                          {product.price}
                        </Typography>
                        <Button variant="outlined" color="primary">
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