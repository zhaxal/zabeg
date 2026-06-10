import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="20 июня 2026 года. Бесплатный массовый забег в пяти парках Москвы для детей и взрослых на дистанциях 500 м, 1 км, 3 км, 5 км и 10 км."
        />
        <meta property="og:title" content={`Забег «На старт!» 2026`} />
        <meta
          property="og:description"
          content="20 июня 2026 — бесплатный массовый забег в пяти парках Москвы. Дистанции для детей и взрослых: 500 м, 1 км, 3 км, 5 км, 10 км. Участие бесплатно!"
        />
        <meta property="og:url" content="running.mosgorsport.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://running.mosgorsport.ru/preview.jpg" />

        <title>Забег «На старт!» 2026 — 20 июня, Москва</title>
      </Head>
      <Box
        component="div"
        sx={{ display: "none" }}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <span itemProp="name">Забег На старт!</span>
        <span itemProp="email">pr@mosgorsport.ru</span>
        <div itemScope itemType="http://schema.org/ImageObject">
          <img src="Забег На старт!" />
        </div>
      </Box>
      <Component {...pageProps} />
    </>
  );
}
