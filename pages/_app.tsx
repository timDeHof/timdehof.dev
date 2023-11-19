import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";
import { CitationOverlay } from "components";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [
      setTimeout(() => setCitation(false), 4800),
      setTimeout(() => setMain(true), 5700),
    ];
    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);

  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <CitationOverlay citation={citation} />
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          duration: 1.0,
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}
