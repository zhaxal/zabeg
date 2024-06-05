import {
  Box,
  Stack,
  Typography,
  StackProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const Video = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const medium = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #88D8FC, #F89C43)",
      }}
    >
      <Box
        id="distance"
        sx={{
          backgroundImage: matches
            ? "url(/images/video.svg)"
            : "url(/images/mobile/video.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",

          aspectRatio: matches ? "1170/866" : "480/535",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#2E2E2E",
            fontSize: medium ? "128px" : "96px",
            lineHeight: medium ? "128px" : "96px",
          }}
        >
          ВИДЕО
        </Typography>

        <Stack mt={matches ? "40px" : "80px"} mx={matches ? "100px" : "40px"}>
          <Box
            component="iframe"
            border="none"
            width="100%"
            src="https://rutube.ru/play/embed/8038b7b24aa32ccb1a23412132912b0a"
            frameBorder="0"
            allow="clipboard-write; autoplay"
            sx={{
              aspectRatio: "16/9",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Video;
