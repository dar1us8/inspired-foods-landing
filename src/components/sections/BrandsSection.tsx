import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Tabs,
  Tab,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Sample brand data
const brandCategories = [
  {
    category: 'California Thai',
    route: '/brands/california-thai',
    description: 'Authentic Thai cuisine with a California twist, using fresh, locally-sourced ingredients',
    image: '/inspired-foods-landing/product-placeholder-1.jpg',
    logo: '/inspired-foods-landing/logos/california-thai-logo.png',
    products: [
      {
        id: 1,
        name: 'Thai Green Curry',
        description: 'Authentic Thai green curry with fresh vegetables and aromatic herbs.',
        image: '/inspired-foods-landing/product-placeholder-1.jpg',
        price: '$12.99'
      },
      {
        id: 2,
        name: 'Pad Thai',
        description: 'Classic Pad Thai with rice noodles, vegetables, and our signature sauce.',
        image: '/inspired-foods-landing/product-placeholder-2.jpg',
        price: '$11.49'
      },
      {
        id: 3,
        name: 'Mango Sticky Rice',
        description: 'Sweet sticky rice with fresh mango, a traditional Thai dessert.',
        image: '/inspired-foods-landing/product-placeholder-3.jpg',
        price: '$8.99'
      }
    ]
  },
  {
    category: 'Wikki Hut',
    route: '/brands/wikki-hut',
    description: 'Tropical-inspired healthy foods and beverages that bring the island vibes to your day',
    image: '/inspired-foods-landing/product-placeholder-4.jpg',
    logo: '/inspired-foods-landing/logos/wikki-logo.png',
    products: [
      {
        id: 4,
        name: 'Coconut Bowl',
        description: 'Tropical-inspired bowl with fresh fruits, coconut, and granola.',
        image: '/inspired-foods-landing/product-placeholder-4.jpg',
        price: '$9.99'
      },
      {
        id: 5,
        name: 'Island Smoothie',
        description: 'Refreshing smoothie with tropical fruits and coconut water.',
        image: '/inspired-foods-landing/product-placeholder-5.jpg',
        price: '$7.49'
      },
      {
        id: 6,
        name: 'Tiki Tacos',
        description: 'Fusion tacos with tropical flavors and fresh ingredients.',
        image: '/inspired-foods-landing/product-placeholder-6.jpg',
        price: '$10.99'
      }
    ]
  },
  {
    category: 'Eat Canteen',
    route: '/brands/eat-canteen',
    description: 'Nutritious, wholesome meals designed to fuel your active lifestyle',
    image: '/inspired-foods-landing/product-placeholder-7.jpg',
    logo: '/inspired-foods-landing/logos/canteen-logo.png',
    products: [
      {
        id: 7,
        name: 'Harvest Bowl',
        description: 'Nutritious bowl with seasonal vegetables, grains, and protein.',
        image: '/inspired-foods-landing/product-placeholder-7.jpg',
        price: '$11.99'
      },
      {
        id: 8,
        name: 'Superfood Salad',
        description: 'Nutrient-packed salad with kale, quinoa, and superfoods.',
        image: '/inspired-foods-landing/product-placeholder-8.jpg',
        price: '$10.99'
      },
      {
        id: 9,
        name: 'Power Sandwich',
        description: 'Hearty sandwich with whole grain bread, lean protein, and vegetables.',
        image: '/inspired-foods-landing/product-placeholder-9.jpg',
        price: '$9.49'
      }
    ]
  }
];

const BrandsSection: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box 
      id="brands" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.paper
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
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

        <Box sx={{ mb: 6 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 500,
                fontSize: '1rem',
                px: 3
              }
            }}
          >
            {brandCategories.map((category, index) => (
              <Tab key={index} label={category.category} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ mb: 6 }}>
          <motion.div
            key={tabValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
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
                image={brandCategories[tabValue].image}
                alt={brandCategories[tabValue].category}
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
                <Box
                  component="img"
                  src={brandCategories[tabValue].logo}
                  alt={`${brandCategories[tabValue].category} Logo`}
                  sx={{
                    maxWidth: '200px',
                    height: 'auto',
                    mb: 3,
                    margin: '0 auto'
                  }}
                />
                <Typography variant="h3" component="h3" gutterBottom fontWeight={600} sx={{ width: '100%', textAlign: 'center' }}>
                  {brandCategories[tabValue].category}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, width: '100%', textAlign: 'center' }}>
                  {brandCategories[tabValue].description}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%',
                  mx: 'auto'
                }}>
                  <Button
                    component={RouterLink}
                    to={brandCategories[tabValue].route}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Explore {brandCategories[tabValue].category}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {brandCategories[tabValue].products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                        component={RouterLink}
                        to={brandCategories[tabValue].route}
                        variant="outlined" 
                        color="primary"
                        sx={{ minWidth: '120px' }}
                      >
                        Learn More
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
            to="/brands"
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Explore All Brands
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandsSection; 