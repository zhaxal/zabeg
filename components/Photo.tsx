import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { PublicResourcesResponse } from "@/models/yandex-disk";

import axios from "axios";

const Photo: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const [images, setImages] = useState<string[]>([
    "https://i.ibb.co/N2JWLrS/IMG-7281.jpg",
    "https://i.ibb.co/r5z6Tf2/IMG-7315.jpg",
    "https://i.ibb.co/1znBmkT/IMG-7437.jpg",
    "https://i.ibb.co/6WD0FbM/PIC-1096.jpg",
    "https://i.ibb.co/wgkGbB3/PIC-1122.jpg",
    "https://i.ibb.co/GcWknH5/PIC-1131.jpg",
    "https://i.ibb.co/DC1Qq5h/IMG-0545.jpg",
    "https://i.ibb.co/grZmWcM/IMG-1285.jpg",
    "https://i.ibb.co/ZKdm9mH/IMG-6921.jpg",
    "https://i.ibb.co/ZGT2p0P/IMG-6938.jpg",
    "https://i.ibb.co/6Z58DWw/B00I1276.jpg",
    "https://i.ibb.co/cbsv4fq/B00I2147.jpg",
    "https://i.ibb.co/nCM2HYD/PIC-1331.jpg",
  ]);

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #88D8FC, #F89C43)",
      }}
    >
      <Box
        id="photo"
        sx={{
          backgroundImage: "url(/images/photo.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          aspectRatio: md ? "1170/1125" : "480/600",
        }}
      >
        <Typography
          sx={{
            mb: "46px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#0461B5",
            fontSize: md ? "128px" : "96px",
            lineHeight: md ? "128px" : "96px",
          }}
        >
          ФОТО
        </Typography>

        <Grid px={md ? "100px" : "10px"} container spacing="6px">
          {images
            .map((image, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Box
                  component="img"
                  src={image}
                  width="100%"
                  height="100%"
                  sx={{
                    objectfit: "cover",
                  }}
                  alt=""
                />
              </Grid>
            ))
            .slice(0, md ? 12 : sm ? 6 : 3)}
        </Grid>
      </Box>
    </Box>
  );
};

export default Photo;
