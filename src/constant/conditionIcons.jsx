import { PiCloudBold as Cloudy, PiCloudFogBold as Fog, PiCloudLightningBold as Heavyrain, PiCloudRainBold as Lightrain, PiCloudSnowBold as Heavysnow, PiCloudSunBold as Partlycloudy, PiSunBold as Sunny, PiMoonBold as Moon } from "react-icons/pi";

const conditionIcons = {
    'Cloudy': <Cloudy size={40} fill="var(--color-solid-2)" />,
    'Overcast': <Cloudy size={40} fill="var(--color-solid-2)" />,
    'Fog': <Fog size={40} fill="var(--color-solid-2)" />,
    'Heavy rain': <Heavyrain size={40} fill="var(--color-solid-2)" />,
    'Light rain': <Lightrain size={40} fill="var(--color-solid-2)" />,
    'Heavy snow': <Heavysnow size={40} fill="var(--color-solid-2)" />,
    'Partly cloudy': <Partlycloudy size={40} fill="var(--color-solid-2)" />,
    'Sunny': <Sunny size={40} fill="var(--color-solid-2)" />,
    'Moon': <Moon size={40} fill="var(--color-solid-2)" />,
}

export { conditionIcons };