import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface RegistrationAccordionProps extends Omit<AccordionProps, "children"> {
  title1: string;
  title2: string;
  borderColor: string;
  link: string;
}

const RegistrationAccordion: FC<RegistrationAccordionProps> = ({
  title1,
  title2,
  borderColor,
  link,
  ...accordionProps
}) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{
        background:
          "linear-gradient(301.38deg, #0461B5 -7.89%, #0098D7 151.15%)",
        borderBottom: `6px solid ${borderColor}`,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      {...accordionProps}
    >
      <AccordionSummary
        sx={{
          minHeight: "40px",
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Stack spacing="16px" direction="row">
          <Typography
            sx={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: "20px",
              lineHeight: "120%",
              fontFamily: "Gotham Pro Regular",
              alignItems: "center",
            }}
          >
            {title1}
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "20px",
              lineHeight: "120%",
              fontFamily: "Gotham Pro Regular",
            }}
          >
            {title2}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="row" justifyContent="center">
          {title2 !== "Площадка уточняется" && (
            <Button
              target="_blank"
              disabled
              href={link}
              sx={{
                background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
                borderRadius: "8px",
                fontFamily: "Gotham Pro Bold",
                fontSize: "18px",
                lineHeight: "152%",
                color: "#31313E",
                padding: "20px 40px",
                "& .MuiTouchRipple-root": {
                  color: "#FFFFFF", // Change this to the desired ripple color
                },
              }}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default RegistrationAccordion;
