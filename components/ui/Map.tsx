import { Box } from "@mui/material";
import { FC } from "react";
interface MapProps {
  mapLink: string;
}

const Map: FC<MapProps> = ({ mapLink }) => {
  return (
    <Box
      component="iframe"
      border="none"
      src={mapLink}
      width="100%"
      minHeight="508px"
    />
  );
};

export default Map;
