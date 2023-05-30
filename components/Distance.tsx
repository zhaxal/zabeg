import {
  Box,
  Stack,
  Typography,
  StackProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack width="100%" direction="row" {...stackProps}>
      <Box
        sx={{
          py: "5px",
          backgroundColor: "#F2F2F2",
          width: "27%",
          fontFamily: "Gotham Pro Bold",
          fontSize: matches ? "24px" : "20px",
          color: "#1F1F1F",
          lineHeight: matches ? "24px" : "19px",
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
          fontSize: matches ? "24px" : "20px",
          color: "#1F1F1F",
          lineHeight: matches ? "23px" : "19px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: matches ? null : "10%",
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
          backgroundImage: "url(/images/distance.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
  
          aspectRatio: matches ? "1170/1027" : sm ? "480/600" : "480/827",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#FFFFFF",
            fontSize: medium ? "128px" : "96px",
            lineHeight: medium ? "128px" : "96px",
          }}
        >
          ДИСТАНЦИИ
        </Typography>

        <Stack mt="46px">
          <Stack
            px={matches ? (medium ? "13.5rem" : "10px") : "10px"}
            spacing="40px"
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: matches ? "24px" : "20px",
                lineHeight: matches ? "23px" : "19px",
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
                fontSize: matches ? "24px" : "20px",
                lineHeight: matches ? "23px" : "19px",
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
    </Box>
  );
};

export default Distance;
