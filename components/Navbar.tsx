import { handleScrollToElement } from "@/utils/scroll";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { FC } from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar: FC = () => {
  return (
    <HideOnScroll>
      <AppBar sx={{ background: "none", boxShadow: "none" }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ background: "#0F2572", height: "96px" }}>
            <Stack
              width="100%"
              alignItems="center"
              spacing="48px"
              direction="row"
              justifyContent="flex-end"
              mx="60px"
            >
              <Typography
                onClick={handleScrollToElement("distance")}
                sx={{
                  fontFamily: "Mossport",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                ДИСТАНЦИИ
              </Typography>
              <Typography
                onClick={handleScrollToElement("schedule")}
                sx={{
                  fontFamily: "Mossport",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                ПРОГРАММА
              </Typography>
              <Typography
                onClick={handleScrollToElement("guide")}
                sx={{
                  fontFamily: "Mossport",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                УСЛОВИЯ
              </Typography>
              <Typography
                onClick={handleScrollToElement("park")}
                sx={{
                  fontFamily: "Mossport",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                ПЛОЩАДКИ
              </Typography>
              <Typography
                onClick={handleScrollToElement("photo")}
                sx={{
                  fontFamily: "Mossport",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                ФОТО
              </Typography>
              <Typography
                onClick={handleScrollToElement("footer")}
                sx={{
                  fontFamily: "Mossport",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                КОНТАКТЫ
              </Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
