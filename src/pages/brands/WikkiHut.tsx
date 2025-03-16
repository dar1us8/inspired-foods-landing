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

// Sample product data for Wikki Hut
const products = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Our signature burger with fresh ingredients and special sauce.',
    image: '/inspired-foods-landing/product-placeholder-1.jpg',
    price: '$9.99',
    details: 'Our Classic Burger features a juicy patty made from locally sourced beef, topped with fresh lettuce, tomato, onion, and our special sauce. Served on a toasted brioche bun.'
  },
  {
    id: 2,
    name: 'Veggie Wrap',
    description: 'Fresh vegetables and hummus wrapped in a whole grain tortilla.',
    image: '/inspired-foods-landing/product-placeholder-2.jpg',
    price: '$8.49',
    details: 'Our Veggie Wrap is packed with fresh vegetables, including cucumber, bell peppers, carrots, and spinach. We add a generous spread of our house-made hummus and wrap it all in a whole grain tortilla.'
  },
  {
    id: 3,
    name: 'Chicken Sandwich',
    description: 'Grilled chicken breast with avocado, bacon, and honey mustard.',
    image: '/inspired-foods-landing/product-placeholder-3.jpg',
    price: '$10.99',
    details: 'Our Chicken Sandwich features a tender grilled chicken breast, topped with creamy avocado, crispy bacon, and our signature honey mustard sauce. Served on a toasted ciabatta roll.'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.',
    image: '/inspired-foods-landing/product-placeholder-4.jpg',
    price: '$7.99',
    details: 'Our Caesar Salad features crisp romaine lettuce, shaved parmesan cheese, and crunchy croutons. Tossed in our house-made Caesar dressing for a classic taste.'
  },
  {
    id: 5,
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with a side of chipotle aioli.',
    image: '/inspired-foods-landing/product-placeholder-5.jpg',
    price: '$4.99',
    details: 'Our Sweet Potato Fries are crispy on the outside and tender on the inside. Seasoned with a blend of spices and served with a side of our house-made chipotle aioli for dipping.'
  },
  {
    id: 6,
    name: 'Chocolate Milkshake',
    description: 'Creamy chocolate milkshake topped with whipped cream and a cherry.',
    image: '/inspired-foods-landing/product-placeholder-6.jpg',
    price: '$5.99',
    details: 'Our Chocolate Milkshake is made with premium chocolate ice cream, whole milk, and a touch of vanilla. Topped with whipped cream and a maraschino cherry for a classic treat.'
  }
];

const WikkiHut: React.FC = () => {
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
            <Typography color="text.primary">Wikki Hut</Typography>
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
                src="/inspired-foods-landing/logos/wikki-hut-logo.png"
                alt="Wikki Hut"
                sx={{
                  maxWidth: 200,
                  height: 'auto',
                  margin: '0 auto',
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
              Wikki Hut
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
              Tropical-inspired healthy foods and beverages that bring the island vibes to your day
            </Typography>
          </motion.div>

          <Box 
            component="img"
            src="/inspired-foods-landing/product-placeholder-5.jpg"
            alt="Wikki Hut"
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
            Wikki Hut brings the flavors and vibes of tropical islands to your neighborhood. We specialize in fresh, nutritious foods and beverages inspired by island cuisines from around the world. Our ingredients are sustainably sourced, and we're committed to reducing our environmental footprint through eco-friendly practices and packaging.
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

export default WikkiHut; 