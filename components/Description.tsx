import { handleScrollToElement } from "@/utils/scroll";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const DescriptionDesktop: FC = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      id="description"
      sx={{
        backgroundImage: "url(/images/description.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        aspectRatio: "1170/1403",
      }}
    >
      <Stack pt="70px" direction="row">
        <Box>
          <Box
            width="100%"
            component="img"
            src="/images/description_logo.svg"
          />
        </Box>

        <Box px="30px">
          <Typography
            mb={large ? "0px" : "10px"}
            sx={{
              fontFamily: "Mossport",
              color: "#FFFFFF",
              fontSize: large ? "128px" : "96px",
              lineHeight: large ? "128px" : "96px",
            }}
          >
            ЗАБЕГ
          </Typography>
          <Typography
            sx={{
              mb: "64px",
              textIndent: "32px",
              maxWidth: "400px",
              fontFamily: "Gotham Pro Regular",
              fontSize: large ? "24px" : "18px",
              color: "#F8F8F8",
              lineHeight: "120%",
            }}
          >
            Забег в пяти парках столицы для детей и взрослых на дистанциях 500
            м, 1 км и 5 км. Подойдет как новичкам, которые хотят поучаствовать в
            массовом состязании, так и любителям, которые хотят подготовиться к
            марафонам. Все на старт!
          </Typography>
          <Box px="75px">
            <Button
              onClick={handleScrollToElement("park")}
              sx={{
                position: "relative",
                background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
                borderRadius: "8px",
                fontFamily: "Gotham Pro Bold",
                fontSize: large ? "18px" : "16px",
                lineHeight: "152%",
                color: "#31313E",
                px: large ? "40px" : "20px",
                py: large ? "20px" : "16px",
                "& .MuiTouchRipple-root": {
                  color: "#FFFFFF", // Change this to the desired ripple color
                },
              }}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
              <Box
                sx={{ position: "absolute", top: "100%" }}
                width="100%"
                height="auto"
                component="img"
                src="/images/medal.svg"
              />
            </Button>
          </Box>
        </Box>
      </Stack>
      <Box pt={large ? "130px" : "80px"} px={large ? "110px" : "40px"}>
        <Typography
          sx={{
            maxWidth: large ? "488px" : "350px",
            fontFamily: "Gotham Pro Bold",
            fontSize: large ? "36px" : "24px",
            color: "#FFFFFF",
            lineHeight: large ? "34px" : "28px",
          }}
        >
          Все участники получат памятную медаль, а победители и призеры —
          дипломы и поощрительные призы
        </Typography>
      </Box>
    </Box>
  );
};

const DescriptionMobile: FC = () => {
  const small = useMediaQuery("(min-width:480px)");
  const medium = useMediaQuery("(min-width:1100px)");

  return (
    <Box
      id="description"
      sx={{
        backgroundImage: "url(/images/mobile/description.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: small ? "center" : "right",
        backgroundSize: "cover",
        backgroundColor: "#0098D7",
        aspectRatio: "480/1257",
      }}
    >
      <Stack px="8px" pt={!small ? "128px" : "140px"} direction="row">
        <Box>
          <Box
            width="100%"
            component="img"
            src="/images/description_logo.svg"
          />
        </Box>

        <Box px="30px">
          <Typography
            sx={{
              fontFamily: "Mossport",
              color: "#FFFFFF",
              fontSize: "96px",
              lineHeight: "96px",
            }}
          >
            ЗАБЕГ
          </Typography>
          <Typography
            sx={{
              mb: "16px",
              textIndent: "32px",
              maxWidth: "400px",
              fontFamily: "Gotham Pro Regular",
              fontSize: "16px",
              color: "#F8F8F8",
              lineHeight: "120%",
            }}
          >
            Забег в пяти парках столицы для детей и взрослых на дистанциях 500
            м, 1 км и 5 км. Подойдет как новичкам, которые хотят поучаствовать в
            массовом состязании, так и любителям, которые хотят подготовиться к
            марафонам. Все на старт!
          </Typography>
        </Box>
      </Stack>
      <Stack pt="16px" direction="row" justifyContent="center">
        <Button
          onClick={handleScrollToElement("park")}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
            boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            fontFamily: "Gotham Pro Bold",
            fontSize: "16px",
            lineHeight: "152%",
            color: "#31313E",
            px: "20px",
            py: "16px",
            "& .MuiTouchRipple-root": {
              color: "#FFFFFF", // Change this to the desired ripple color
            },
          }}
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </Stack>
      <Stack alignItems="center" pt="42px" px="60px">
        <Typography
          sx={{
            maxWidth: "350px",
            fontFamily: "Gotham Pro Bold",
            fontSize: "24px",
            color: "#FFFFFF",
            lineHeight: "23px",
            textAlign: "center",
          }}
        >
          Все участники получат памятную медаль, а победители и призеры —
          дипломы и поощрительные призы
        </Typography>
      </Stack>
      <Stack px="64px" pt="42px" alignItems="center">
        <Box
          width="100%"
          height="auto"
          component="img"
          src="/images/medal.svg"
        />
      </Stack>
    </Box>
  );
};

const Description: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return <>{matches ? <DescriptionDesktop /> : <DescriptionMobile />}</>;
};

export default Description;
