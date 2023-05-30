import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#0461B5",
      }}
    >
      <Grid
        spacing={sm ? "0px" : "12px"}
        px={sm ? "64px" : "20px"}
        pb="36px"
        pt={sm ? "220px" : "260px"}
        container
      >
        <Grid position="relative" item xs={sm ? 4 : 12}>
          <Box
            width={sm ? "100%" : "75%"}
            height="auto"
            component="img"
            sx={{
              position: "absolute",
              bottom: "40%",
            }}
            src="/images/icons/logo_text.svg"
          ></Box>
        </Grid>
        <Grid item xs={sm ? 8 : 12}>
          <Stack spacing="16px">
            <Typography
              sx={{
                maxWidth: sm ? undefined : "340px",
                fontFamily: "Gotham Pro Bold",
                fontSize: sm ? "32px" : "24px",
                color: "#FFFFFF",
                lineHeight: sm ? "31px" : "23px",
              }}
            >
              Легкоатлетический забег «На старт»
            </Typography>

            <Stack spacing="16px">
              <Stack
                component="a"
                alignItems="center"
                spacing="20px"
                direction="row"
                href="mailto:pr@mosgorsport.ru"
              >
                <Box component="img" src="/images/icons/mail.svg" />
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Medium",
                    fontSize: sm ? "24px" : "20px",
                    color: "#FFFFFF",
                    lineHeight: sm ? "23px" : "19px",
                    textDecoration: "underline",
                  }}
                >
                  pr@mosgorsport.ru
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing="20px" direction="row">
                <a href="https://vk.com/mosgorsportvk">
                  <Box component="img" src="/images/icons/vk.svg" />
                </a>
                <a href="https://t.me/mosgorsportmoscow">
                  <Box component="img" src="/images/icons/telegram.svg" />
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Box pb="12px" px={sm ? "64px" : "10px"}>
        <Typography
          sx={{
            fontFamily: "Gotham Pro Light",
            fontSize: sm ? "24px" : "16px",
            color: "#FFFFFF",
            lineHeight: sm ? "23px" : "15px",
            textAlign: "justify",
          }}
        >
          Государственное бюджетное учреждение города Москвы «Московская
          дирекция по развитию массового спорта» Департамента спорта города
          Москвы (ГБУ «МОСГОРСПОРТ» Москомспорта)
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
