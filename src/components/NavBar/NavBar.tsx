import styled, { css } from "styled-components";
import { size } from "@/theme";
import { clampDefault } from "@/theme/text";
import { clampGen } from "@/utils/clamp-generator";
import GithubSvg from "@/images/github-icon.svg";
import ThemeSwitch from "@/components/ThemeSwitch";
import { NavBarProps } from "./types";

export const NavBar = (props: NavBarProps) => (
  <NavBarOuter>
    <IconLink
      href="https://github.com/richhdev/richh-nextjs-starter"
      target="_blank"
      aria-label="github"
    >
      <GithubSvg role="img" alt="github" />
    </IconLink>
    <IconLink as="div">
      <ThemeSwitch
        themeSwitch={props.themeSwitch}
        setThemeSwitch={props.setThemeSwitch}
      />
    </IconLink>
  </NavBarOuter>
);

const NavBarOuter = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: ${clampGen({
    minFontSize: "60",
    maxFontSize: "80",
    ...clampDefault,
  })};
  padding: ${size.sm};
  backdrop-filter: blur(1px);

  display: flex;
  place-content: end;
  gap: 8px;
`;

const iconSize = clampGen({
  minFontSize: "37.5",
  maxFontSize: "52",
  ...clampDefault,
});

const IconLink = styled.a`
  width: ${iconSize};
  height: ${iconSize};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.id === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
    transition: background-color 200ms ease;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  svg path {
    fill: ${(props) => (props.theme.id === "dark" ? "white" : "black")};
  }
`;
