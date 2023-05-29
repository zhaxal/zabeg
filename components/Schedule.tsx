import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface TableRowProps {
  time: string;
  description: string;
}

const TableRow: FC<TableRowProps> = ({ time, description }) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(301.38deg, #0461B5 -7.89%, #0098D7 151.15%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        p: "8px 0px",
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Regular",
              fontSize: "20px",
              lineHeight: "120%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {time}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Regular",
              fontSize: "20px",
              lineHeight: "120%",
              color: "#FFFFFF",
            }}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Schedule: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F89C43",
        backgroundImage: "url(/images/schedule.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 866,
      }}
    >
      <Typography
        sx={{
          mb: "28px",
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#2E2E2E",
          fontSize: "128px",
          lineHeight: "128px",
        }}
      >
        ПРОГРАММА
      </Typography>

      <Stack mb="40px" px="210px" spacing="8px">
        <TableRow
          time="8.00 – 8.45"
          description="Выдача стартовых номеров для участников 6-8 лет"
        />
        <TableRow
          time="9.00 – 9.15"
          description="Старт забега на дистанцию 500 м для участников 6-8 лет"
        />
        <TableRow
          time="9.35 – 9.45"
          description="Награждение победителей дистанции 500 м"
        />
        <TableRow
          time="9.00 – 9.45"
          description="Старт забега на дистанцию 1000 м для участников 9-14 лет"
        />
        <TableRow
          time="10.00 – 10.30"
          description="Награждение победителей дистанции 1000 м"
        />
        <TableRow
          time="10.50 – 11.00"
          description="Выдача стартовых номеров для участников от 15 лет и старше "
        />
        <TableRow
          time="11.30 – 12.15"
          description="Старт забега на дистанцию 5 км для участников от 15 лет и старше"
        />
        <TableRow
          time="11.30 – 12.15"
          description="Награждение победителей дистанции 5 км"
        />
        <TableRow time="13.00" description="Окончание мероприятия" />
      </Stack>

      <Stack justifyContent="flex-end" px="210px" direction="row">
        <Button
          sx={{
            mx: "56px",
            background:
              "linear-gradient(301.38deg, #B81D1D -7.89%, #E7352E 151.15%)",
            borderRadius: "8px",
            px: "40px",
            py: "20px",
            "& .MuiTouchRipple-root": {
              color: "#FFFFFF", // Change this to the desired ripple color
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: "18px",
              lineHeight: "152%",
              color: "#FFFFFF",
            }}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default Schedule;
