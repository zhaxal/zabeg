import {
  Box,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";

const IMAGES = [
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0037.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0043.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0094.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0110.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0116.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0135.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0140.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0143.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0146.jpg",
  "/images/zabeg_2026/gallery/2025.06.15-На_Старт-Парк-850-0163.jpg",
  "/images/zabeg_2026/gallery/C5D_8261.jpg",
  "/images/zabeg_2026/gallery/C5D_8319.jpg",
  "/images/zabeg_2026/gallery/C5D_8485.jpg",
  "/images/zabeg_2026/gallery/UVA_7147.jpg",
  "/images/zabeg_2026/gallery/UVA_7226.jpg",
  "/images/zabeg_2026/gallery/UVA_7253.jpg",
  "/images/zabeg_2026/gallery/UVA_7260.jpg",
  "/images/zabeg_2026/gallery/UVA_7292.jpg",
  "/images/zabeg_2026/gallery/UVA_7306.jpg",
  "/images/zabeg_2026/gallery/UVA_7319.jpg",
  "/images/zabeg_2026/gallery/UVA_7404.jpg",
  "/images/zabeg_2026/gallery/UVA_7553.jpg",
  "/images/zabeg_2026/gallery/UVA_7590.jpg",
  "/images/zabeg_2026/gallery/UVA_7616.jpg",
  "/images/zabeg_2026/gallery/UVA_7617.jpg",
  "/images/zabeg_2026/gallery/UVA_7670.jpg",
  "/images/zabeg_2026/gallery/UVA_7788.jpg",
  "/images/zabeg_2026/gallery/UVA_7881.jpg",
  "/images/zabeg_2026/gallery/UVA_7903.jpg",
  "/images/zabeg_2026/gallery/UVA_7966.jpg",
  "/images/zabeg_2026/gallery/UVA_7989.jpg",
  "/images/zabeg_2026/gallery/UVA_8004.jpg",
  "/images/zabeg_2026/gallery/UVA_8030.jpg",
];

const ArrowButton: FC<{
  direction: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
}> = ({ direction, onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [direction === "left" ? "left" : "right"]: { xs: "8px", sm: "16px" },
      bgcolor: "rgba(0,0,0,0.45)",
      color: "#fff",
      width: { xs: 36, sm: 48 },
      height: { xs: 36, sm: 48 },
      fontSize: { xs: "18px", sm: "24px" },
      "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
      zIndex: 1,
    }}
  >
    {direction === "left" ? "‹" : "›"}
  </IconButton>
);

const Photo: FC = () => {
  const theme = useTheme();
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const next = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <Box>
      <Box bgcolor="#88D8FC" py={12} id="photo">
        <Typography
          sx={{
            mb: "40px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#0461B5",
            fontSize: md ? "128px" : "96px",
            lineHeight: md ? "128px" : "96px",
          }}
        >
          ФОТО
        </Typography>

        {/* Carousel */}
        <Box px={md ? "100px" : sm ? "32px" : "16px"}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={IMAGES[index]}
              alt=""
              onClick={() => setLightbox(true)}
              sx={{
                display: "block",
                width: "100%",
                height: { xs: "240px", sm: "380px", md: "520px" },
                objectFit: "cover",
                borderRadius: "12px",
                cursor: "zoom-in",
              }}
            />
            <ArrowButton direction="left" onClick={prev} />
            <ArrowButton direction="right" onClick={next} />
          </Box>

          {/* Counter + dots */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              mt: "16px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontSize: "14px",
                color: "#0461B5",
                minWidth: "52px",
                textAlign: "center",
              }}
            >
              {index + 1} / {IMAGES.length}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Lightbox */}
      <Modal open={lightbox} onClose={() => setLightbox(false)}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setLightbox(false)}
        >
          <Box
            sx={{ position: "relative", maxWidth: "95vw", maxHeight: "95vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box
              component="img"
              src={IMAGES[index]}
              alt=""
              sx={{
                display: "block",
                maxWidth: "95vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <ArrowButton direction="left" onClick={prev} />
            <ArrowButton direction="right" onClick={next} />
          </Box>

          {/* Close button */}
          <IconButton
            onClick={() => setLightbox(false)}
            sx={{
              position: "fixed",
              top: "16px",
              right: "16px",
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.5)",
              fontSize: "20px",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            ✕
          </IconButton>

          <Typography
            sx={{
              position: "fixed",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Gotham Pro Regular",
              fontSize: "14px",
            }}
          >
            {index + 1} / {IMAGES.length}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Photo;
