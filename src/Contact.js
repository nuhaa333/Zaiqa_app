import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faConnectdevelop,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#fafafa" }}>
      <Grid container spacing={4}>
        {/* Info Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8 }} />
              Contact us - We’re just a map click away from delicious.
            </Typography>
            <Typography variant="body1" paragraph>
              We’d love to hear from you! Whether you’re craving your favorite dish,
              planning a celebration, or just want to say hello — we’re here for it.
            </Typography>
            <Typography variant="body1" paragraph>
              📍 Restaurant Name: <strong>Zaiqa – The Taste of Tradition</strong>
            </Typography>
            <Typography variant="body1" paragraph>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: 6 }} />
              Opening Hours: 11:00 AM – 12:00 AM | Open 7 Days a Week
            </Typography>
            <Typography variant="body1">
              📞 Phone: <strong>+91 9791581728</strong>
            </Typography>
          </Paper>

          {/* Social Section */}
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              <FontAwesomeIcon icon={faConnectdevelop} style={{ marginRight: 8 }} />
              Follow Zaiqa on Social Media
            </Typography>
            <Typography variant="body2" paragraph>
              Stay updated on our latest dishes, offers, and behind-the-scenes fun!
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                component="a"
                href="https://facebook.com/zaiqaofficial"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com/zaiqathetaste"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/zaiqa_taste"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ height: "100%", p: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995383.0193473473!2d76.39639897812502!3d12.958095000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae142e3770e5c9%3A0x85a45f4267b7145e!2sZaiqa%20Restaurant!5e0!3m2!1sen!2sin!4v1744639903439!5m2!1sen!2sin"
              width="100%"
              height={isSmall ? "300" : "450"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zaiqa Restaurant Location"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
