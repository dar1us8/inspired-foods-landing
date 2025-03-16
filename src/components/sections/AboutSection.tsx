import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

// Define features without icons for now
const features = [
  {
    title: 'Sustainable Sourcing',
    description: 'We partner with local farmers who share our commitment to sustainable and ethical practices.'
  },
  {
    title: 'Health-Focused',
    description: 'Our brands are designed to provide optimal nutrition without compromising on taste.'
  },
  {
    title: 'Eco-Friendly Packaging',
    description: 'We use biodegradable and recyclable materials to minimize our environmental footprint.'
  }
];

const AboutSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      id="about" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box
                component="img"
                src="/about-image-placeholder.jpg"
                alt="About Inspired Foods"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  margin: '0 auto'
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  color: 'text.primary',
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                Our Mission
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 4 }}
              >
                Food is subjective to people's taste, but no one can deny that preparing it is a craft that takes a certain degree of dedication and passion.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 4 }}
              >
                It is because of our passion and dedication that Inspired Foods Incorporated has over 40 years of combined service industry experience. Our business is to deliver worldly cuisines through branded restaurants and our goal is to continuously provide patrons with authentic dishes that are enriched with culture, tradition and a modern flare. We are dedicated to becoming an industry leader by maintaining an exceptional standard of quality, service and authenticity.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h3" 
              align="center" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                mb: 6
              }}
            >
              What Sets Us Apart
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      bgcolor: 'background.paper',
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection; 