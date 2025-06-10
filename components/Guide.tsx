import {
  Box,
  Grid,
  Stack,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { FC, ReactNode } from "react";

interface GuideRowProps {
  step: number;
  title: string;
  text: ReactNode;
  position: "left" | "right";
  icon: string;
}

const GuideRow: FC<GuideRowProps> = ({ title, text, icon, position, step }) => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const TextBox: FC = () => {
    return (
      <Grid item xs={9}>
        <Stack spacing="10px">
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: md ? "32px" : "24px",
              color: "#FFFFFF",
              lineHeight: md ? "31px" : "23px",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              overflow: "hidden",
              border: "3px solid #FFFFFF",
              borderRadius: "20px",
            }}
          >
            <Stack position="relative" direction="row">
              <Typography
                sx={{
                  opacity: 0,
                  fontFamily: "Gotham Pro Bold",
                  fontSize: md ? "293px" : "170px",
                  lineHeight: md ? "280px" : "105%",
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.34)",
                }}
              >
                {step}
              </Typography>
              <Typography
                sx={{
                  left: sm ? "-6%" : "-10%",
                  position: "absolute",
                  fontWeight: 700,
                  fontFamily: "Gotham Pro Bold",
                  fontSize: md ? "293px" : "215px",
                  lineHeight: md ? "280px" : "105%",
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.34)",
                }}
              >
                {step}
              </Typography>
              <Stack
                py={2}
                sx={{
                  justifyContent: "center",
                }}
              >
                {text}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    );
  };

  const IconBox: FC = () => {
    return (
      <Grid
        item
        xs={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            backgroundColor: "#0461B5",
          }}
          width="100%"
          height="auto"
          component="img"
          src={icon}
        />
      </Grid>
    );
  };

  return (
    <>
      {position === "left" ? (
        <>
          <TextBox />
          <IconBox />
        </>
      ) : (
        <>
          <IconBox />
          <TextBox />
        </>
      )}
    </>
  );
};

const Guide: FC = () => {
  const theme = useTheme();

  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #0461B5, #60D0FF)",
      }}
    >
      <Box
        id="guide"
        sx={{
          paddingTop: "64px",
          backgroundImage: "url(/images/guide.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          aspectRatio: `1170/${lg ? 2550 : 2800}`,
        }}
      >
        <Typography
          sx={{
            mb: "72px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#FFFFFF",
            fontSize: sm ? (md ? "128px" : "96px") : "48px",
            lineHeight: sm ? (md ? "128px" : "96px") : "48px",
          }}
        >
          КАК ПРИНЯТЬ УЧАСТИЕ
        </Typography>

        <Grid
          rowSpacing="42px"
          columnSpacing={sm ? "32px" : "16px"}
          px={md ? (lg ? "205px" : "100px") : "10px"}
          container
        >
          <GuideRow
            step={1}
            title="Регистрация на сайте"
            text={
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontSize: "20px",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                }}
              >
                Выберите один из пяти парков, где вы хотите пробежать, перейдите
                на страницу регистрации и заполните анкету.
              </Typography>
            }
            icon="/images/icons/guide_icon1.svg"
            position="left"
          />
          <GuideRow
            step={2}
            title="Медицинский допуск"
            text={
              <>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontSize: sm ? "20px" : "16px",
                    lineHeight: "120%",
                    color: "#FFFFFF",
                  }}
                >
                  До даты начала соревнований получите у врача справку,
                  допускающую к соревнованиям. Без нее вам организаторы не
                  разрешат участвовать в забеге.
                </Typography>

                <Link
                  mt={1}
                  target="_blank"
                  href="https://drive.google.com/file/d/12hkCvpqXpFh3i3WzE4mJyAQkuuRc-o6Q/view?usp=sharing"
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontSize: sm ? "20px" : "16px",
                    lineHeight: "120%",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  Более подробную информацию читайте в Положении о проведении
                  мероприятия
                </Link>
              </>
            }
            icon="/images/icons/guide_icon2.png"
            position="right"
          />
          <GuideRow
            step={3}
            title="Регистрация и получение стартового пакета"
            text={
              <>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontSize: sm ? "20px" : "14px",
                    lineHeight: "120%",
                    color: "#FFFFFF",
                  }}
                >
                  В день забега в зоне регистрации предъявите оригиналы
                  документов:
                </Typography>
                <ul>
                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: sm ? "20px" : "14px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    Документ, удостоверяющий личность (паспорт РФ/ свидетельство
                    о рождении)
                  </Typography>
                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: sm ? "20px" : "14px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    Индивидуальный или коллективный медицинский допуск (оригинал
                    и копия)
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: sm ? "20px" : "14px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    Полис ОМС или ДМС
                  </Typography>
                </ul>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontSize: sm ? "20px" : "14px",
                    lineHeight: "120%",
                    color: "#FFFFFF",
                  }}
                >
                  Также вы получите стартовый пакет участника.
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    mt: "16px",
                    fontFamily: "Gotham Pro Regular",
                    fontSize: sm ? "20px" : "14px",
                    fontStyle: "italic",
                    lineHeight: "120%",
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  Медицинский допуск (справка) необходим всем участникам!
                </Typography>
              </>
            }
            icon="/images/icons/guide_icon3.svg"
            position="left"
          />
          <GuideRow
            step={4}
            title="Забег"
            text={
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Medium",
                  fontSize: md ? "32px" : "24px",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                }}
              >
                Стартуйте на дистанции для вашего возраста. Желаем удачи!
              </Typography>
            }
            icon="/images/icons/guide_icon4.svg"
            position="right"
          />

          <Grid mb={!md ? "120px" : "0px"} item xs={12}>
            <Stack spacing="10px">
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontSize: "32px",
                  color: "#FFFFFF",
                  lineHeight: "31px",
                  textAlign: "center",
                }}
              >
                Общая информация
              </Typography>

              <Box
                sx={{
                  p: "32px",
                  border: "3px solid #FFFFFF",
                  borderRadius: "20px",
                }}
              >
                <ul>
                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Возле стартовых площадок есть раздевалки. Каждому участнику
                    необходимо прийти на старт в спортивной форме по погоде и в
                    обуви, предназначенной для бега. По возможности возьмите с
                    собой воду.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Дети до 18 лет допускаются до участия только в присутствии
                    законных представителей.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    При отсутствии оригиналов документов участник не допускается
                    до соревнований.
                  </Typography>
                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Победители и призеры мероприятия определяются по лучшему
                    результату прохождения дистанции, отдельно среди мальчиков и
                    девочек, мужчин и женщин в каждой возрастной категории.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Результаты забега определяются по gun-time при помощи
                    системы электронного хронометража. Для этого каждый участник
                    получает стартовый номер с индивидуальным электронным чипом.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Все финишировавшие участники получат диплом и медаль
                    финишера, а победители и призеры - медали соответствующих
                    степеней и призы.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Старт участников соревнований в каждой возрастной категории
                    проводится по системе «Массовый старт».
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Медицинская справка необходима для всех категорий
                    участников.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Во избежание случаев травматизма количество участников
                    мероприятия ограничено.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Организатор мероприятия оставляет за собой право о досрочном
                    закрытии регистрации по достижению максимального лимита
                    участников.
                  </Typography>

                  <Typography
                    component="li"
                    sx={{
                      fontFamily: "Gotham Pro Regular",
                      fontSize: "20px",
                      lineHeight: "120%",
                      color: "#FFFFFF",
                    }}
                  >
                    Регистрация в день проведения мероприятия на площадке не
                    проводится.
                  </Typography>
                </ul>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          pt={!md ? "16px" : "42px"}
          px={md ? (lg ? "205px" : "100px") : "10px"}
          alignItems="center"
        >
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: "32px",
              color: "#FFFFFF",
              lineHeight: "31px",
              textAlign: "center",
            }}
          >
            Стартовый пакет
          </Typography>

          <Box
            component="img"
            src="/images/packet.png"
            sx={{
              width: "100%",
              height: "auto",
              mt: "16px",
              mb: "172px",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Guide;
