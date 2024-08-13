import React from "react";
import { Button, Typography, Container, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import eLearning from "../../../Assests/E-learning-Portal-Development-01.png";
import "./Main.css"; // Ensure styles are applied from this path

const Main = () => {
  const navigate = useNavigate();

  // React Spring animations
  const headingProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });
  const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000, config: { duration: 1500 } });

  return (
    <Container maxWidth="lg" className="main-container" sx={{ padding: { xs: 3, md: 6 } }}>
      <Grid container spacing={6} alignItems="center" sx={{marginLeft:"100px",marginTop:"100px"}}>
        {/* Left Side Content */}
        <Grid item xs={12} md={6}>
          <Box className="main-content">
            <Typography variant="h2" align="left" className="main-header" gutterBottom>
              <animated.div style={headingProps}>
                <SchoolIcon fontSize="large" className="icon-header" /> Welcome to Jackson Academy
              </animated.div>
            </Typography>
            <Typography variant="h5" align="left" className="main-subheading" paragraph>
              Learning how to learn is life’s most important skill
            </Typography>
            <Typography variant="body1" align="left" className="main-paragraph" paragraph>
              Explore our diverse range of courses designed to help you master the skills you need for the future. Our e-learning platform offers interactive content, expert instructors, and a comprehensive learning experience tailored for your success.
            </Typography>
            <animated.div style={buttonProps}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="start-button"
                endIcon={<PlayCircleOutlineIcon />}
                onClick={() => navigate("/courses")}
              >
                Get Started
              </Button>
            </animated.div>
          </Box>
        </Grid>

        {/* Right Side Video */}
        <Grid item xs={12} md={6}>
          <Box className="media-container" sx={{ position: "relative" }}>
            <motion.div 
              className="background-video-wrapper"
              style={{ borderRadius: "8px", overflow: "hidden" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <video
                src={require("../../../Assests/learning-6760489-5577346.mp4")} // Local video file
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
