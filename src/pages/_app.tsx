import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type {} from "styled-components/cssprop";
import "@/styles/globals.css";
import "@fontsource-variable/oswald";
import "@fontsource-variable/inconsolata";
import "@fontsource-variable/nunito";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const pageLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return pageLayout(<Component {...pageProps} />);
}

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
