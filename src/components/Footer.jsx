import React from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#282c34", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              We are dedicated to providing the best services and solutions to our customers.
            </Typography>
          </Grid>

          {/* Column 2: Useful Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="/about" color="inherit" underline="hover" display="block">
              About Us
            </Link>
            <Link href="/services" color="inherit" underline="hover" display="block">
              Services
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Contact Us
            </Link>
            <Link href="/privacy" color="inherit" underline="hover" display="block">
              Privacy Policy
            </Link>
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Email: contact@augmetic.in
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Phone: 01169272643
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            2, Panchani Chambers, Drive in Cinema, Drive In Rd, above Central Bank, Ahmedabad, Gujarat 380015
            </Typography>
          </Grid>

          {/* Column 4: Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            Copyright © 2019 Augmetic Infinite LLP. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
