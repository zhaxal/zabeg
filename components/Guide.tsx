import { Box, Grid, Stack, Typography, Link } from "@mui/material";

import { FC, ReactNode } from "react";

interface GuideRowProps {
  step: number;
  title: string;
  text: ReactNode;
  position: "left" | "right";
  icon: string;
}

const GuideRow: FC<GuideRowProps> = ({ title, text, icon, position, step }) => {
  const TextBox: FC = () => {
    return (
      <Grid item xs={9}>
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
            {title}
          </Typography>

          <Box
            sx={{
              border: "3px solid #FFFFFF",
              borderRadius: "20px",
            }}
          >
            <Stack direction="row" spacing="10px">
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontSize: "293px",
                  lineHeight: "280px",
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
        <Box component="img" src={icon} />
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
  return (
    <Box
      sx={{
        backgroundColor: "#0461B5",
        backgroundImage: "url(/images/guide.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 2550,
      }}
    >
      <Typography
        sx={{
          mb: "72px",
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#FFFFFF",
          fontSize: "128px",
          lineHeight: "128px",
        }}
      >
        КАК ПРИНЯТЬ УЧАСТИЕ
      </Typography>

      <Grid rowSpacing="42px" columnSpacing="32px" px="205px" container>
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
                  fontSize: "20px",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                }}
              >
                До даты начала соревнований получите у врача справку,
                допускающую к соревнованиям. Без нее вам организаторы не
                разрешат участвовать в забеге.
              </Typography>
              
              <Link
                component="p"
                href="https://mos.ru/mayor/themes/1040/"
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontSize: "20px",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                  textDecoration: "underline",
                }}
              >
                Подробнее о форме справки.
              </Link>
            </>
          }
          icon="/images/icons/guide_icon2.svg"
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
                  fontSize: "20px",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                }}
              >
                В день забега в зоне регистрации предъявите оригиналы
                документов:&nbsp;
              </Typography>

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
                  документ, удостоверяющий личность (паспорт РФ/ свидетельство о
                  рождении);
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
                  индивидуальный или коллективный медицинский допуск;
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
                  полис ОМС или ДМС.
                </Typography>
              </ul>

              <Typography
                component="p"
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontSize: "20px",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                }}
              >
                Также вы получите стартовый пакет участника.
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
                fontSize: "32px",
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

        <Grid item xs={12}>
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
                  законных представителей.&nbsp;
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
                  до соревнований.&nbsp;
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
                  девочек, мужчин и женщин в каждой возрастной категории.&nbsp;
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
                  Результаты забега определяются по gun-time при помощи системы
                  электронного хронометража. Для этого каждый участник получает
                  стартовый номер с индивидуальным электронным чипом.
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
                  Все участники получат памятную медаль, а победителям и
                  призерам будут вручены дипломы и поощрительные призы.
                </Typography>
              </ul>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Guide;
