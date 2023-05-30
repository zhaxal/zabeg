import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { PublicResourcesResponse } from "@/models/yandex-disk";

import axios from "axios";

const Photo: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");
  
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get<PublicResourcesResponse>(
        "https://cloud-api.yandex.net/v1/disk/public/resources",
        {
          params: {
            public_key: "https://disk.yandex.ru/d/yMguf9pJQoN-ZA",
          },
          headers: {
            Authorization: `OAuth ${process.env.NEXT_PUBLIC_YANDEX_TOKEN}`,
          },
        }
      )
      .then((res) => {
        const data = res.data._embedded.items.map((item) => {
          const url = item.sizes.filter((size) => size.name === "XXL")[0].url;

          return url;
        });

        setImages(data);
      });
  }, []);

  return (
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

      <Grid px="100px" container spacing="6px">
        {images
          .map((image) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
          .slice(0, md ? 12 : sm ? 6 : 1)}
      </Grid>
    </Box>
  );
};

export default Photo;
