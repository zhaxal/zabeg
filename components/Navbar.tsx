import { handleScrollToElement } from "@/utils/scroll";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Container,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
  MenuItemProps,
} from "@mui/material";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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

const CustomMenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  return (
    <MenuItem
      {...props}
      sx={{
        fontFamily: "Mossport",
        fontSize: "32px",
        color: "#0F2572",
        lineHeight: "32px",
      }}
    >
      {children}
    </MenuItem>
  );
};

const DesktopNavbar: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id: string) => () => {
    const scrollTargetElement = document.getElementById(id);
    const yOffset = -50;

    if (scrollTargetElement) {
      const y =
        scrollTargetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y - 96, behavior: "smooth" });
    }
    setAnchorEl(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HideOnScroll>
      <AppBar sx={{ background: "none", boxShadow: "none" }}>
        {md && (
          <Container maxWidth="lg">
            <Toolbar sx={{ background: "#0F2572", height: "96px" }}>
              <Stack
                width="100%"
                alignItems="center"
                spacing={matches ? "48px" : "24px"}
                direction="row"
                justifyContent="flex-end"
                mx={matches ? "60px" : "30px"}
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
        )}

        {!md && (
          <Toolbar sx={{ background: "#0F2572", height: "96px" }}>
            <Stack
              width="100%"
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
            >
              <IconButton
                onClick={handleClick}
                size="large"
                sx={{ color: "#FFFFFF" }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <CustomMenuItem onClick={handleClose("distance")}>
                ДИСТАНЦИИ
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose("schedule")}>
                ПРОГРАММА
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose("guide")}>
                УСЛОВИЯ
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose("park")}>
                ПЛОЩАДКИ
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose("photo")}>
                ФОТО
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose("footer")}>
                КОНТАКТЫ
              </CustomMenuItem>
            </Menu>
          </Toolbar>
        )}
      </AppBar>
    </HideOnScroll>
  );
};

const Navbar: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return <>{<DesktopNavbar />}</>;
};

export default Navbar;
