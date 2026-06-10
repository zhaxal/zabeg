"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Box, CircularProgress, IconButton, Modal, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

const BLUE = "#0F2572";
const SKY = "#60D0FF";

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

const PER_PAGE = 2;
const TOTAL_PAGES = Math.ceil(IMAGES.length / PER_PAGE);

const NavArrow: FC<{
  direction: "left" | "right";
  onClick: (e?: React.MouseEvent) => void;
  disabled?: boolean;
  overlay?: boolean;
}> = ({ direction, onClick, disabled, overlay }) => (
  <IconButton
    onClick={onClick}
    disabled={disabled}
    sx={{
      bgcolor: BLUE,
      color: "#FFFFFF",
      boxShadow: "0 4px 16px rgba(0,0,0,0.30)",
      width: { xs: 40, sm: 52 },
      height: { xs: 40, sm: 52 },
      flexShrink: 0,
      ...(overlay && {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "left" ? "left" : "right"]: { xs: "8px", sm: "16px" },
        zIndex: 2,
      }),
      "&:hover": { bgcolor: "rgba(15,37,114,0.8)" },
      "&.Mui-disabled": { opacity: 0.35, bgcolor: BLUE },
    }}
  >
    {direction === "left"
      ? <ArrowBackIosNewIcon sx={{ fontSize: { xs: "16px", sm: "20px" } }} />
      : <ArrowForwardIosIcon sx={{ fontSize: { xs: "16px", sm: "20px" } }} />}
  </IconButton>
);

const GalleryImage: FC<{ src: string; onClick: () => void; priority: boolean }> = ({ src, onClick, priority }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        height: { xs: "220px", sm: "280px", md: "360px" },
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "zoom-in",
        bgcolor: "rgba(4,97,181,0.15)",
        "&:hover img": { transform: "scale(1.04)" },
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            transform: "none",
            bgcolor: "rgba(15,37,114,0.18)",
          }}
        />
      )}
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 480px) 45vw, 80vw"
        onLoad={() => setLoaded(true)}
        style={{
          objectFit: "cover",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          opacity: loaded ? 1 : 0,
        }}
      />
    </Box>
  );
};

const Photo: FC = () => {
  const [page, setPage] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [lightboxLoading, setLightboxLoading] = useState(false);
  const touchStartX = useRef<number>(0);

  const prevPage = () => setPage((p) => Math.max(0, p - 1));
  const nextPage = () => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1));

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? nextPage() : prevPage();
  };

  const prevLight = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIdx((i) => (i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null));
  }, []);

  const nextLight = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIdx((i) => (i !== null ? (i + 1) % IMAGES.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIdx !== null) setLightboxLoading(true);
  }, [lightboxIdx]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevLight();
      if (e.key === "ArrowRight") nextLight();
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, prevLight, nextLight]);

  const visible = IMAGES.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <Box>
      <Box bgcolor={SKY} py={12} id="photo">
        <Typography
          sx={{
            mb: "40px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: BLUE,
            fontSize: { xs: "96px", md: "128px" },
            lineHeight: { xs: "96px", md: "128px" },
          }}
        >
          ФОТО
        </Typography>

        <Box
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          sx={{
            px: { xs: "16px", sm: "32px", md: "100px" },
            display: "flex",
            alignItems: "center",
            gap: { xs: "8px", sm: "16px" },
          }}
        >
          <NavArrow direction="left" onClick={prevPage} disabled={page === 0} />

          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: { xs: "8px", sm: "12px", md: "16px" },
            }}
          >
            {visible.map((src, i) => (
              <GalleryImage
                key={src}
                src={src}
                priority={page === 0}
                onClick={() => setLightboxIdx(page * PER_PAGE + i)}
              />
            ))}
          </Box>

          <NavArrow direction="right" onClick={nextPage} disabled={page === TOTAL_PAGES - 1} />
        </Box>

        <Typography
          sx={{
            mt: "16px",
            textAlign: "center",
            fontFamily: "Gotham Pro Regular",
            fontSize: "14px",
            color: BLUE,
          }}
        >
          {page + 1} / {TOTAL_PAGES}
        </Typography>

      </Box>

      {/* Lightbox */}
      <Modal open={lightboxIdx !== null} onClose={() => setLightboxIdx(null)}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setLightboxIdx(null)}
        >
          <Box
            sx={{ position: "relative", display: "flex", alignItems: "center" }}
            onClick={(e) => e.stopPropagation()}
          >
            <NavArrow direction="left" onClick={prevLight} />
            {lightboxIdx !== null && (
              <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {lightboxLoading && (
                  <CircularProgress
                    sx={{
                      color: "#fff",
                      position: "absolute",
                      zIndex: 1,
                    }}
                  />
                )}
                <Box
                  component="img"
                  src={IMAGES[lightboxIdx]}
                  alt=""
                  onLoad={() => setLightboxLoading(false)}
                  sx={{
                    maxWidth: { xs: "80vw", md: "85vw" },
                    maxHeight: "85vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                    display: "block",
                    mx: { xs: "8px", md: "16px" },
                    opacity: lightboxLoading ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </Box>
            )}
            <NavArrow direction="right" onClick={nextLight} />
          </Box>

          <IconButton
            onClick={() => setLightboxIdx(null)}
            sx={{
              position: "fixed",
              top: "16px",
              right: "16px",
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {lightboxIdx !== null && (
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
              {lightboxIdx + 1} / {IMAGES.length}
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Photo;
