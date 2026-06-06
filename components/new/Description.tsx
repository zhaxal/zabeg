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
//                 color: "#0F2572",
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
//               color: "#0F2572",
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
//                 color: "#0F2572",
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
//               color: "#0F2572",
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
      <Box py={{ xs: 4, md: 8 }} px={{ xs: 2, md: 12 }} sx={{ bgcolor: "#CAEFFC", position: "relative" }}>
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
                  mb: { xs: "24px", md: "64px" },
                  textIndent: "32px",
                  fontFamily: "Gotham Pro Medium",
                  fontSize: {
                    xs: "18px",
                    lg: "24px",
                  },
                  color: "#0F2572",
                  lineHeight: "120%",
                  fontWeight: 400,
                }}
              >
                20 июня в пяти парках Москвы пройдет масштабный забег для
                взрослых и детей. Забег подойдет как новичкам, которые хотят
                поучаствовать в частью спортивного праздника, так и продвинутым
                атлетам, которые хотят испытать свои силы и побороться за
                победу. Для любителей дистанций подлиннее будет доступен забег
                на 10 км на флагманской площадке на стадионе «Авангард».
                <br />
                <br />
                Каждый участник получает стартовый мешок с полезными вложениями,
                стартовый номер и медаль финишера!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontSize: { xs: "28px", lg: "36px" },
                  color: "#0F2572",
                  textAlign: "center",
                  lineHeight: "120%",
                  mt: "16px",
                }}
              >
                Все на старт!
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#F89C43",
          py: { xs: "14px", lg: "20px" },
          overflow: "hidden",
          width: "100%",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
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
                color: "#31313E",

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
