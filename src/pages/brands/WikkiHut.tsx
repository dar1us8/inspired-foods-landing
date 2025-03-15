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
    name: 'Coconut Bowl',
    description: 'Tropical-inspired bowl with fresh fruits, coconut, and granola.',
    image: '/product-placeholder-4.jpg',
    price: '$9.99',
    details: 'Our Coconut Bowl is a refreshing blend of tropical fruits, shredded coconut, and crunchy granola. We use organic fruits and house-made granola for a nutritious and delicious breakfast or snack option.'
  },
  {
    id: 2,
    name: 'Island Smoothie',
    description: 'Refreshing smoothie with tropical fruits and coconut water.',
    image: '/product-placeholder-5.jpg',
    price: '$7.49',
    details: 'Our Island Smoothie combines ripe mangoes, pineapples, and bananas with coconut water for a hydrating and energizing drink. We use only the freshest fruits and never add artificial sweeteners or preservatives.'
  },
  {
    id: 3,
    name: 'Tiki Tacos',
    description: 'Fusion tacos with tropical flavors and fresh ingredients.',
    image: '/product-placeholder-6.jpg',
    price: '$10.99',
    details: 'Our Tiki Tacos feature soft corn tortillas filled with grilled pineapple, marinated protein of your choice, and topped with a tangy mango salsa. It\'s a perfect blend of savory and sweet flavors.'
  },
  {
    id: 4,
    name: 'Tropical Acai Bowl',
    description: 'Nutrient-rich acai bowl topped with fresh fruits and coconut flakes.',
    image: '/product-placeholder-7.jpg',
    price: '$11.99',
    details: 'Our Tropical Acai Bowl starts with a base of blended acai berries and is topped with fresh fruits, coconut flakes, and a drizzle of honey. It\'s packed with antioxidants and makes for a perfect healthy meal.'
  },
  {
    id: 5,
    name: 'Hawaiian Poke Bowl',
    description: 'Fresh fish or tofu with rice, vegetables, and tropical dressing.',
    image: '/product-placeholder-8.jpg',
    price: '$13.99',
    details: 'Our Hawaiian Poke Bowl features your choice of fresh fish or tofu, served over rice with avocado, cucumber, and mango. It\'s dressed with our house-made tropical vinaigrette for a light and satisfying meal.'
  },
  {
    id: 6,
    name: 'Coconut Chia Pudding',
    description: 'Creamy chia pudding made with coconut milk and topped with tropical fruits.',
    image: '/product-placeholder-9.jpg',
    price: '$8.49',
    details: 'Our Coconut Chia Pudding is made with organic chia seeds soaked in coconut milk and topped with fresh tropical fruits. It\'s a nutritious and delicious option for breakfast or dessert.'
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
                src="/inspired-foods-landing/logos/wikki-logo.png" 
                alt="Wikki Hut Logo"
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
            src="/product-placeholder-5.jpg"
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

export default WikkiHut; 