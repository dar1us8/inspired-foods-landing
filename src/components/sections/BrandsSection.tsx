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

// Sample brand data
const brandCategories = [
  {
    category: 'California Thai',
    products: [
      {
        id: 1,
        name: 'Thai Green Curry',
        description: 'Authentic Thai green curry with fresh vegetables and aromatic herbs.',
        image: '/product-placeholder-1.jpg',
        price: '$12.99'
      },
      {
        id: 2,
        name: 'Pad Thai',
        description: 'Classic Pad Thai with rice noodles, vegetables, and our signature sauce.',
        image: '/product-placeholder-2.jpg',
        price: '$11.49'
      },
      {
        id: 3,
        name: 'Mango Sticky Rice',
        description: 'Sweet sticky rice with fresh mango, a traditional Thai dessert.',
        image: '/product-placeholder-3.jpg',
        price: '$8.99'
      }
    ]
  },
  {
    category: 'Wikki Hut',
    products: [
      {
        id: 4,
        name: 'Coconut Bowl',
        description: 'Tropical-inspired bowl with fresh fruits, coconut, and granola.',
        image: '/product-placeholder-4.jpg',
        price: '$9.99'
      },
      {
        id: 5,
        name: 'Island Smoothie',
        description: 'Refreshing smoothie with tropical fruits and coconut water.',
        image: '/product-placeholder-5.jpg',
        price: '$7.49'
      },
      {
        id: 6,
        name: 'Tiki Tacos',
        description: 'Fusion tacos with tropical flavors and fresh ingredients.',
        image: '/product-placeholder-6.jpg',
        price: '$10.99'
      }
    ]
  },
  {
    category: 'Eat Canteen',
    products: [
      {
        id: 7,
        name: 'Harvest Bowl',
        description: 'Nutritious bowl with seasonal vegetables, grains, and protein.',
        image: '/product-placeholder-7.jpg',
        price: '$11.99'
      },
      {
        id: 8,
        name: 'Superfood Salad',
        description: 'Nutrient-packed salad with kale, quinoa, and superfoods.',
        image: '/product-placeholder-8.jpg',
        price: '$10.99'
      },
      {
        id: 9,
        name: 'Power Sandwich',
        description: 'Hearty sandwich with whole grain bread, lean protein, and vegetables.',
        image: '/product-placeholder-9.jpg',
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

        <Grid container spacing={4}>
          {brandCategories[tabValue].products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" color="primary.main" fontWeight={600}>
                        {product.price}
                      </Typography>
                      <Button variant="outlined" color="primary">
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