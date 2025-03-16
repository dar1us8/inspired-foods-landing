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

// Sample product data for California Thai
const products = [
  {
    id: 1,
    name: 'Thai Green Curry',
    description: 'Authentic Thai green curry with fresh vegetables and aromatic herbs.',
    image: '/product-placeholder-1.jpg',
    price: '$12.99',
    details: 'Our Thai Green Curry is made with fresh ingredients, including lemongrass, galangal, and kaffir lime leaves. We use locally sourced vegetables and sustainable protein options to create a delicious and environmentally friendly meal.'
  },
  {
    id: 2,
    name: 'Pad Thai',
    description: 'Classic Pad Thai with rice noodles, vegetables, and our signature sauce.',
    image: '/product-placeholder-2.jpg',
    price: '$11.49',
    details: 'Our Pad Thai features rice noodles, fresh bean sprouts, green onions, and eggs, all stir-fried in our signature tamarind sauce. We offer vegetarian, vegan, and protein options to suit your dietary preferences.'
  },
  {
    id: 3,
    name: 'Mango Sticky Rice',
    description: 'Sweet sticky rice with fresh mango, a traditional Thai dessert.',
    image: '/product-placeholder-3.jpg',
    price: '$8.99',
    details: 'Our Mango Sticky Rice is a sweet treat made with glutinous rice, fresh ripe mangoes, and coconut milk. We source our mangoes from sustainable farms and use organic coconut milk for a delicious and guilt-free dessert.'
  },
  {
    id: 4,
    name: 'Tom Yum Soup',
    description: 'Spicy and sour soup with lemongrass, lime, and fresh herbs.',
    image: '/product-placeholder-4.jpg',
    price: '$10.99',
    details: 'Our Tom Yum Soup is a perfect balance of spicy, sour, and savory flavors. Made with fresh lemongrass, kaffir lime leaves, galangal, and mushrooms, this soup is both delicious and nutritious.'
  },
  {
    id: 5,
    name: 'Thai Basil Stir Fry',
    description: 'Aromatic stir fry with Thai basil, vegetables, and your choice of protein.',
    image: '/product-placeholder-5.jpg',
    price: '$13.99',
    details: 'Our Thai Basil Stir Fry combines fresh Thai basil with colorful vegetables and your choice of protein. The dish is seasoned with our special sauce that brings out the aromatic flavors of the basil.'
  },
  {
    id: 6,
    name: 'Coconut Ice Cream',
    description: 'Creamy coconut ice cream with toasted peanuts and sticky rice.',
    image: '/product-placeholder-6.jpg',
    price: '$7.99',
    details: 'Our Coconut Ice Cream is made with real coconut milk and topped with toasted peanuts and a side of sweet sticky rice. It\'s the perfect way to cool down and satisfy your sweet tooth.'
  }
];

const CaliforniaThai: React.FC = () => {
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
            <Typography color="text.primary">California Thai</Typography>
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
                src="/inspired-foods-landing/logos/california-thai-logo.png" 
                alt="California Thai Logo"
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
              California Thai
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
              Authentic Thai cuisine with a California twist, using fresh, locally-sourced ingredients
            </Typography>
          </motion.div>

          <Box 
            component="img"
            src="/product-placeholder-1.jpg"
            alt="California Thai"
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
            California Thai brings the vibrant flavors of Thailand to California, with a focus on fresh, locally-sourced ingredients. Our chefs combine traditional Thai cooking techniques with California's farm-to-table ethos to create dishes that are both authentic and innovative. We're committed to sustainability, using eco-friendly packaging and supporting local farmers.
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

export default CaliforniaThai; 