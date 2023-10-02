import styled from "styled-components";
import AutoSvg from "./images/auto.svg";
import LightSvg from "./images/light.svg";
import DarkSvg from "./images/dark.svg";

const ThemeSwitch = ({
  themeSwitch,
  setThemeSwitch,
}: {
  themeSwitch: string;
  setThemeSwitch: Function;
}) => {
  return (
    <Button
      onClick={() => {
        const options = [...Object.keys(themeMap)];
        const index = options.findIndex((item) => item === themeSwitch);
        const nextIndex = index === options.length - 1 ? 0 : index + 1;
        setThemeSwitch(options[nextIndex]);
      }}
    >
      {themeMap[themeSwitch as keyof typeof themeMap].icon}
    </Button>
  );
};

export default ThemeSwitch;

const themeMap = {
  auto: {
    id: "auto",
    icon: <AutoSvg alt="auto" />,
  },
  light: {
    id: "light",
    icon: <LightSvg alt="light" />,
  },
  dark: {
    id: "dark",
    icon: <DarkSvg alt="dark" />,
  },
};

const Button = styled.div`
  all: unset;
  outline: revert;
`;
