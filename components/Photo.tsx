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
    "https://i.ibb.co/b3cJcFb/0-ZI-CJh-ITQ0.jpg",
    "https://i.ibb.co/9kwGpcBT/24-06-15-12-21-18-ME1-8150.jpg",
    "https://i.ibb.co/kHsNVkM/a8w-5e-Xyq-Yw.jpg",
    "https://i.ibb.co/wrhDTQBC/24-06-15-12-37-41-ME1-8403.jpg",
    "https://i.ibb.co/x5Z41Zf/e-OCPCh-Ugz-Hs.jpg",
    "https://i.ibb.co/rcd0fnn/nm-BAs-Oy-SSPU.jpg",
    "https://i.ibb.co/fnsYjNr/Wl-T3-GOi15-Y8.jpg",
    "https://i.ibb.co/TvBwLgF/I50-Uhg0aaps.jpg",
    "https://i.ibb.co/5cm6VHc/qu-Tkof-Zilyc.jpg",
    "https://i.ibb.co/25FgWPh/ra-Opu-KVn-WMg.jpg",
    "https://i.ibb.co/NjsSDMx/s-NRI6-H-4uv-E.jpg",
    "https://i.ibb.co/WPzLGNW/vk-YG0-Ma-U7qs.jpg",
    "https://i.ibb.co/P4xd6D2/c-Lb-L35gn-ks.jpg",
    "https://i.ibb.co/M9n4nhg/7-Ixn-ZF-4q-DU.jpg",
    "https://i.ibb.co/c1mTNYL/fp2-YKB6-WHWQ.jpg",
    "https://i.ibb.co/rcd0fnn/nm-BAs-Oy-SSPU.jpg",
    "https://i.ibb.co/fnsYjNr/Wl-T3-GOi15-Y8.jpg",
    "https://i.ibb.co/qkwvXM1/g-Ka-Asq0rw-Zk.jpg",
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
                    objectFit: "cover",
                    aspectRatio: "235/167",
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
