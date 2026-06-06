import { Box, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

interface Partner {
  name: string;
  logo: string;
  href: string | null;
  invert?: boolean;
  scale?: number;
}

const GENERAL_PARTNERS: Partner[] = [
  { name: "Калинов родник", logo: "/images/zabeg_2026/partners/general_partners/kalinov_rodnik.png", href: "https://kalinovrodnik.ru", scale: 2.7 },
  { name: "Калинов родничок", logo: "/images/zabeg_2026/partners/general_partners/kalinov_rodnichek.png", href: "https://kalinovrodnik.ru/produkcziya/kalinov-rodnichok-dlya-samykh-malenkikh", scale: 1.8 },
  { name: "GLS", logo: "/images/zabeg_2026/partners/general_partners/gls.png", href: "https://gls.store" },
  { name: "EMI", logo: "/images/zabeg_2026/partners/general_partners/emi.png", href: "https://emi-shop.ru", scale: 1.4 },
  { name: "SYNERGETIC", logo: "/images/zabeg_2026/partners/general_partners/synergetic.png", href: "https://synergetic.ru/" },
  { name: "PINK BUS", logo: "/images/zabeg_2026/partners/general_partners/pink_bus.png", href: "https://www.pinkbus.ru" },
  { name: "ТАЙРАЙ", logo: "/images/zabeg_2026/partners/general_partners/tairai.png", href: "https://tairai.ru/", scale: 2.8 },
  { name: "ГЕРКУЛЕС", logo: "/images/zabeg_2026/partners/general_partners/gerkules.svg", href: "https://www.mir-foods.com" },
  { name: "Kerasys", logo: "/images/zabeg_2026/partners/general_partners/kerasys.png", href: "https://kerasys.ru/", scale: 1.0 },
  { name: "ФИНИК", logo: "/images/zabeg_2026/partners/general_partners/finnik.png", href: "https://vk.ru/finnick_movie", invert: true },
  { name: "Сварщица Екатерина", logo: "/images/zabeg_2026/partners/general_partners/welder.svg", href: "https://theweldercatherine.ru" },
];

const GENERAL_INFO_PARTNERS: Partner[] = [
  { name: "Национальная служба новостей", logo: "/images/zabeg_2026/partners/general_info_partners/nsn.png", href: "https://nsn.fm/", scale: 1.6 },
];

const INFO_PARTNERS: Partner[] = [
  { name: "Емаил спорт", logo: "/images/zabeg_2026/partners/info_partners/email_sport.png", href: "https://sportmail.ru" },
  { name: "Максим", logo: "/images/zabeg_2026/partners/info_partners/maxim.png", href: "https://www.maximonline.ru" },
  { name: "PARENTS.RU", logo: "/images/zabeg_2026/partners/info_partners/parents.png", href: "https://www.parents.ru/" },
];

const LogoGrid: FC<{ partners: Partner[]; boxSize?: { w: string; h: string } }> = ({
  partners,
  boxSize = { w: "140px", h: "64px" },
}) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: { xs: "20px", md: "32px" },
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {partners.map(({ name, logo, href, invert, scale }) => {
      const imgSx = {
        width: "100%",
        height: "100%",
        objectFit: "contain" as const,
        filter: invert ? "invert(1)" : "none",
        transform: scale ? `scale(${scale})` : undefined,
      };
      const containerSx = {
        width: boxSize.w,
        height: boxSize.h,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      };
      return href ? (
        <Box
          key={name}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ...containerSx, opacity: 0.85, transition: "opacity 0.15s", "&:hover": { opacity: 1 } }}
        >
          <Box component="img" src={logo} alt={name} sx={imgSx} />
        </Box>
      ) : (
        <Box key={name} sx={{ ...containerSx, opacity: 0.65 }}>
          <Box component="img" src={logo} alt={name} sx={imgSx} />
        </Box>
      );
    })}
  </Box>
);

const Partners: FC = () => {
  const md = useMediaQuery("(min-width:1100px)");

  const px = { xs: "20px", sm: "40px", lg: "100px" };
  const titleSx = {
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Mossport",
    color: "#0F2572",
    fontSize: md ? "64px" : "36px",
    lineHeight: 1,
    mb: { xs: "28px", md: "40px" },
  };

  return (
    <Box id="park" bgcolor="#FFFFFF">
      <Box px={px} pt={{ xs: "48px", md: "72px" }} pb={{ xs: "40px", md: "56px" }}>
        <Typography sx={titleSx}>Партнеры</Typography>
        <LogoGrid partners={GENERAL_PARTNERS} boxSize={{ w: md ? "180px" : "130px", h: md ? "80px" : "60px" }} />
      </Box>

      <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.08)", mx: px }} />

      <Box px={px} py={{ xs: "40px", md: "56px" }}>
        <Typography sx={titleSx}>Генеральный информационный партнер</Typography>
        <LogoGrid partners={GENERAL_INFO_PARTNERS} boxSize={{ w: md ? "220px" : "160px", h: md ? "90px" : "68px" }} />
      </Box>

      <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.08)", mx: px }} />

      <Box px={px} pt={{ xs: "40px", md: "56px" }} pb={{ xs: "56px", md: "80px" }}>
        <Typography sx={titleSx}>Информационные партнеры</Typography>
        <LogoGrid partners={INFO_PARTNERS} boxSize={{ w: md ? "180px" : "130px", h: md ? "72px" : "56px" }} />
      </Box>
    </Box>
  );
};

export default Partners;
