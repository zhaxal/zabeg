import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

interface DocCardProps {
  label: string;
  href: string;
}

const DocCard: FC<DocCardProps> = ({ label, href }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      border: "2px solid rgba(255, 255, 255, 0.7)",
      borderRadius: "8px",
      overflow: "hidden",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background-color 0.15s",
      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
    }}
  >
    <Box flex={1} px="18px" py="14px" display="flex" alignItems="center">
      <Typography
        sx={{
          fontFamily: "Gotham Pro Bold",
          fontSize: "14px",
          color: "#FFFFFF",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          lineHeight: "1.2",
        }}
      >
        {label}
      </Typography>
    </Box>
    <Box
      sx={{
        borderLeft: "2px solid rgba(255, 255, 255, 0.7)",
        px: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Typography sx={{ color: "#FFFFFF", fontSize: "20px", lineHeight: "1" }}>
        ↗
      </Typography>
    </Box>
  </Box>
);

const MED_URL = "https://mosgorsport.ru/docs/spravka_1144.pdf";

const Documents: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const px = md ? (lg ? "205px" : "100px") : "20px";

  return (
    <Box id="documents" bgcolor="#0461B5" px={px} py={sm ? "48px" : "36px"}>
      <Typography
        sx={{
          fontFamily: "Gotham Pro Bold",
          fontSize: md ? "26px" : sm ? "22px" : "18px",
          color: "#FFFFFF",
          lineHeight: "1.2",
          mb: "16px",
        }}
      >
        Важные документы
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {[
          { label: "Положение СЗАО", href: "/files/SZAO_Polozhenie.pdf" },
          { label: "Положение ЮЗАО", href: "/files/YuZAO_Polozhenie.pdf" },
          { label: "Положение ЗАО", href: "/files/ZAO_Polozhenie.pdf" },
          { label: "Положение ЮВАО", href: "/files/YuVAO_Polozhenie.pdf" },
          { label: "Положение ВАО", href: "/files/VAO_Polozhenie.pdf" },
          { label: "Мед. справка", href: MED_URL },
        ].map((doc) => (
          <DocCard key={doc.label} label={doc.label} href={doc.href} />
        ))}
      </Box>
    </Box>
  );
};

export default Documents;
