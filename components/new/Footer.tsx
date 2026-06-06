import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const NAV_LINKS = [
  { label: "О забеге", id: "description" },
  { label: "Дистанции", id: "distances" },
  { label: "Маршруты", id: "routes" },
  { label: "Расписание", id: "schedule" },
  { label: "Как принять участие", id: "guide" },
  { label: "Важные документы", id: "documents" },
  { label: "Галерея", id: "photo" },
  { label: "Партнеры", id: "park" },
  { label: "Контакты", id: "footer" },
];

const SOCIAL = [
  { label: "ВК", href: "https://vk.ru/mosgorsportvk", icon: "/images/icons/vk.svg" },
  { label: "ТГ", href: "https://t.me/mosgorsportmoscow", icon: "/images/icons/telegram.svg" },
  {
    label: "MAX",
    href: "https://vk.com/away.php?to=https%3A%2F%2Fmax.ru%2Fjoin%2FndyBrzFs_zH8dKS0vT80OPL7UJQIuuGaR71XtK32To8&utf=1",
    icon: null,
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el)
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 96,
      behavior: "smooth",
    });
};

const Footer: FC = () => {
  const theme = useTheme();
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const px = { xs: "16px", sm: "24px", md: "40px" };

  return (
    <Box id="footer" bgcolor="#FFFFFF">
      {/* Main content: logos left, nav+contacts right */}
      <Box
        px={px}
        pt={sm ? "56px" : "40px"}
        pb={sm ? "48px" : "32px"}
        sx={{
          display: "flex",
          flexDirection: sm ? "row" : "column",
          gap: sm ? "48px" : "36px",
          alignItems: sm ? "flex-start" : "stretch",
        }}
      >
        {/* Left: logos */}
        <Stack spacing="24px" flexShrink={0}>
          <Box
            component="img"
            src="/images/zabeg_2026/zabeg_logo_blue.svg"
            sx={{ height: { xs: "72px", sm: "88px", md: "108px" } }}
            alt="На Старт"
          />

          <Stack direction="row" spacing="20px" alignItems="center">
            <Box
              component="a"
              target="_blank"
              href="https://www.mos.ru/moskomsport/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src="/images/zabeg_2026/dep.svg"
                sx={{ height: { xs: "28px", sm: "32px", md: "36px" } }}
                alt="Департамент спорта"
              />
            </Box>
            <Box
              component="a"
              target="_blank"
              href="https://sport.moscow/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src="/images/zabeg_2026/ms.svg"
                sx={{ height: { xs: "28px", sm: "32px", md: "36px" } }}
                alt="Московский Спорт"
              />
            </Box>
            <Box
              component="a"
              target="_blank"
              href="https://mosgorsport.ru/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src="/images/zabeg_2026/mgs.svg"
                sx={{ height: { xs: "28px", sm: "32px", md: "36px" } }}
                alt="Мосгорспорт"
              />
            </Box>
          </Stack>
        </Stack>

        {/* Right: nav + contacts */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: md ? "row" : "column",
            gap: md ? "48px" : "32px",
            justifyContent: "space-between",
          }}
        >
          {/* Navigation */}
          <Box>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.4)",
                mb: "12px",
              }}
            >
              Навигация
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, auto)",
                columnGap: "40px",
                rowGap: "2px",
                justifyContent: "start",
              }}
            >
              {NAV_LINKS.map(({ label, id }) => (
                <Typography
                  key={id}
                  component="button"
                  onClick={() => scrollTo(id)}
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontSize: md ? "15px" : "14px",
                    color: "rgba(0,0,0,0.7)",
                    lineHeight: "1.9",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    p: 0,
                    "&:hover": { color: "#0461B5", textDecoration: "underline" },
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Contacts + social */}
          <Stack spacing="24px">
            <Stack spacing="8px">
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                Контакты
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontSize: md ? "15px" : "14px",
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: "1.5",
                  maxWidth: "260px",
                }}
              >
                Если у вас есть вопросы, вы можете оставить их по почте{" "}
                <Box
                  component="a"
                  href="mailto:pr@mosgorsport.ru"
                  sx={{ color: "#0461B5", textDecoration: "underline" }}
                >
                  pr@mosgorsport.ru
                </Box>
              </Typography>
            </Stack>

            {/* Social */}
            <Stack spacing="10px">
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                Соцсети
              </Typography>
              <Stack direction="row" spacing="12px">
                {SOCIAL.map(({ label, href, icon }) => (
                  <Box
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      bgcolor: "#0461B5",
                      "&:hover": { bgcolor: "#0350a0" },
                      textDecoration: "none",
                      flexShrink: 0,
                    }}
                  >
                    {icon ? (
                      <Box
                        component="img"
                        src={icon}
                        sx={{ width: "22px", height: "22px", filter: "brightness(0) invert(1)" }}
                        alt={label}
                      />
                    ) : (
                      <Typography
                        sx={{
                          fontFamily: "Gotham Pro Bold",
                          fontSize: "11px",
                          color: "#FFFFFF",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {label}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.1)", mx: px }} />

      {/* Legal */}
      <Box px={px} py="20px">
        <Typography
          sx={{
            fontFamily: "Gotham Pro Light",
            fontSize: sm ? "13px" : "12px",
            color: "rgba(0,0,0,0.4)",
            lineHeight: "1.6",
          }}
        >
          Государственное бюджетное учреждение города Москвы «Московская дирекция по развитию массового спорта» Департамента спорта города Москвы (ГБУ «МОСГОРСПОРТ» Москомспорта)
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
