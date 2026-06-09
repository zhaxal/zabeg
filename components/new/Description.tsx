import { handleScrollToElement } from "@/utils/scroll";
import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const BLUE = "#0F2572";
const CORAL = "#E85555";

// const DescriptionDesktop: FC = () => {
//   const theme = useTheme();
//   const large = useMediaQuery(theme.breakpoints.up("lg"));

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#E3F2FF",
//       }}
//     >
//       <Box
//         id="description"
//         sx={{
//           backgroundImage: "url(/images/description.svg)",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           aspectRatio: "1170/1595",
//         }}
//       >
//         <Stack
//           pt="188px"
//           px={large ? "167px" : "40px"}
//           direction="row"
//           justifyContent="flex-end"
//         >
//           <Box>
//             <Typography
//               sx={{
//                 mb: "64px",
//                 textIndent: "32px",
//                 maxWidth: "400px",
//                 fontFamily: "Gotham Pro Medium",
//                 fontSize: large ? "24px" : "18px",
//                 color: BLUE,
//                 lineHeight: "120%",
//                 fontWeight: 400,
//               }}
//             >
//               15 июня в 5 парках столицы пройдет забег для детей и взрослых на
//               дистанциях 500 м, 1 км, 3 км, 5 км. Подойдет как новичкам, которые
//               хотят поучаствовать в массовом состязании, так и любителям,
//               которые хотят подготовиться к марафонам. Для самых уверенных в
//               себе будет доступна дистанция в 10 км на флагманской площадке на
//               стадионе «Авангард». <br />
//               <br />
//               Все на старт!
//             </Typography>
//             <Stack px="50px" justifyContent="center">
//               <Button
//                 onClick={handleScrollToElement("park")}
//                 sx={{
//                   position: "relative",
//                   background:
//                     "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
//                   boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
//                   borderRadius: "8px",
//                   fontFamily: "Gotham Pro Bold",
//                   fontSize: large ? "18px" : "16px",
//                   lineHeight: "152%",
//                   color: "#31313E",
//                   px: large ? "40px" : "20px",
//                   py: large ? "20px" : "16px",
//                   "& .MuiTouchRipple-root": {
//                     color: "#FFFFFF", // Change this to the desired ripple color
//                   },
//                 }}
//               >
//                 РЕЗУЛЬТАТЫ
//                 <Box
//                   sx={{ position: "absolute", top: "100%" }}
//                   width="100%"
//                   height="auto"
//                   component="img"
//                   src="/images/medal.svg"
//                 />
//               </Button>
//             </Stack>
//           </Box>
//         </Stack>
//         <Box pt={large ? "180px" : "80px"} px={large ? "110px" : "40px"}>
//           <Typography
//             sx={{
//               maxWidth: large ? "473px" : "350px",
//               fontFamily: "Gotham Pro Bold",
//               fontSize: large ? "32px" : "24px",
//               color: BLUE,
//               lineHeight: large ? "32px" : "28px",
//             }}
//           >
//             Все участники получат дипломы и медаль финишера, а победители и
//             призеры - медали и памятные призы
//           </Typography>

//           <Link
//             target="_blank"
//             href="https://disk.yandex.ru/d/rfFIi_cmXKRnrw"
//             sx={{
//               fontFamily: "Gotham Pro Bold",
//               fontSize: "18px",
//               lineHeight: "152%",
//               color: "#0461B5",
//               textDecoration: "underline",
//             }}
//           >
//             <br />
//             Положение о мероприятии
//           </Link>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// const DescriptionMobile: FC = () => {
//   const small = useMediaQuery("(min-width:480px)");
//   const medium = useMediaQuery("(min-width:1100px)");

//   return (
//     <Box
//       sx={{
//         backgroundImage: "linear-gradient(to bottom, #0098D7, #88D8FC)",
//       }}
//     >
//       <Box
//         id="description"
//         sx={{
//           backgroundImage: "url(/images/mobile/description.svg)",

//           backgroundRepeat: "no-repeat",
//           backgroundPosition: small ? "center" : "right",
//           backgroundSize: "cover",

//           aspectRatio: "480/1257",
//         }}
//       >
//         <Stack px="8px" pt={!small ? "128px" : "140px"} direction="row">
//           <Box>
//             <Box
//               width="100%"
//               component="img"
//               src="/images/description_logo.svg"
//             />
//           </Box>

//           <Box px="10px">
//             <Typography
//               sx={{
//                 mb: "16px",
//                 textIndent: "32px",
//                 maxWidth: "234px",
//                 fontFamily: "Gotham Pro Regular",
//                 fontSize: "16px",
//                 color: BLUE,
//                 lineHeight: "120%",
//               }}
//             >
//               15 июня в 5 парках столицы пройдет забег для детей и взрослых на
//               дистанциях 500 м, 1 км, 3 км, 5 км. Подойдет как новичкам, которые
//               хотят поучаствовать в массовом состязании, так и любителям,
//               которые хотят подготовиться к марафонам. Для самых уверенных в
//               себе будет доступна дистанция в 10 км на флагманской площадке на
//               стадионе «Авангард». <br />
//               <br />
//               Все на старт!
//             </Typography>
//           </Box>
//         </Stack>
//         <Stack pt="16px" direction="row" justifyContent="center">
//           <Button
//             onClick={handleScrollToElement("park")}
//             sx={{
//               position: "relative",
//               background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
//               boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
//               borderRadius: "8px",
//               fontFamily: "Gotham Pro Bold",
//               fontSize: "16px",
//               lineHeight: "152%",
//               color: "#31313E",
//               px: "20px",
//               py: "16px",
//               "& .MuiTouchRipple-root": {
//                 color: "#FFFFFF", // Change this to the desired ripple color
//               },
//             }}
//           >
//             РЕЗУЛЬТАТЫ
//           </Button>
//         </Stack>
//         <Stack alignItems="center" pt="42px" px="60px">
//           <Typography
//             sx={{
//               maxWidth: "350px",
//               fontFamily: "Gotham Pro Bold",
//               fontSize: "24px",
//               color: BLUE,
//               lineHeight: "23px",
//               textAlign: "center",
//             }}
//           >
//             Все участники получат дипломы и медаль финишера, а победители и
//             призеры - медали и памятные призы
//           </Typography>

//           <Link
//             target="_blank"
//             href="https://disk.yandex.ru/d/rfFIi_cmXKRnrw"
//             sx={{
//               fontFamily: "Gotham Pro Bold",
//               fontSize: "18px",
//               lineHeight: "152%",
//               color: "#0461B5",
//               textDecoration: "underline",
//             }}
//           >
//             <br />
//             Положение о мероприятии
//           </Link>
//         </Stack>
//         <Stack px="64px" pt="42px" alignItems="center">
//           <Box
//             width="100%"
//             height="auto"
//             component="img"
//             src="/images/medal.svg"
//           />
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

const Description: FC = () => {
  return (
    <>
      <Box
        py={{ xs: 4, md: 8 }}
        px={{ xs: 2, md: 12 }}
        sx={{ bgcolor: "#FFFFFF", position: "relative" }}
      >
        {/* <Box
          component="img"
          src="/images/zabeg_2026/free.svg"
          sx={{
            position: "absolute",
            top: 50,
            right: 0,
            zIndex: 1,
          }}
        /> */}
        <Box id="description">
          <Stack
            width="100%"
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box width={{ xs: "80%", md: "50%" }}>
              <Box
                width="100%"
                height="auto"
                component="img"
                src="/images/zabeg_2026/cheloveki.png"
              />
            </Box>
            <Box width={{ xs: "100%", md: "50%" }}>
              <Typography
                sx={{
                  mb: { xs: "16px", md: "24px" },
                  fontFamily: "Gotham Pro Medium",
                  fontSize: { xs: "16px", lg: "18px" },
                  color: BLUE,
                  lineHeight: "150%",
                  fontWeight: 400,
                }}
              >
                20 июня в пяти парках Москвы пройдет ежегодный бесплатный
                массовый забег «На старт!». Принять участие приглашаются
                взрослые и дети — как новички, так и опытные бегуны. Для
                участников подготовлены дистанции разного уровня сложности — в
                зависимости от возраста и спортивной подготовки.
              </Typography>
              <Typography
                sx={{
                  mb: { xs: "16px", md: "24px" },
                  fontFamily: "Gotham Pro Medium",
                  fontSize: { xs: "16px", lg: "18px" },
                  color: BLUE,
                  lineHeight: "150%",
                  fontWeight: 400,
                }}
              >
                Основное событие состоится на стадионе «Авангард», где пройдет
                забег на 10 километров. Эта дистанция предназначена для тех, кто
                хочет испытать свои силы в более серьезном соревновании и
                сделать первый шаг к профессиональному бегу. Каждому участнику
                будет предоставлен стартовый мешок с вложениями и стартовый
                номер. Победители в каждой из дистанций — первые три финишера —
                получат медали.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Medium",
                  fontSize: { xs: "16px", lg: "18px" },
                  color: BLUE,
                  lineHeight: "150%",
                  fontWeight: 400,
                }}
              >
                Также во всех парках будет организован семейный забег для детей
                от 4 до 7 лет и их родителей. Все юные участники получат
                памятные медали и сувениры. Кроме того, на стадионе «Авангард»
                детей будет ждать разминка и фотозона от мультипликационного
                персонажа детектива Финника.
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  mt: { xs: "24px", md: "36px" },
                  bgcolor: CORAL,
                  px: { xs: "20px", md: "28px" },
                  py: { xs: "8px", md: "12px" },
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "Mossport",
                    pt: { xs: "4px", md: "8px" },
                    fontSize: {
                      xs: "32px",
                      sm: "40px",
                      md: "48px",
                      lg: "56px",
                    },
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}
                >
                  Все на старт!
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: CORAL,
          py: { xs: "14px", lg: "20px" },
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 12s linear infinite",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: { xs: "22px", lg: "32px" },
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                px: "40px",
              }}
            >
              Участие бесплатно
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Description;
