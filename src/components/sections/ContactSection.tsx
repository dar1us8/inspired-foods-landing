import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Card,
  CardContent,
  MenuItem,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const inquiryTypes = [
  'General Inquiry',
  'Brand Information',
  'Wholesale Opportunities',
  'Career Opportunities',
  'Media Inquiry'
];

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.default
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
            Get in Touch
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              mb: 8
            }}
          >
            Have questions or want to learn more about our brands? We'd love to hear from you.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom fontWeight={600}>
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Inquiry Type"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      {inquiryTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom fontWeight={600}>
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                You can also reach us using the information below.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card elevation={0} sx={{ bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}` }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Our Location
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          123 Green Avenue
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Eco City, EC 12345
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Card elevation={0} sx={{ bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}` }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Phone Number
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Main Office: +1 (555) 123-4567
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Customer Service: +1 (555) 987-6543
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Card elevation={0} sx={{ bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}` }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Email Address
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          General Inquiries: info@inspiredfoods.com
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Customer Support: support@inspiredfoods.com
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection; 