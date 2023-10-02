import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalMeta from "@/components/GlobalMeta";
import { themeDark, themeLight } from "@/theme";
import GradientBackground from "@/components/GradientBackground";
import Tagline from "@/components/Tagline";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [theme, setTheme] = useState(themeLight);
  const [themeSwitch, setThemeSwitch] = useState<"auto" | "light" | "dark">(
    "auto"
  );

  useEffect(() => {
    const themeMap = {
      auto: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themeDark
        : themeLight,
      light: themeLight,
      dark: themeDark,
    };
    setTheme(themeMap[themeSwitch]);
  }, [themeSwitch]);

  return (
    <>
      <Head>
        <title>Richh NextJS Starter</title>
        <meta name="description" content="Richh NextJS Starter" />
        <GlobalMeta />
      </Head>
      <ThemeProvider theme={theme}>
        <Outer>
          <NavBar themeSwitch={themeSwitch} setThemeSwitch={setThemeSwitch} />
          <Main>
            <Tagline text={"Richh NextJS Starter"} />
          </Main>
        </Outer>
        <GradientBackground />
      </ThemeProvider>
    </>
  );
}

const Outer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  height: 100%;
`;

const Main = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
`;
