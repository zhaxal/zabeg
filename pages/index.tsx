import Cover from "@/components/Cover";
import Description from "@/components/Description";
import Distance from "@/components/Distance";
import Guide from "@/components/Guide";
import Park from "@/components/Park";
import Schedule from "@/components/Schedule";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Cover />
      <Description />
      <Distance />
      <Schedule />
      <Guide />
      <Park />
    </Container>
  );
}
