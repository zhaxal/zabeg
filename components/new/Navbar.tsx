import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  useScrollTrigger,
  Slide,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
  MenuItemProps,
  Box,
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
        fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "28px" },
        color: "#0F2572",
        lineHeight: 1.2,
        py: { xs: 1, md: 1.5 },
        px: { xs: 2, md: 3 },
      }}
    >
      {children}
    </MenuItem>
  );
};

const DesktopNavbar: FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

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

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toolbar = (
        <Toolbar
            sx={{
              backgroundColor: "white",
              height: {
                xs: "80px",
                md: "96px",
                lg: "112px",
              },
            }}
          >
            <Stack
              width="100%"
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
              spacing={{ xs: "16px", sm: "20px", md: "24px", lg: "48px" }}
            >
              <Box
                component="img"
                src="/images/zabeg_2026/zabeg_logo.svg"
                sx={{
                  height: { xs: "50px", sm: "56px", md: "68px", lg: "90px" },
                }}
              />

              <Box
                component="a"
                target="_blank"
                href="https://mosgorsport.ru/"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/zabeg_2026/mgs.svg"
                  sx={{ height: { md: "36px", lg: "48px" } }}
                />
              </Box>

              <Box
                component="a"
                target="_blank"
                href="https://sport.moscow"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/zabeg_2026/ms.svg"
                  sx={{ height: { md: "36px", lg: "48px" } }}
                />
              </Box>

              <Box
                component="a"
                target="_blank"
                href="https://www.mos.ru/moskomsport/"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/zabeg_2026/dep.svg"
                  sx={{ height: { sm: "36px", md: "36px", lg: "48px" } }}
                />
              </Box>

              <Stack
                width="100%"
                alignItems="center"
                direction="row"
                justifyContent="flex-end"
              >
                <IconButton
                  onClick={handleClick}
                  size="large"
                  sx={{ color: "#0F2572" }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
              <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                <CustomMenuItem onClick={handleClose("schedule")}>
                  РАСПИСАНИЕ
                </CustomMenuItem>
                <CustomMenuItem onClick={handleClose("distances")}>
                  ДИСТАНЦИИ
                </CustomMenuItem>
                <CustomMenuItem onClick={handleClose("routes")}>
                  МАРШРУТЫ
                </CustomMenuItem>
                <CustomMenuItem onClick={handleClose("guide")}>
                  УСЛОВИЯ
                </CustomMenuItem>
                <CustomMenuItem onClick={handleClose("photo")}>
                  ФОТО
                </CustomMenuItem>
                <CustomMenuItem onClick={handleClose("footer")}>
                  КОНТАКТЫ
                </CustomMenuItem>
              </Menu>
            </Stack>
          </Toolbar>
  );

  return (
    <HideOnScroll>
      <AppBar sx={{ background: "none", boxShadow: "none" }}>
        {isDesktop ? (
          <Container maxWidth="lg">{toolbar}</Container>
        ) : (
          toolbar
        )}
      </AppBar>
    </HideOnScroll>
  );
};

const Navbar: FC = () => {
  return <>{<DesktopNavbar />}</>;
};

export default Navbar;
