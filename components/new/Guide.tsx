import { Box, Link, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

const BLUE = "#0F2572";

interface GuideStepProps {
  step: number;
  title: string;
  children: ReactNode;
}

const bodyTextSx = {
  fontFamily: "Gotham Pro Regular",
  fontSize: { xs: "14px", sm: "16px", md: "18px" },
  lineHeight: "150%",
  color: "#FFFFFF",
};

const GuideStep: FC<GuideStepProps> = ({ step, title, children }) => (
  <Stack direction="row" spacing={{ xs: "16px", sm: "24px", md: "32px" }} alignItems="flex-start">
    <Typography
      sx={{
        fontFamily: "Gotham Pro Bold",
        fontSize: { xs: "48px", sm: "64px", md: "80px" },
        lineHeight: 1,
        color: "rgba(255, 255, 255, 0.95)",
        width: { xs: "52px", sm: "68px", md: "88px" },
        textAlign: "right",
        flexShrink: 0,
      }}
    >
      {String(step).padStart(2, "0")}
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
          fontSize: { xs: "17px", sm: "20px", md: "22px" },
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

const Guide: FC = () => (
  <Box>
    <Box pt={12} id="guide" bgcolor={BLUE}>
      <Typography
        sx={{
          mb: "56px",
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#FFFFFF",
          fontSize: { xs: "48px", sm: "96px", md: "128px" },
          lineHeight: { xs: "48px", sm: "96px", md: "128px" },
        }}
      >
        КАК ПРИНЯТЬ УЧАСТИЕ
      </Typography>

      <Stack
        px={{ xs: "20px", md: "60px", lg: "120px" }}
        spacing={{ xs: "28px", sm: "36px" }}
      >
        <GuideStep step={1} title="Регистрация">
          <Typography sx={bodyTextSx}>
            Выберите дистанцию и один из пяти парков, где вы хотите пробежать,
            перейдите на страницу регистрации и заполните анкету.
          </Typography>
        </GuideStep>

        <GuideStep step={2} title="Подготовка к старту">
          <Typography sx={bodyTextSx}>
            Заранее получите у врача медицинскую справку, допускающую вас к
            соревнованиям на ту дистанцию, которую собираетесь преодолевать. В
            случае отсутствия справки, участник к забегу не допускается.
          </Typography>
          <Link
            href="#documents"
            sx={{ ...bodyTextSx, color: "#FFFFFF", textDecoration: "underline", display: "inline" }}
          >
            Более подробную информацию читайте в Положении о проведении мероприятия
          </Link>
        </GuideStep>

        <GuideStep step={3} title="Регистрация и получение стартового пакета">
          <Typography sx={bodyTextSx}>
            В день забега в зоне регистрации предъявите оригиналы документов:
          </Typography>
          <Stack component="ul" spacing="6px" sx={{ m: 0, pl: "20px" }}>
            {[
              "Документ, удостоверяющий личность (паспорт РФ / свидетельство о рождении)",
              "Индивидуальный или коллективный медицинский допуск (оригинал и копия)",
              "Полис ОМС или ДМС",
            ].map((item) => (
              <Typography key={item} component="li" sx={bodyTextSx}>
                {item}
              </Typography>
            ))}
          </Stack>
        </GuideStep>

        <GuideStep step={4} title="Участие в забеге">
          <Typography sx={bodyTextSx}>
            Стартуйте на дистанции для вашего возраста. Желаем удачи!
          </Typography>
        </GuideStep>
      </Stack>

      {/* Важная информация */}
      <Box px={{ xs: "20px", md: "60px", lg: "120px" }} mt={{ xs: "40px", sm: "56px" }}>
        <Typography
          sx={{
            fontFamily: "Gotham Pro Bold",
            fontSize: { xs: "18px", sm: "22px", md: "26px" },
            color: "#FFFFFF",
            lineHeight: "1.2",
            mb: { xs: "16px", sm: "24px" },
          }}
        >
          Важная информация
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: "12px", sm: "16px" },
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
            <Box
              key={item}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                px: { xs: "16px", sm: "20px" },
                py: { xs: "14px", sm: "16px" },
              }}
            >
              <Typography sx={bodyTextSx}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Guide;
