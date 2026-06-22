import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FC, useRef } from "react";

const BLUE = "#0F2572";
const SKY = "#60D0FF";
const CORAL = "#E85555";

interface DistanceItem {
  distance: string;
  age: string;
}

interface ParkCardData {
  link: string;
  resultsLink: string;
  district: string;
  accentColor: string;
  name: string;
  metro: string;
  distances: DistanceItem[];
}

const PARKS: ParkCardData[] = [
  {
    district: "ВАО",
    link: "https://reg.place/events/eao",
    resultsLink: "https://protokol.openband.ru/2026/RESULT_NASTART_VAO_2026.pdf",
    accentColor: SKY,
    name: "Стадион «Авангард»",
    metro: "м. Шоссе Энтузиастов",
    distances: [
      { distance: "500 м", age: "4–7 лет" },
      { distance: "1 км", age: "8–12 лет" },
      { distance: "3 км", age: "13–17 лет" },
      { distance: "3 км", age: "18+" },
      { distance: "5 км", age: "18+" },
      { distance: "10 км", age: "18+" },
    ],
  },
  {
    district: "ЮЗАО",
    link: "https://reg.place/events/swad",
    resultsLink: "https://protokol.openband.ru/2026/RESULT_NASTART_VZAO_2026.pdf",
    accentColor: CORAL,
    name: "Центр проката «Поляны Бутово»",
    metro: "м. Улица Старокачаловская",
    distances: [
      { distance: "500 м", age: "4–7 лет" },
      { distance: "1 км", age: "8–12 лет" },
      { distance: "3 км", age: "13–17 лет" },
      { distance: "3 км", age: "18+" },
      { distance: "5 км", age: "18+" },
    ],
  },
  {
    district: "ЮВАО",
    link: "https://reg.place/events/seao",
    resultsLink: "https://protokol.openband.ru/2026/RESULT_NASTART_UVAO_2026.pdf",
    accentColor: SKY,
    name: "Парк 850-летия Москвы",
    metro: "м. Марьино",
    distances: [
      { distance: "500 м", age: "4–7 лет" },
      { distance: "1 км", age: "8–12 лет" },
      { distance: "3 км", age: "13–17 лет" },
      { distance: "3 км", age: "18+" },
      { distance: "5 км", age: "18+" },
    ],
  },
  {
    district: "СЗАО",
    link: "https://reg.place/events/nwad",
    resultsLink: "https://protokol.openband.ru/2026/RESULT_NASTART_SZAO_2026.pdf",
    accentColor: CORAL,
    name: "Парк «Северное Тушино»",
    metro: "м. Планерная",
    distances: [
      { distance: "500 м", age: "4–7 лет" },
      { distance: "1 км", age: "8–12 лет" },
      { distance: "3 км", age: "13–17 лет" },
      { distance: "3 км", age: "18+" },
      { distance: "5 км", age: "18+" },
    ],
  },
  {
    district: "ЗАО",
    link: "https://reg.place/events/wad",
    resultsLink: "https://protokol.openband.ru/2026/RESULT_NASTART_ZAO_2026.pdf",
    accentColor: SKY,
    name: "Парк Олимпийской деревни",
    metro: "м. Мичуринский проспект",
    distances: [
      { distance: "500 м", age: "4–7 лет" },
      { distance: "1 км", age: "8–12 лет" },
      { distance: "3 км", age: "13–17 лет" },
      { distance: "3 км", age: "18+" },
      { distance: "5 км", age: "18+" },
    ],
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;

const ParkCard: FC<{ park: ParkCardData }> = ({ park }) => (
  <Box
    sx={{
      flexShrink: 0,
      width: CARD_WIDTH,
      border: `2px solid rgba(15, 37, 114, 0.2)`,
      borderRadius: "20px",
      p: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      bgcolor: BLUE,
      transition: "border-color 0.25s",
      "&:hover": {
        borderColor: BLUE,
      },
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          bgcolor: park.accentColor,
          borderRadius: "8px",
          px: "12px",
          py: "4px",
          mb: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gotham Pro Bold",
            fontSize: "12px",
            color: park.accentColor === SKY ? BLUE : "#FFFFFF",
            letterSpacing: "0.1em",
          }}
        >
          {park.district}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: "Gotham Pro Bold",
          fontSize: "20px",
          lineHeight: "26px",
          color: "#FFFFFF",
          mb: "6px",
        }}
      >
        {park.name}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Gotham Pro Regular",
          fontSize: "13px",
          color: "rgba(255,255,255,0.7)",
          mb: "20px",
        }}
      >
        {park.metro}
      </Typography>

      <Stack gap="6px">
        {park.distances.map((d, i) => (
          <Stack
            key={i}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              borderBottom: `1px solid rgba(255,255,255,0.15)`,
              pb: "6px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: "22px",
                lineHeight: "24px",
                color: "#FFFFFF",
              }}
            >
              {d.distance}
            </Typography>
            <Box
              sx={{
                border: `1px solid rgba(255,255,255,0.4)`,
                borderRadius: "6px",
                px: "8px",
                py: "2px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {d.age}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>

    <Stack spacing="8px">
      <Button
        href={park.resultsLink}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        sx={{
          background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
          borderRadius: "10px",
          fontFamily: "Gotham Pro Bold",
          fontSize: "15px",
          color: "#31313E",
          py: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          boxShadow: "0px 4px 0px rgba(0,0,0,0.25)",
          "&:hover": {
            background: "linear-gradient(90deg, #FFE066 0%, #FFA733 100%)",
          },
        }}
      >
        Результаты
      </Button>
      <Button
        href={park.link}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        sx={{
          backgroundColor: CORAL,
          borderRadius: "10px",
          fontFamily: "Gotham Pro Bold",
          fontSize: "15px",
          color: "#FFFFFF",
          py: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          boxShadow: "0px 4px 0px rgba(0,0,0,0.25)",
          "&:hover": {
            backgroundColor: "#cc3333",
          },
        }}
      >
        Участвовать
      </Button>
    </Stack>
  </Box>
);

const DistanceCarousel: FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) scroll(delta > 0 ? "right" : "left");
  };

  return (
    <Box
      id="distances"
      sx={{
        bgcolor: SKY,
        px: isMd ? "80px" : "20px",
        py: isMd ? "64px" : "40px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Mossport",
          fontSize: isMd ? "96px" : "60px",
          lineHeight: isMd ? "88px" : "56px",
          color: BLUE,
          mb: isMd ? "48px" : "32px",
        }}
      >
        ПАРКИ И ДИСТАНЦИИ
      </Typography>

      <Box sx={{ position: "relative" }}>
        {isMd && (
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: "-52px",
              top: "50%",
              transform: "translateY(-50%)",
              color: BLUE,
              bgcolor: "rgba(15,37,114,0.12)",
              "&:hover": { bgcolor: "rgba(15,37,114,0.22)" },
              zIndex: 1,
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        )}

        <Box
          ref={scrollRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            pb: "8px",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            "& > *": { scrollSnapAlign: "start" },
          }}
        >
          {PARKS.map((park) => (
            <ParkCard key={park.district} park={park} />
          ))}
        </Box>

        {isMd && (
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: "-52px",
              top: "50%",
              transform: "translateY(-50%)",
              color: BLUE,
              bgcolor: "rgba(15,37,114,0.12)",
              "&:hover": { bgcolor: "rgba(15,37,114,0.22)" },
              zIndex: 1,
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default DistanceCarousel;
