import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";

const RESULTS_LINKS: Record<string, string> = {
  "ВАО": "https://protokol.openband.ru/2026/RESULT_NASTART_VAO_2026.pdf",
  "ЮЗАО": "https://protokol.openband.ru/2026/RESULT_NASTART_VZAO_2026.pdf",
  "ЮВАО": "https://protokol.openband.ru/2026/RESULT_NASTART_UVAO_2026.pdf",
  "ЗАО": "https://protokol.openband.ru/2026/RESULT_NASTART_ZAO_2026.pdf",
  "СЗАО": "https://protokol.openband.ru/2026/RESULT_NASTART_SZAO_2026.pdf",
};

const ASK_FORM_URL = "https://forms.yandex.ru/u/6a3835981f1eb55c3e4c9c5b";

const BLUE = "#0F2572";
const SKY = "#60D0FF";
const CORAL = "#E85555";

interface ParkOption {
  id: string;
  district: string;
  accentColor: string;
  name: string;
  image: string;
}

const PARKS: ParkOption[] = [
  {
    id: "ВАО",
    district: "ВАО",
    accentColor: CORAL,
    name: "Стадион «Авангард»",
    image: "/images/routes/vao.jpg",
  },
  {
    id: "ЮЗАО",
    district: "ЮЗАО",
    accentColor: CORAL,
    name: "Центр проката «Поляны Бутово»",
    image: "/images/routes/uzao.jpg",
  },
  {
    id: "ЮВАО",
    district: "ЮВАО",
    accentColor: SKY,
    name: "Парк 850-летия Москвы",
    image: "/images/routes/uvao.jpg",
  },
  {
    id: "СЗАО",
    district: "СЗАО",
    accentColor: CORAL,
    name: "Парк «Северное Тушино»",
    image: "/images/routes/szao.jpg",
  },
  {
    id: "ЗАО",
    district: "ЗАО",
    accentColor: SKY,
    name: "Парк Олимпийской деревни",
    image: "/images/routes/zao.jpg",
  },
];

const RoutePlaceholder: FC<{ park: ParkOption }> = ({ park }) => (
  <Box
    sx={{
      width: "100%",
      aspectRatio: "4/3",
      bgcolor: "rgba(15, 37, 114, 0.15)",
      border: "2px dashed rgba(15, 37, 114, 0.4)",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    }}
  >
    <Typography
      sx={{
        fontFamily: "Gotham Pro Bold",
        fontSize: "16px",
        color: BLUE,
        textAlign: "center",
        px: "16px",
      }}
    >
      {park.district}: {park.name}
    </Typography>
    <Typography
      sx={{
        fontFamily: "Gotham Pro Regular",
        fontSize: "13px",
        color: "rgba(15, 37, 114, 0.6)",
      }}
    >
      Карта маршрута
    </Typography>
  </Box>
);

const RouteImage: FC<{ park: ParkOption; onClick: () => void }> = ({
  park,
  onClick,
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [park.id]);

  if (error) return <RoutePlaceholder park={park} />;

  return (
    <Box sx={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
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
            bgcolor: "rgba(15,37,114,0.12)",
            aspectRatio: "1/1",
          }}
        />
      )}
      <Image
        src={park.image}
        alt={`Маршрут — ${park.name}`}
        width={2400}
        height={2400}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          display: "block",
          cursor: "zoom-in",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </Box>
  );
};

const Route: FC = () => {
  const [selected, setSelected] = useState<string>("ВАО");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const md = useMediaQuery("(min-width:1100px)");

  const activePark = PARKS.find((p) => p.id === selected) ?? PARKS[0];

  return (
    <Box>
      <Modal open={lightboxOpen} onClose={() => setLightboxOpen(false)}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <Box
            component="img"
            src={activePark.image}
            alt={`Маршрут — ${activePark.name}`}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            sx={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
              borderRadius: "8px",
              outline: "none",
              cursor: "default",
            }}
          />
          <IconButton
            onClick={() => setLightboxOpen(false)}
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
        </Box>
      </Modal>

      <Box bgcolor="#FFFFFF" py={10} id="routes">
        <Typography
          sx={{
            mb: md ? "40px" : "32px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: BLUE,
            fontSize: md ? "128px" : "72px",
            lineHeight: md ? "120px" : "68px",
          }}
        >
          КАРТЫ МАРШРУТОВ
        </Typography>

        <Grid
          spacing="40px"
          direction={md ? "row" : "column"}
          px={md ? "80px" : "16px"}
          container
        >
          <Grid item xs={md ? 6 : 12}>
            <RouteImage
              park={activePark}
              onClick={() => setLightboxOpen(true)}
            />
            <Stack direction={{ xs: "column", sm: "row" }} spacing="12px" mt="16px">
              <Button
                component="a"
                href={RESULTS_LINKS[activePark.id]}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                  boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  fontFamily: "Gotham Pro Bold",
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#31313E",
                  py: "14px",
                  textTransform: "uppercase",
                }}
              >
                Результаты
              </Button>
              <Button
                component="a"
                href={ASK_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  background: "linear-gradient(301.38deg, #0461B5 -7.89%, #0098D7 151.15%)",
                  boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  fontFamily: "Gotham Pro Bold",
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#FFFFFF",
                  py: "14px",
                  textTransform: "uppercase",
                }}
              >
                Задать вопрос
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={md ? 6 : 12}>
            <Stack spacing="16px">
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Gotham Pro Bold",
                  color: BLUE,
                  fontSize: { xs: "22px", md: "32px" },
                  lineHeight: { xs: "26px", md: "31px" },
                }}
              >
                Карты маршрутов
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Gotham Pro Regular",
                  color: BLUE,
                  fontSize: { xs: "18px", md: "24px" },
                  lineHeight: { xs: "22px", md: "23px" },
                }}
              >
                Выберите парк:
              </Typography>

              <Stack spacing="12px">
                {PARKS.map((park) => {
                  const isActive = park.id === selected;
                  return (
                    <Button
                      key={park.id}
                      onClick={() => setSelected(park.id)}
                      disableElevation
                      sx={{
                        justifyContent: "flex-start",
                        px: "20px",
                        py: "14px",
                        borderRadius: "4px",
                        background: `linear-gradient(301.38deg, ${BLUE} -7.89%, ${SKY} 151.15%)`,
                        borderBottom: isActive
                          ? `6px solid ${park.accentColor}`
                          : "6px solid rgba(255,255,255,0.15)",
                        boxShadow: isActive
                          ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
                          : "none",
                        opacity: isActive ? 1 : 0.65,
                        textTransform: "none",
                        gap: "12px",
                        transition: "all 0.2s",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Gotham Pro Regular",
                          fontSize: "20px",
                          lineHeight: "120%",
                          color: "#FFFFFF",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {park.district}:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Gotham Pro Regular",
                          fontSize: "20px",
                          lineHeight: "120%",
                          color: "#FFFFFF",
                          textAlign: "left",
                        }}
                      >
                        {park.name}
                      </Typography>
                    </Button>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Route;
