import React from "react";
import { AppContext, AppProps } from "next/app";
import "../styles/index.scss";
import { StoreWrapper } from "../store";
import cookies from "next-cookies";

function MyApp({
  Component,
  pageProps,
  userAddress,
  token,
}: { userAddress?: string; token?: string } & AppProps) {
  return (
    <StoreWrapper userAddress={userAddress} token={token}>
      <Component {...pageProps} />
    </StoreWrapper>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { userAddress, token } = cookies(appContext.ctx);
  return { userAddress, token };
};

export default MyApp;
