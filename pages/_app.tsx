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
          content="10 июня. Забег в пяти парках столицы"
        />
        <meta property="og:title" content={`Забег "На старт!"`} />
        <meta
          property="og:description"
          content="Забег в пяти парках столицы для детей и взрослых на дистанциях 500 м, 1 км, 3 км и 5 км"
        />
        <meta property="og:url" content="running.mosgorsport.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://running.mosgorsport.ru/preview.jpg" />

        <title>Забег На старт!</title>
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
