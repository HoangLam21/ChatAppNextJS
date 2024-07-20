import React from "react";
import App from "next/app";
import RootLayout from "../app/(root)/layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log("here");
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    );
  }
}

export default MyApp;
