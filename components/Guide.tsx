import {
  Box,
  Stack,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { FC, ReactNode } from "react";

interface GuideStepProps {
  step: number;
  title: string;
  children: ReactNode;
}

const GuideStep: FC<GuideStepProps> = ({ step, title, children }) => {
  const theme = useTheme();
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  return (
    <Stack direction="row" spacing={sm ? "28px" : "16px"} alignItems="flex-start">
      <Typography
        sx={{
          fontFamily: "Gotham Pro Bold",
          fontSize: md ? "80px" : sm ? "64px" : "48px",
          lineHeight: "1",
          color: "rgba(255, 255, 255, 0.95)",
          minWidth: md ? "80px" : sm ? "64px" : "52px",
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {step < 10 ? `0${step}` : step}
      </Typography>

      <Box
        sx={{
          width: "3px",
          bgcolor: "rgba(255, 255, 255, 0.4)",
          alignSelf: "stretch",
          mt: "6px",
          flexShrink: 0,
        }}
      />

      <Stack spacing="8px" flex={1} pt="4px">
        <Typography
          sx={{
            fontFamily: "Gotham Pro Bold",
            fontSize: md ? "22px" : sm ? "20px" : "17px",
            lineHeight: "1.2",
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
        {children}
      </Stack>
    </Stack>
  );
};

const bodyText = (md: boolean, sm: boolean) => ({
  fontFamily: "Gotham Pro Regular",
  fontSize: md ? "18px" : sm ? "16px" : "14px",
  lineHeight: "150%",
  color: "#FFFFFF",
});

const Guide: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const px = md ? (lg ? "205px" : "100px") : "20px";

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
          paddingBottom: "80px",
          backgroundImage: "url(/images/guide.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <Typography
          sx={{
            mb: "56px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#FFFFFF",
            fontSize: sm ? (md ? "128px" : "96px") : "48px",
            lineHeight: sm ? (md ? "128px" : "96px") : "48px",
          }}
        >
          КАК ПРИНЯТЬ УЧАСТИЕ
        </Typography>

        <Stack
          px={px}
          spacing={sm ? "36px" : "28px"}
        >
          <GuideStep step={1} title="Регистрация">
            <Typography sx={bodyText(md, sm)}>
              Выберите дистанцию и один из пяти парков, где вы хотите
              пробежать, перейдите на страницу регистрации и заполните анкету.
            </Typography>
          </GuideStep>

          <GuideStep step={2} title="Подготовка к старту">
            <Typography sx={bodyText(md, sm)}>
              Заранее получите у врача медицинскую справку, допускающую вас к
              соревнованиям на ту дистанцию, которую собираетесь преодолевать.
              В случае отсутствия справки, участник к забегу не допускается.
            </Typography>
            <Link
              href="#documents"
              sx={{
                ...bodyText(md, sm),
                color: "#FFFFFF",
                textDecoration: "underline",
                display: "inline",
              }}
            >
              Более подробную информацию читайте в Положении о проведении
              мероприятия
            </Link>
          </GuideStep>

          <GuideStep step={3} title="Регистрация и получение стартового пакета">
            <Typography sx={bodyText(md, sm)}>
              В день забега в зоне регистрации предъявите оригиналы документов:
            </Typography>
            <Stack component="ul" spacing="6px" sx={{ m: 0, pl: "20px" }}>
              {[
                "Документ, удостоверяющий личность (паспорт РФ / свидетельство о рождении)",
                "Индивидуальный или коллективный медицинский допуск (оригинал и копия)",
                "Полис ОМС или ДМС",
              ].map((item) => (
                <Typography
                  key={item}
                  component="li"
                  sx={bodyText(md, sm)}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </GuideStep>

          <GuideStep step={4} title="Участие в забеге">
            <Typography sx={bodyText(md, sm)}>
              Стартуйте на дистанции для вашего возраста. Желаем удачи!
            </Typography>
          </GuideStep>
        </Stack>

        {/* Важная информация */}
        <Box
          px={px}
          mt={sm ? "56px" : "40px"}
        >
          <Box
            sx={{
              border: "3px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: sm ? "32px" : "20px",
                py: "16px",
                bgcolor: "rgba(255, 255, 255, 0.15)",
                borderBottom: "2px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Bold",
                  fontSize: md ? "26px" : sm ? "22px" : "18px",
                  color: "#FFFFFF",
                  lineHeight: "1.2",
                }}
              >
                Важная информация
              </Typography>
            </Box>
            <Stack
              component="ul"
              spacing="14px"
              sx={{
                m: 0,
                px: sm ? "32px" : "20px",
                py: sm ? "28px" : "20px",
                pl: sm ? "52px" : "40px",
              }}
            >
              {[
                "Возле стартовых площадок есть раздевалки. Каждому участнику необходимо прийти на старт в спортивной форме по погоде и в обуви, предназначенной для бега. По возможности возьмите с собой воду.",
                "Дети до 18 лет допускаются до участия только в присутствии законных представителей.",
                "При отсутствии оригиналов документов участник не допускается до соревнований.",
                "Победители и призеры мероприятия определяются по лучшему результату прохождения дистанции, отдельно среди мальчиков и девочек, мужчин и женщин в каждой возрастной категории.",
                "Результаты забега определяются по gun-time при помощи системы электронного хронометража. Для этого каждый участник получает стартовый номер с индивидуальным электронным чипом.",
                "Все финишировавшие участники получат диплом и медаль финишера, а победители и призеры — медали соответствующих степеней и призы.",
                "Старт участников соревнований в каждой возрастной категории проводится по системе «Массовый старт».",
                "Медицинская справка необходима для всех категорий участников.",
                "Во избежание случаев травматизма количество участников мероприятия ограничено.",
                "Организатор мероприятия оставляет за собой право о досрочном закрытии регистрации по достижению максимального лимита участников.",
                "Регистрация в день проведения мероприятия на площадке не проводится.",
              ].map((item) => (
                <Typography
                  key={item}
                  component="li"
                  sx={bodyText(md, sm)}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        <Stack
          pt={sm ? "48px" : "36px"}
          px={px}
          alignItems="center"
        >
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: md ? "32px" : "24px",
              color: "#FFFFFF",
              lineHeight: "1.2",
              textAlign: "center",
              mb: "16px",
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
              mb: "80px",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Guide;
