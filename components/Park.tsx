import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import RegistrationAccordion from "./ui/RegistrationAccordion";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./ui/Map"), {
  loading: () => <p>Loading...</p>,
});

const Park: FC = () => {
  const [mapLink, setMapLink] = useState<string>(
    "https://yandex.ru/map-widget/v1/?um=constructor%3A4d94219ac2fb775f6f2d7a73be69f4aabbad924b8234b623724bd97506e38873&amp;source=constructor"
  );
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string, mapLink: string) =>
    (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setMapLink(mapLink);
    };

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  return (
    <Box
      id="park"
      sx={{
        pt: md ? "68px" : "0px",
        backgroundImage: "url(/images/park.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: md ? "center" : "right",
        backgroundSize: "cover",
        aspectRatio: md ? "1170/1130" : sm ? "480/800" : "480/827",
      }}
    >
      <Typography
        sx={{
          mb: md ? "24px" : "160px",
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#0461B5",
          fontSize: md ? "128px" : "96px",
          lineHeight: md ? "128px" : "96px",
        }}
      >
        ПАРКИ
      </Typography>

      <Grid
        spacing={"40px"}
        direction={md ? "row" : "column-reverse"}
        px={md ? "80px" : "0px"}
        container
      >
        <Grid item xs={md ? 6 : 12}>
          <DynamicMap mapLink={mapLink} />
        </Grid>

        <Grid item xs={md ? 6 : 12}>
          <Stack spacing="16px">
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Gotham Pro Bold",
                color: "#0F2572",
                fontSize: "32px",
                lineHeight: "31px",
              }}
            >
              Регистрация
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Gotham Pro Regular",
                color: "#0461B5",
                fontSize: "24px",
                lineHeight: "23px",
              }}
            >
              Выберите парк:
            </Typography>

            <Stack spacing="16px">
              <RegistrationAccordion
                expanded={expanded === "panel1"}
                onChange={handleChange(
                  "panel1",
                  "https://yandex.com/map-widget/v1/?um=constructor%3A142c7a8b8b37146d15c4903cb4ea25e5c25ac0ff5fe105bbf7bdae7e5f95e6e8&amp;source=constructor"
                )}
                title1="СЗАО:"
                title2="Парк «Северное Тушино»"
                borderColor="#1AAD02"
                link="https://orgeo.ru/event/29043"
              />
              <RegistrationAccordion
                expanded={expanded === "panel2"}
                onChange={handleChange(
                  "panel2",
                  "https://yandex.com/map-widget/v1/?um=constructor%3A416da64f446635f527593dc31aa8c85cdcd94d86f654e60b6f78972843432d28&amp;source=constructor"
                )}
                title1="ЮВАО:"
                title2="Парк 850-летия Москвы"
                borderColor="#ED4543"
                link="https://orgeo.ru/event/29041"
              />
              <RegistrationAccordion
                expanded={expanded === "panel3"}
                onChange={handleChange(
                  "panel3",
                  "https://yandex.com/map-widget/v1/?um=constructor%3Abc6eb4edc79f4d2ca8d7ea9182583fe7b85f1c34455acd2dd02bc8b77bf0f2e8&amp;source=constructor"
                )}
                title1="ЮЗАО:"
                title2="Центр спорта и образования Самбо-70 Москомспорта, отделение Битца"
                borderColor="#B51FFF"
                link="https://orgeo.ru/event/29042"
              />
              <RegistrationAccordion
                expanded={expanded === "panel4"}
                onChange={handleChange(
                  "panel4",
                  "https://yandex.com/map-widget/v1/?um=constructor%3A66e306f35b5541b984d21df388a7862045f7d363ad6bca5c9294958b2e5c85a7&amp;source=constructor"
                )}
                title1="ЗАО:"
                title2="Парк 50 летия Октября"
                borderColor="#FFD321"
                link="https://orgeo.ru/event/29044"
              />
              <RegistrationAccordion
                expanded={expanded === "panel5"}
                onChange={handleChange(
                  "panel5",
                  "https://yandex.com/map-widget/v1/?um=constructor%3Addc7d2ea0ae6845662e704ab457c08e11da942a43fe2760aee42fa04a9c9985d&amp;source=constructor"
                )}
                title1="ЦАО:"
                title2="ПКиО «Красная Пресня»"
                borderColor="#1E98FF"
                link="https://orgeo.ru/event/29036"
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Park;
