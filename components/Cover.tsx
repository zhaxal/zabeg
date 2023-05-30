import { Box } from "@mui/material";
import { FC } from "react";

const Cover: FC = () => {
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
    </>
  );
};

export default Cover;
