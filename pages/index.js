import styles from "../styles/Home.module.css";
import Head from "next/head";
import Box from "@material-ui/core/Box";
import InstagramIcon from "@material-ui/icons/Instagram";

import { Container, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Osmo Action</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {/*Main section*/}
      <Box maxWidth="sm" color="white">
        <Container>
          <video
            muted
            loop
            autoPlay
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="./home.mp4" />
          </video>
          <Container>
            <Typography variant="h2" component="h1">
              OSMO Action
            </Typography>
          </Container>
        </Container>
      </Box>

      {/*Specifications section*/}
      <Container component="div" display="block" maxWidth="sm">
        <Typography variant="h2" component="h1">
          Features
        </Typography>
      </Container>

      {/*Features section*/}
    </div>
  );
}
