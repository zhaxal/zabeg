import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FC, useState, useEffect } from "react";

interface ParkOption {
  id: string;
  district: string;
  accentColor: string;
  name: string;
  image: string;
}

const PARKS: ParkOption[] = [
  {
    id: "ЮЗАО",
    district: "ЮЗАО",
    accentColor: "#1AAD02",
    name: "Центр проката «Поляны Бутово»",
    image: "/images/routes/uzao.jpg",
  },
  {
    id: "ЮВАО",
    district: "ЮВАО",
    accentColor: "#ED4543",
    name: "Парк 850-летия Москвы",
    image: "/images/routes/uvao.jpg",
  },
  {
    id: "СЗАО",
    district: "СЗАО",
    accentColor: "#B51FFF",
    name: "Парк «Северное Тушино»",
    image: "/images/routes/szao.jpg",
  },
  {
    id: "ЗАО",
    district: "ЗАО",
    accentColor: "#FFD321",
    name: "Парк Олимпийской деревни",
    image: "/images/routes/zao.jpg",
  },
  {
    id: "ВАО",
    district: "ВАО",
    accentColor: "#1E98FF",
    name: "Стадион «Авангард»",
    image: "/images/routes/vao.jpg",
  },
];

const RoutePlaceholder: FC<{ park: ParkOption }> = ({ park }) => (
  <Box
    sx={{
      width: "100%",
      aspectRatio: "4/3",
      bgcolor: "rgba(15, 37, 114, 0.15)",
      border: "2px dashed rgba(4, 97, 181, 0.4)",
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
        color: "#0461B5",
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
        color: "rgba(4, 97, 181, 0.6)",
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

  useEffect(() => {
    setError(false);
  }, [park.id]);

  if (error) return <RoutePlaceholder park={park} />;

  return (
    <Box
      component="img"
      src={park.image}
      alt={`Маршрут — ${park.name}`}
      onError={() => setError(true)}
      onClick={onClick}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        display: "block",
        cursor: "zoom-in",
      }}
    />
  );
};

const Route: FC = () => {
  const [selected, setSelected] = useState<string>("ЮЗАО");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const md = useMediaQuery("(min-width:1100px)");

  const activePark = PARKS.find((p) => p.id === selected) ?? PARKS[0];

  return (
    <Box>
      <Modal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          component="img"
          src={activePark.image}
          alt={`Маршрут — ${activePark.name}`}
          onClick={() => setLightboxOpen(false)}
          sx={{
            maxWidth: "95vw",
            maxHeight: "95vh",
            objectFit: "contain",
            borderRadius: "8px",
            cursor: "zoom-out",
            outline: "none",
          }}
        />
      </Modal>

      <Box bgcolor="#60D0FF" pt={10} id="routes">
        <Typography
          sx={{
            mb: md ? "40px" : "32px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#0461B5",
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
          </Grid>

          <Grid item xs={md ? 6 : 12}>
            <Stack spacing="16px">
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Gotham Pro Bold",
                  color: "#0F2572",
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
                  color: "#0461B5",
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
                        background: isActive
                          ? "linear-gradient(301.38deg, #0461B5 -7.89%, #0098D7 151.15%)"
                          : "linear-gradient(301.38deg, #0461B5 -7.89%, #0098D7 151.15%)",
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
      <Box
        component="img"
        src="/images/zabeg_2026/route_footer.svg"
        alt="Декор"
        sx={{ bgcolor: "#60D0FF", width: "100%", display: "block" }}
      />
    </Box>
  );
};

export default Route;
