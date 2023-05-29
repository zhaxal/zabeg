import Cover from "@/components/Cover";
import Description from "@/components/Description";
import Distance from "@/components/Distance";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Navbar from "@/components/Navbar";
import Park from "@/components/Park";
import Photo from "@/components/Photo";
import Schedule from "@/components/Schedule";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Cover />
        <Description />
        <Distance />
        <Schedule />
        <Guide />
        <Park />
        <Photo />
        <Box
          sx={{
            backgroundImage: "url(/images/block.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: 297,
          }}
        />
        <Footer />
      </Container>
    </>
  );
}
