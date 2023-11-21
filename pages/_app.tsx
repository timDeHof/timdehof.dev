import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (
    page: ReactElement,
    shouldShowNavbar: () => boolean
  ) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const shouldShowNavbar = () => false;

  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>,
    shouldShowNavbar
  );
}
