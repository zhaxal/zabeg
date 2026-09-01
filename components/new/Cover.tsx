"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { handleScrollToElement } from "@/utils/scroll";

const CORAL = "#E85555";

const Cover: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          height: { xs: "40px", md: "48px", lg: "56px" },
        }}
      />

      {/* Main banner with date + button overlaid */}
      <Box sx={{ position: "relative", backgroundColor: "white" }}>
        <Image
          src="/images/zabeg_2026/beguny.png"
          alt=""
          width={1920}
          height={1092}
          priority
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <Stack
          alignItems="center"
          spacing={{ xs: 1.5, md: 2 }}
          sx={{
            position: "absolute",
            top: { xs: "48%", sm: "54%", md: "58%", lg: "62%" },
            left: 0,
            right: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mossport",
              color: "#FFFFFF",
              fontSize: { xs: "32px", sm: "44px", md: "64px", lg: "88px" },
              lineHeight: 1,
              textAlign: "center",
              backgroundColor: "rgba(15, 37, 114, 0.88)",
              px: { xs: "16px", md: "32px" },
              borderRadius: "12px",
            }}
          >
            20 ИЮНЯ 2026
          </Typography>
          <Button
            onClick={handleScrollToElement("routes")}
            sx={{
              backgroundColor: CORAL,
              boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.20)",
              borderRadius: "12px",
              fontFamily: "Gotham Pro Bold",
              fontSize: { xs: "14px", md: "18px", lg: "20px" },
              color: "white",
              px: { xs: "28px", md: "48px" },
              py: { xs: "12px", md: "16px" },
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              "&:hover": { backgroundColor: "#cc3333" },
            }}
          >
            Результаты
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Cover;
