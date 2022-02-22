import React from "react";
import { AppProps } from "next/app";
import "@styles/normalize.css";
import "@styles/global.scss";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Router } from "next/router";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
