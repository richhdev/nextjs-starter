import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type {} from "styled-components/cssprop";
import "@fontsource-variable/oswald";
import "@fontsource-variable/inconsolata";
import "@fontsource-variable/nunito";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
