"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";

const BLUE = "#0F2572";

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

const PER_PAGE = 5;

const LogoCell: FC<{ partner: Partner }> = ({ partner: { name, logo, href, invert, scale } }) => {
  const imgSx = {
    width: "100%",
    height: "100%",
    objectFit: "contain" as const,
    filter: invert ? "invert(1)" : "none",
    transform: scale ? `scale(${scale})` : undefined,
  };
  const cellSx = {
    height: { xs: "48px", sm: "60px", md: "72px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  };

  return href ? (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ ...cellSx, opacity: 0.85, transition: "opacity 0.15s", "&:hover": { opacity: 1 } }}
    >
      <Box component="img" src={logo} alt={name} sx={imgSx} />
    </Box>
  ) : (
    <Box sx={{ ...cellSx, opacity: 0.65 }}>
      <Box component="img" src={logo} alt={name} sx={imgSx} />
    </Box>
  );
};

const LogoCarousel: FC<{ partners: Partner[] }> = ({ partners }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(partners.length / PER_PAGE);
  const showArrows = totalPages > 1;
  const visible = partners.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const arrowSx = {
    flexShrink: 0,
    bgcolor: "rgba(15, 37, 114, 0.08)",
    "&:hover": { bgcolor: "rgba(15, 37, 114, 0.15)" },
    "&.Mui-disabled": { opacity: 0.3 },
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "8px", md: "12px" } }}>
      {showArrows && (
        <IconButton onClick={() => setPage((p) => p - 1)} disabled={page === 0} sx={arrowSx}>
          <ArrowBackIosNewIcon sx={{ color: BLUE, fontSize: { xs: "16px", md: "20px" } }} />
        </IconButton>
      )}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "8px", sm: "16px", md: "24px" },
        }}
      >
        {visible.map((partner) => (
          <Box key={partner.name} sx={{ flex: "1 1 0", maxWidth: { xs: "80px", sm: "120px", md: "160px" }, minWidth: 0 }}>
            <LogoCell partner={partner} />
          </Box>
        ))}
      </Box>

      {showArrows && (
        <IconButton
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages - 1}
          sx={arrowSx}
        >
          <ArrowForwardIosIcon sx={{ color: BLUE, fontSize: { xs: "16px", md: "20px" } }} />
        </IconButton>
      )}
    </Box>
  );
};

const titleSx = {
  textTransform: "uppercase",
  textAlign: "center",
  fontFamily: "Mossport",
  color: BLUE,
  fontSize: { xs: "36px", md: "64px" },
  lineHeight: 1,
  mb: { xs: "28px", md: "40px" },
};

const dividerSx = {
  borderTop: "1px solid rgba(0,0,0,0.08)",
  mx: { xs: "20px", sm: "40px", lg: "100px" },
};

const Partners: FC = () => (
  <Box id="park" bgcolor="#FFFFFF">
    <Box px={{ xs: "20px", sm: "40px", lg: "100px" }} pt={{ xs: "48px", md: "72px" }} pb={{ xs: "40px", md: "56px" }}>
      <Typography sx={titleSx}>Партнеры</Typography>
      <LogoCarousel partners={GENERAL_PARTNERS} />
    </Box>

    <Box sx={dividerSx} />

    <Box px={{ xs: "20px", sm: "40px", lg: "100px" }} py={{ xs: "40px", md: "56px" }}>
      <Typography sx={titleSx}>Генеральный информационный партнер</Typography>
      <LogoCarousel partners={GENERAL_INFO_PARTNERS} />
    </Box>

    <Box sx={dividerSx} />

    <Box px={{ xs: "20px", sm: "40px", lg: "100px" }} pt={{ xs: "40px", md: "56px" }} pb={{ xs: "56px", md: "80px" }}>
      <Typography sx={titleSx}>Информационные партнеры</Typography>
      <LogoCarousel partners={INFO_PARTNERS} />
    </Box>
  </Box>
);

export default Partners;
