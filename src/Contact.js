import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  keyframes,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faConnectdevelop,
} from "@fortawesome/free-brands-svg-icons";

// Animation for fade-in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Animation for icon pulse
const pulse = keyframes`
  0%, 100% { transform: scale(1); color: #3a7bd5; }
  50% { transform: scale(1.1); color: #00d2ff; }
`;

const glassPaperStyles = {
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  color: "#f0f0f0",
  animation: `${fadeIn} 0.8s ease forwards`,
  p: { xs: 3, md: 4 },
};

const Contact = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="stretch"
        sx={{ minHeight: "75vh" }}
      >
        {/* Info Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={12} sx={glassPaperStyles}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                mb: 3,
                color: "#00d2ff",
                ttextShadow: "0 0 6pxrgb(4, 76, 92)",
              }}
            >
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: 12 }} />
              Contact us - We’re just a map click away from delicious.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ lineHeight: 1.6, color: "#e0e0e0" }}
            >
              We’d love to hear from you! Whether you’re craving your favorite
              dish, planning a celebration, or just want to say hello — we’re
              here for it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ lineHeight: 1.6, color: "#e0e0e0" }}
            >
              📍 Restaurant Name:{" "}
              <strong style={{ color: "#00d2ff" }}>
                Zaiqa – The Taste of Tradition
              </strong>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ display: "flex", alignItems: "center", color: "#e0e0e0" }}
            >
              <FontAwesomeIcon icon={faClock} style={{ marginRight: 8 }} />
              Opening Hours: 11:00 AM – 12:00 AM | Open 7 Days a Week
            </Typography>
            <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
              📞 Phone:{" "}
              <strong style={{ color: "#00d2ff" }}>+91 9791581728</strong>
            </Typography>
          </Paper>

          {/* Social Section */}
          <Paper
            elevation={12}
            sx={{ ...glassPaperStyles, mt: 5, animationDelay: "0.5s" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                mb: 2,
                color: "#00d2ff",
                textShadow: "0 0 6pxrgb(4, 76, 92)",
              }}
            >
              <FontAwesomeIcon
                icon={faConnectdevelop}
                style={{ marginRight: 12 }}
              />
              Follow Zaiqa on Social Media
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ color: "#c0c0c0", mb: 3, lineHeight: 1.5 }}
            >
              Stay updated on our latest dishes, offers, and behind-the-scenes
              fun!
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {[
                {
                  href: "https://facebook.com/zaiqaofficial",
                  icon: faFacebookF,
                  color: "#3b5998",
                },
                {
                  href: "https://instagram.com/zaiqathetaste",
                  icon: faInstagram,
                  color: "#E1306C",
                },
                {
                  href: "https://twitter.com/zaiqa_taste",
                  icon: faTwitter,
                  color: "#1DA1F2",
                },
              ].map(({ href, icon, color }) => (
                <IconButton
                  key={href}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#f0f0f0",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      color,
                      transform: "scale(1.2)",
                      animation: `${pulse} 1s ease infinite`,
                    },
                  }}
                  aria-label={`Visit our ${href.split(".")[1]} page`}
                >
                  <FontAwesomeIcon icon={icon} />
                </IconButton>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={12}
            sx={{
              ...glassPaperStyles,
              p: 1,
              animationDelay: "0.8s",
              height: "100%",
              display: "flex",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995383.0193473473!2d76.39639897812502!3d12.958095000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae142e3770e5c9%3A0x85a45f4267b7145e!2sZaiqa%20Restaurant!5e0!3m2!1sen!2sin!4v1744639903439!5m2!1sen!2sin"
              width="100%"
              height={isSmall ? "300" : "450"}
              style={{
                border: 0,
                borderRadius: "16px",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zaiqa Restaurant Location"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
 


















































// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Paper,
//   IconButton,
//   useTheme,
//   useMediaQuery,
//   Container,
// } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faInstagram,
//   faTwitter,
//   faConnectdevelop,
// } from "@fortawesome/free-brands-svg-icons";

// const Contact = () => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#fafafa" }}>
//       <Grid
//         container
//         spacing={4}
//         justifyContent="center"
//         alignItems="center"
//       >
//         {/* Info Section */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
//             <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
//               <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8 }} />
//               Contact us - We’re just a map click away from delicious.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               We’d love to hear from you! Whether you’re craving your favorite dish,
//               planning a celebration, or just want to say hello — we’re here for it.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               📍 Restaurant Name: <strong>Zaiqa – The Taste of Tradition</strong>
//             </Typography>
//             <Typography variant="body1" paragraph>
//               <FontAwesomeIcon icon={faClock} style={{ marginRight: 6 }} />
//               Opening Hours: 11:00 AM – 12:00 AM | Open 7 Days a Week
//             </Typography>
//             <Typography variant="body1">
//               📞 Phone: <strong>+91 9791581728</strong>
//             </Typography>
//           </Paper>

//           {/* Social Section */}
//           <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mt: 4 }}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//               <FontAwesomeIcon icon={faConnectdevelop} style={{ marginRight: 8 }} />
//               Follow Zaiqa on Social Media
//             </Typography>
//             <Typography variant="body2" paragraph>
//               Stay updated on our latest dishes, offers, and behind-the-scenes fun!
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <IconButton component="a" href="https://facebook.com/zaiqaofficial" target="_blank">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </IconButton>
//               <IconButton component="a" href="https://instagram.com/zaiqathetaste" target="_blank">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </IconButton>
//               <IconButton component="a" href="https://twitter.com/zaiqa_taste" target="_blank">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </IconButton>
//             </Box>
//           </Paper>
//         </Grid>

//         {/* Map Section */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 1, height: "100%" }}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995383.0193473473!2d76.39639897812502!3d12.958095000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae142e3770e5c9%3A0x85a45f4267b7145e!2sZaiqa%20Restaurant!5e0!3m2!1sen!2sin!4v1744639903439!5m2!1sen!2sin"
//               width="100%"
//               height={isSmall ? "300" : "450"}
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Zaiqa Restaurant Location"
//             ></iframe>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Contact;
