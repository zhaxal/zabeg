import Cover from "@/components/Cover";
import Description from "@/components/Description";
import Distance from "@/components/Distance";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Navbar from "@/components/Navbar";
import Park from "@/components/Park";
import Photo from "@/components/Photo";
import Schedule from "@/components/Schedule";
import Video from "@/components/Video";
import {
  Alert,
  Box,
  Container,
  CssBaseline,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return <Alert severity="warning">Сайт в разработке</Alert>;

  // return (
  //   <>
  //     <Navbar />
  //     {matches && (
  //       <Container maxWidth="lg">
  //         <Cover />
  //         <Description />
  //         <Distance />
  //         <Schedule />
  //         <Video />
  //         <Guide />
  //         <Park />
  //         <Photo />
  //         <Box
  //           sx={{
  //             backgroundImage: "url(/images/block.svg)",
  //             backgroundRepeat: "no-repeat",
  //             backgroundPosition: "center",
  //             backgroundSize: "cover",
  //             minHeight: 297,
  //           }}
  //         />
  //         <Footer />
  //       </Container>
  //     )}
  //     {!matches && (
  //       <Box
  //         sx={{
  //           borderCollapse: "collapse",
  //         }}
  //       >
  //         <Cover />
  //         <Description />
  //         <Distance />
  //         <Schedule />
  //         <Video />
  //         <Guide />
  //         <Park />
  //         <Photo />
  //         <Box
  //           sx={{
  //             backgroundImage: "url(/images/block.svg)",
  //             backgroundRepeat: "no-repeat",
  //             backgroundPosition: "center",
  //             backgroundSize: "cover",
  //             minHeight: 297,
  //           }}
  //         />
  //         <Footer />
  //         {/*

  //       <Box
  //         sx={{
  //           backgroundImage: "url(/images/block.svg)",
  //           backgroundRepeat: "no-repeat",
  //           backgroundPosition: "center",
  //           backgroundSize: "cover",
  //           minHeight: 297,
  //         }}
  //       />
  //       <Footer /> */}
  //       </Box>
  //     )}
  //   </>
  // );
}
