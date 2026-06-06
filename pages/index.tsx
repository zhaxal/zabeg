import Cover from "@/components/Cover";
import Description from "@/components/Description";
import Distance from "@/components/Distance";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Navbar from "@/components/Navbar";
import Park from "@/components/Park";
import Photo from "@/components/Photo";
import Schedule from "@/components/Schedule";
import { Box, Container, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const backgroundBlock = {
  backgroundImage: "url(/images/block.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: 297,
};

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box bgcolor="#d5ebff">
      <CssBaseline />
      <Navbar />
      {matches ? (
        <Container maxWidth="lg">
          <Cover />
          <Description />
          <Distance />
          <Schedule />
          <Guide />
          <Park />
          <Photo />
          <Box sx={backgroundBlock} />
          <Footer />
        </Container>
      ) : (
        <Box>
          <Cover />
          <Description />
          <Distance />
          <Schedule />
          <Guide />
          <Park />
          <Photo />
          <Box sx={backgroundBlock} />
          <Footer />
        </Box>
      )}
    </Box>
  );
}
