"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

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
        fontSize: { xs: "64px", sm: "80px", md: "100px", lg: "128px" },
        lineHeight: 1,
        color: "#0461B5",
      }}
    >
      {String(value).padStart(2, "0")}
    </Typography>
    <Typography
      sx={{
        fontFamily: "Mossport",
        fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "24px" },
        color: "#0F2572",
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
      fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "100px" },
      lineHeight: 1,
      color: "#0461B5",
      alignSelf: "flex-start",
      mt: { xs: "8px", md: "12px" },
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
          height: { xs: "80px", md: "96px", lg: "112px" },
        }}
      />

      <Box sx={{ backgroundColor: "white" }}>
        <Box sx={{ backgroundColor: "white", py: { xs: 4, md: 6, lg: 8 } }}>
          <Stack alignItems="center" spacing={{ xs: 2, md: 3 }}>
            <Typography
              sx={{
                fontFamily: "Mossport",
                fontSize: { xs: "20px", sm: "24px", md: "32px", lg: "40px" },
                color: "#0F2572",
                letterSpacing: "0.05em",
              }}
            >
              ДО СТАРТА ОСТАЛОСЬ
            </Typography>
            <Stack
              direction="row"
              alignItems="flex-start"
              spacing={{ xs: "12px", sm: "16px", md: "24px", lg: "32px" }}
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
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#0461B5",
            fontSize: { xs: "64px", sm: "80px", md: "96px", lg: "128px" },
            lineHeight: 1,
          }}
        >
          20 ИЮНЯ 2026
        </Typography>

        <Stack alignItems="center" py={{ xs: 4, md: 6 }}>
          <Button
            href="https://moscow.run"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
              boxShadow: "0px 6px 0px rgba(0, 0, 0, 0.16)",
              borderRadius: "12px",
              fontFamily: "Gotham Pro Bold",
              fontSize: { xs: "18px", md: "22px", lg: "26px" },
              color: "#31313E",
              px: { xs: "40px", md: "64px" },
              py: { xs: "16px", md: "20px" },
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              "&:hover": {
                background: "linear-gradient(90deg, #FFE066 0%, #FFA733 100%)",
              },
            }}
          >
            Принять участие
          </Button>
        </Stack>

        <Box
          component="img"
          src="/images/zabeg_2026/beguny.png"
          sx={{ width: "100%", height: "auto" }}
        />
      </Box>
    </>
  );
};

export default Cover;
