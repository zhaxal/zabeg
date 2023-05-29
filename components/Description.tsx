import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Description: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0098D7",
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
