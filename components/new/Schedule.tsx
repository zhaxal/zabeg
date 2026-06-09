import { handleScrollToElement } from "@/utils/scroll";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";

const BLUE = "#0F2572";
const SKY = "#60D0FF";

interface ScheduleRow {
  time: string;
  description: string;
}

interface ScheduleCard {
  title: string;
  rows: ScheduleRow[];
}

const SCHEDULES: ScheduleCard[] = [
  {
    title: "Все площадки (кроме стадиона «Авангард»)",
    rows: [
      { time: "09:00", description: "Начало выдачи стартовых номеров (до 11:45)" },
      { time: "10:00", description: "Торжественное открытие соревнований" },
      { time: "10:20", description: "Разминка" },
      { time: "10:30", description: "Старт на дистанцию 500 метров" },
      { time: "10:50", description: "Разминка" },
      { time: "11:00", description: "Старт на дистанцию 1 км" },
      { time: "11:20", description: "Церемония награждения участников дистанции 1 км" },
      { time: "11:30", description: "Разминка" },
      { time: "11:40", description: "Старт на дистанцию 3 км" },
      { time: "12:10", description: "Церемония награждения участников дистанции 3 км" },
      { time: "12:20", description: "Разминка" },
      { time: "12:30", description: "Старт на дистанцию 5 км" },
      { time: "13:10", description: "Церемония награждения участников дистанции 5 км" },
      { time: "13:30", description: "Закрытие мероприятия" },
    ],
  },
  {
    title: "Флагманская площадка стадион «Авангард»",
    rows: [
      { time: "08:00", description: "Начало выдачи стартовых номеров (до 12:00)" },
      { time: "08:50", description: "Разминка" },
      { time: "09:00", description: "Старт на дистанцию 10 км" },
      { time: "10:00", description: "Торжественное открытие соревнований" },
      { time: "10:10", description: "Церемония награждения участников дистанции 10 км" },
      { time: "10:20", description: "Разминка" },
      { time: "10:30", description: "Старт на дистанцию 500 метров" },
      { time: "10:50", description: "Разминка" },
      { time: "11:00", description: "Старт на дистанцию 1 км" },
      { time: "11:20", description: "Церемония награждения участников дистанции 1 км" },
      { time: "11:30", description: "Разминка" },
      { time: "11:40", description: "Старт на дистанцию 3 км" },
      { time: "12:10", description: "Церемония награждения участников дистанции 3 км" },
      { time: "12:20", description: "Разминка" },
      { time: "12:30", description: "Старт на дистанцию 5 км" },
      { time: "13:10", description: "Церемония награждения участников дистанции 5 км" },
      { time: "13:30", description: "Закрытие мероприятия" },
    ],
  },
];

const TableRow: FC<ScheduleRow> = ({ time, description }) => (
  <Box
    sx={{
      display: "flex",
      background: `linear-gradient(301.38deg, ${BLUE} -7.89%, ${SKY} 151.15%)`,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        flexShrink: 0,
        width: { xs: "76px", md: "112px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.15)",
        borderRight: "2px solid rgba(255,255,255,0.2)",
        py: { xs: "10px", md: "14px" },
        px: { xs: "8px", md: "12px" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Gotham Pro Bold",
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: 1.2,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {time}
      </Typography>
    </Box>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        py: { xs: "10px", md: "14px" },
        px: { xs: "12px", md: "24px" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Gotham Pro Regular",
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: "130%",
          color: "#FFFFFF",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

const Schedule: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const medium = useMediaQuery("(min-width:1100px)");
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + SCHEDULES.length) % SCHEDULES.length);
  const next = () => setActive((i) => (i + 1) % SCHEDULES.length);

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #F89C43, #F89C43)",
        py: "80px",
      }}
    >
      <Box id="schedule">
        <Typography
          sx={{
            mb: "40px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#2E2E2E",
            fontSize: medium ? "128px" : "72px",
            lineHeight: medium ? "120px" : "68px",
          }}
        >
          РАСПИСАНИЕ
        </Typography>

        {/* Carousel */}
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.4s ease",
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {SCHEDULES.map((card, index) => (
              <Box key={index} sx={{ minWidth: "100%", px: medium ? "80px" : "20px" }}>
                <Typography
                  sx={{
                    mb: "24px",
                    textAlign: "center",
                    fontFamily: "Gotham Pro Bold",
                    fontSize: matches ? "28px" : "22px",
                    color: "#1F1F1F",
                    lineHeight: "130%",
                  }}
                >
                  {card.title}
                </Typography>

                <Stack spacing="8px" mb="32px">
                  {card.rows.map((row, i) => (
                    <TableRow key={i} time={row.time} description={row.description} />
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>

          {/* Arrows */}
          <IconButton
            onClick={prev}
            sx={{
              position: "absolute",
              left: matches ? "8px" : "4px",
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.7)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: BLUE }} />
          </IconButton>
          <IconButton
            onClick={next}
            sx={{
              position: "absolute",
              right: matches ? "8px" : "4px",
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.7)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
            }}
          >
            <ArrowForwardIosIcon sx={{ color: BLUE }} />
          </IconButton>
        </Box>

        {/* Dots */}
        <Stack direction="row" justifyContent="center" spacing="8px" mb="40px">
          {SCHEDULES.map((_, i) => (
            <Box
              key={i}
              onClick={() => setActive(i)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: i === active ? BLUE : `rgba(15, 37, 114, 0.3)`,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            />
          ))}
        </Stack>

        {/* <Stack
          pb={medium ? "0px" : "80px"}
          justifyContent={matches ? "flex-end" : "center"}
          px={matches ? "210px" : "0px"}
          alignItems="center"
          direction={matches ? "row" : "column-reverse"}
          spacing="10px"
        >
          <Link
            target="_blank"
            href="https://disk.yandex.ru/d/rfFIi_cmXKRnrw"
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: "18px",
              lineHeight: "152%",
              color: "#0461B5",
              textDecoration: "underline",
            }}
          >
            Положение о мероприятии
          </Link>
          <Button
            sx={{
              mx: matches ? "56px" : "0px",
              background: "linear-gradient(301.38deg, #B81D1D -7.89%, #E7352E 151.15%)",
              borderRadius: "8px",
              px: "40px",
              py: "20px",
              "& .MuiTouchRipple-root": { color: "#FFFFFF" },
            }}
          >
            <Typography
              onClick={handleScrollToElement("park")}
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: "18px",
                lineHeight: "152%",
                color: "#FFFFFF",
              }}
            >
              РЕЗУЛЬТАТЫ
            </Typography>
          </Button>
        </Stack> */}
      </Box>
    </Box>
  );
};

export default Schedule;
