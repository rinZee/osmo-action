import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  <Head>
    <title>Osmo Action</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
