import { Box, Grid, Stack, Typography } from "@mui/material";
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

  return (
    <Box
      id="park"
      sx={{
        pt: "68px",
        backgroundImage: "url(/images/park.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 1130,
      }}
    >
      <Typography
        sx={{
          mb: "24px",
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#0461B5",
          fontSize: "128px",
          lineHeight: "128px",
        }}
      >
        ПАРКИ
      </Typography>

      <Grid px="80px" container>
        <Grid item xs={12} md={6}>
          <DynamicMap mapLink={mapLink} />
        </Grid>

        <Grid pl="40px" item xs={12} md={6}>
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
                  "https://yandex.com/map-widget/v1/?um=constructor%3Ab941762b273d3140952a451d25d42791a5af186924fafde5a93f2e623932040d&amp;source=constructor"
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
                  "https://yandex.com/map-widget/v1/?um=constructor%3Ab941762b273d3140952a451d25d42791a5af186924fafde5a93f2e623932040d&amp;source=constructor"
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
                  "https://yandex.com/map-widget/v1/?um=constructor%3Ab941762b273d3140952a451d25d42791a5af186924fafde5a93f2e623932040d&amp;source=constructor"
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
                  "https://yandex.com/map-widget/v1/?um=constructor%3Ab941762b273d3140952a451d25d42791a5af186924fafde5a93f2e623932040d&amp;source=constructor"
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
                  "https://yandex.com/map-widget/v1/?um=constructor%3Ab941762b273d3140952a451d25d42791a5af186924fafde5a93f2e623932040d&amp;source=constructor"
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
