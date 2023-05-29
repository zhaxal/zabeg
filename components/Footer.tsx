import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#0461B5",
      }}
    >
      <Grid px="64px" pb="36px" pt="220px" container>
        <Grid position="relative" item xs={4}>
          <Box
            component="img"
            sx={{
              position: "absolute",
              bottom: "40%",
            }}
            src="/images/icons/logo_text.svg"
          ></Box>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing="16px">
            <Typography
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: "32px",
                color: "#FFFFFF",
                lineHeight: "31px",
              }}
            >
              Легкоатлетический забег «На старт»
            </Typography>

            <Stack spacing="16px">
              <Stack alignItems="center" spacing="20px" direction="row">
                <Box component="img" src="/images/icons/mail.svg" />
                <Typography
                  component="a"
                  href="mailto:pr@mosgorsport.ru"
                  sx={{
                    fontFamily: "Gotham Pro Medium",
                    fontSize: "24px",
                    color: "#FFFFFF",
                    lineHeight: "23px",
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

      <Box pb="12px" px="64px">
        <Typography
          sx={{
            fontFamily: "Gotham Pro Light",
            fontSize: "24px",
            color: "#FFFFFF",
            lineHeight: "23px",
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
