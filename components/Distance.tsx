import { Box, Stack, Typography, StackProps } from "@mui/material";
import { FC } from "react";

interface TableRowProps extends StackProps {
  age: string;
  distance: string;
  icon: string;
}

const TableRow: FC<TableRowProps> = ({
  age,
  distance,
  icon,
  ...stackProps
}) => {
  return (
    <Stack width="100%" direction="row" {...stackProps}>
      <Box
        sx={{
          py: "5px",
          backgroundColor: "#F2F2F2",
          width: "27%",
          fontFamily: "Gotham Pro Bold",
          fontSize: "24px",
          color: "#1F1F1F",
          lineHeight: "23px",
          textAlign: "center",
        }}
      >
        {age}
      </Box>
      <Box
        sx={{
          width: "73%",
          borderBottom: "5px solid #F2F2F2",
          fontFamily: "Gotham Pro Regular",
          fontSize: "24px",
          color: "#1F1F1F",
          lineHeight: "23px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "13px",
            bottom: "0px",
          }}
          component="img"
          src={icon}
        />
        {distance}
      </Box>
    </Stack>
  );
};

const Distance: FC = () => {
  return (
    <Box
      id="distance"
      sx={{
        backgroundImage: "url(/images/distance.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 1053,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#FFFFFF",
          fontSize: "128px",
          lineHeight: "128px",
        }}
      >
        ДИСТАНЦИИ
      </Typography>

      <Stack mt="46px">
        <Stack px="13.5rem" spacing="40px">
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: "24px",
              lineHeight: "23px",
              color: "#000000",
              textAlign: "center",
            }}
          >
            ДЕТИ
          </Typography>
          <TableRow
            age="6-8 лет"
            distance="500 м"
            icon="/images/icons/kid6-8.svg"
          />
          <TableRow
            age="9-14 лет"
            distance="1000 м"
            icon="/images/icons/kid9-14.svg"
          />
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: "24px",
              lineHeight: "23px",
              color: "#000000",
              textAlign: "center",
            }}
          >
            ВЗРОСЛЫЕ
          </Typography>
          <TableRow
            age="15 лет"
            distance="5 км"
            icon="/images/icons/kid15.svg"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Distance;
