import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  LinearProgress,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const sustainabilityGoals = [
  {
    title: 'Carbon Neutral by 2025',
    description: 'We are committed to achieving carbon neutrality across our entire supply chain by 2025.',
    progress: 65,
  },
  {
    title: '100% Sustainable Packaging',
    description: 'We aim to use only recyclable, compostable, or biodegradable packaging materials.',
    progress: 80,
  },
  {
    title: 'Zero Food Waste',
    description: 'Our goal is to eliminate food waste in our production process through innovative solutions.',
    progress: 70,
  },
  {
    title: 'Renewable Energy',
    description: 'We are transitioning all our facilities to run on 100% renewable energy sources.',
    progress: 55,
  }
];

const SustainabilitySection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      id="sustainability" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper'
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
                Our Commitment to Sustainability
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 4 }}
              >
                At Inspired Foods, sustainability isn't just a buzzword—it's at the core of everything we do. We believe that the food industry has a responsibility to lead the way in creating a more sustainable future.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 4 }}
              >
                From our farming practices to our packaging choices, we're constantly looking for ways to reduce our environmental footprint while producing nutritious, delicious food that nourishes both people and planet.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="/sustainability-placeholder.jpg"
                alt="Sustainability at Inspired Foods"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              />
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
              Our Sustainability Goals
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {sustainabilityGoals.map((goal, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      bgcolor: 'background.default',
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
                        {goal.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {goal.description}
                      </Typography>
                      <Box sx={{ mt: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Progress
                          </Typography>
                          <Typography variant="body2" color="primary" fontWeight={600}>
                            {goal.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={goal.progress} 
                          sx={{ 
                            height: 8, 
                            borderRadius: 4,
                            backgroundColor: theme.palette.grey[200],
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                            }
                          }}
                        />
                      </Box>
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

export default SustainabilitySection; 