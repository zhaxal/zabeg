import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

const Cover: FC = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0F2572",
          minHeight: "96px",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#0F2572",
          backgroundImage: "url(/images/mobile/cover.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          aspectRatio: "480/320",
        }}
      ></Box>
      <Stack
        px={large ? "130px" : "16px"}
        pt="16px"
        spacing="30px"
        justifyContent={matches ? "normal" : "center"}
        direction="row-reverse"
      >
        <a target="_blank" href="https://mosgorsport.ru/">
          <Box
            height={matches ? "65px" : small ? "45px" : "25px"}
            component="img"
            src="/images/icons/mgs.svg"
          />
        </a>

        <a target="_blank" href="https://sport.moscow">
          <Box
            height={matches ? "65px" : small ? "45px" : "25px"}
            component="img"
            src="/images/icons/ms.svg"
          />
        </a>

        <a target="_blank" href="https://www.mos.ru/moskomsport/">
          <Box
            height={matches ? "65px" : small ? "45px" : "25px"}
            component="img"
            src="/images/icons/dsgm.svg"
          />
        </a>
      </Stack>
    </>
  );
};

export default Cover;
