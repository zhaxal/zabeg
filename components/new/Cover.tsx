"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { handleScrollToElement } from "@/utils/scroll";

const BLUE = "#0F2572";
const SKY = "#60D0FF";
const CORAL = "#E85555";

const TARGET = new Date("2026-06-20T09:00:00+03:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const Unit: FC<{ value: number; label: string }> = ({ value, label }) => (
  <Stack alignItems="center">
    <Typography
      sx={{
        fontFamily: "Mossport",
        fontSize: { xs: "36px", sm: "48px", md: "60px", lg: "72px" },
        lineHeight: 1,
        color: SKY,
      }}
    >
      {String(value).padStart(2, "0")}
    </Typography>
    <Typography
      sx={{
        fontFamily: "Mossport",
        fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "16px" },
        color: "#FFFFFF",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </Typography>
  </Stack>
);

const Separator: FC = () => (
  <Typography
    sx={{
      fontFamily: "Mossport",
      fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px" },
      lineHeight: 1,
      color: SKY,
      alignSelf: "flex-start",
      mt: { xs: "4px", md: "8px" },
    }}
  >
    :
  </Typography>
);

const Cover: FC = () => {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

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
        <Box
          component="img"
          src="/images/zabeg_2026/beguny.png"
          sx={{ width: "100%", height: "auto", display: "block" }}
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
            onClick={handleScrollToElement("distances")}
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
            Принять участие
          </Button>
        </Stack>
      </Box>

      {/* Countdown timer — separate row below the banner */}
      <Box sx={{ backgroundColor: BLUE, py: { xs: 2, md: 3 } }}>
        <Stack alignItems="center" spacing={{ xs: 1, md: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Mossport",
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "24px" },
              color: "#FFFFFF",
              letterSpacing: "0.05em",
            }}
          >
            ДО СТАРТА ОСТАЛОСЬ
          </Typography>
          <Stack
            direction="row"
            alignItems="flex-start"
            spacing={{ xs: "8px", sm: "12px", md: "16px", lg: "20px" }}
          >
            <Unit value={time?.days ?? 0} label="ДНЕЙ" />
            <Separator />
            <Unit value={time?.hours ?? 0} label="ЧАСОВ" />
            <Separator />
            <Unit value={time?.minutes ?? 0} label="МИНУТ" />
            <Separator />
            <Unit value={time?.seconds ?? 0} label="СЕКУНД" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Cover;
