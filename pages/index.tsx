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
  Paper,
  Typography,
  Button,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [cookieAccepted, setCookieAccepted] = useState(true); // Default to true to prevent flash on first render

  useEffect(() => {
    // Check localStorage only on client-side
    const acceptedStatus = localStorage.getItem("cookieAccepted");
    setCookieAccepted(acceptedStatus === "true");
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setCookieAccepted(true);
  };

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

  //     {/* Cookie Banner */}
  //     {!cookieAccepted && (
  //       <Paper
  //         elevation={3}
  //         sx={{
  //           position: "fixed",
  //           bottom: 0,
  //           left: 0,
  //           right: 0,
  //           padding: 2,
  //           display: "flex",
  //           justifyContent: "space-between",
  //           alignItems: "center",
  //           zIndex: 9999,
  //           backgroundColor: theme.palette.primary.main,
  //           color: theme.palette.primary.contrastText,
  //         }}
  //       >
  //         <Typography variant="body2">
  //           Мы используем файлы cookie, чтобы улучшить ваш опыт работы на нашем
  //           сайте. Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
  //           <Link
  //             href="/files/privacy.pdf"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             sx={{
  //               color: "#F89C43",
  //               textDecoration: "underline",
  //               "&:hover": {
  //                 color: theme.palette.secondary.light,
  //               },
  //             }}
  //           >
  //             политикой обработки персональных данных.
  //           </Link>
  //         </Typography>
  //         <Button
  //           variant="contained"
  //           color="secondary"
  //           onClick={handleAcceptCookies}
  //         >
  //           Принять
  //         </Button>
  //       </Paper>
  //     )}
  //   </>
  // );
}
