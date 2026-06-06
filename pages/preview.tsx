import Cover from "@/components/new/Cover";
import Description from "@/components/new/Description";
import DistanceCarousel from "@/components/new/DistanceCarousel";
import Route from "@/components/new/Route";
import Footer from "@/components/new/Footer";
import Documents from "@/components/new/Documents";
import Guide from "@/components/new/Guide";
import Navbar from "@/components/new/Navbar";
import Photo from "@/components/new/Photo";
import Schedule from "@/components/new/Schedule";
import {
  Box,
  Container,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Preview() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <CssBaseline />
      <Navbar />
      {matches ? (
        <Container maxWidth="lg">
          <Cover />
          <Description />
          <DistanceCarousel />
          <Route />
          <Schedule />
          <Guide />
          <Documents />
          <Photo />
          <Footer />
        </Container>
      ) : (
        <Box>
          <Cover />
          <Description />
          <DistanceCarousel />
          <Route />
          <Schedule />
          <Guide />
          <Documents />
          <Photo />
          <Footer />
        </Box>
      )}
    </>
  );
}
