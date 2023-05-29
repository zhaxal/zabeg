import { handleScrollToElement } from "@/utils/scroll";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Description: FC = () => {
  return (
    <Box
      id="description"
      sx={{
        backgroundImage: "url(/images/description.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 1400,
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
            sx={{
              fontFamily: "Mossport",
              color: "#FFFFFF",
              fontSize: "128px",
              lineHeight: "128px",
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
              fontSize: "24px",
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
                fontSize: "18px",
                lineHeight: "152%",
                color: "#31313E",
                px: "40px",
                py: "20px",
                "& .MuiTouchRipple-root": {
                  color: "#FFFFFF", // Change this to the desired ripple color
                },
              }}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
              <Box
                sx={{ position: "absolute", top: "100%" }}
                component="img"
                src="/images/medal.svg"
              />
            </Button>
          </Box>
        </Box>
      </Stack>
      <Box pt="130px" px="110px">
        <Typography
          sx={{
            maxWidth: "488px",
            fontFamily: "Gotham Pro Bold",
            fontSize: "36px",
            color: "#FFFFFF",
            lineHeight: "34px",
          }}
        >
          Все участники получат памятную медаль, а победители и призеры —
          дипломы и поощрительные призы
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
