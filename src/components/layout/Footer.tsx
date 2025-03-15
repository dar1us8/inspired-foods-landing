import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  useTheme
} from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper',
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              Inspired Foods
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Nourishing communities with sustainable, 
              innovative food solutions that inspire 
              healthier living and a better planet.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Company
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {['About Us', 'Our Team', 'Careers', 'News'].map((item) => (
                <Box component="li" key={item} sx={{ py: 0.5 }}>
                  <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Our Brands
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {['California Thai', 'Wikki Hut', 'Eat Canteen', 'Brand Stories'].map((item) => (
                <Box component="li" key={item} sx={{ py: 0.5 }}>
                  <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Support
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {['Contact Us', 'FAQs', 'Distributors', 'Privacy Policy'].map((item) => (
                <Box component="li" key={item} sx={{ py: 0.5 }}>
                  <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Green Avenue
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Eco City, EC 12345
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              info@inspiredfoods.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +1 (555) 123-4567
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 3 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Inspired Foods Incorporated. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 