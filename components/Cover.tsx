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
          backgroundImage: "url(/images/cover.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#0F2572",
          backgroundSize: "cover",
          minHeight: 784,
        }}
      ></Box>
    </>
  );
};

export default Cover;
