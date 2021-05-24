import styles from "../styles/Home.module.css";
import Box from "@material-ui/core/Box";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <Box
        class="intro"
        style={{
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <h1>Hello</h1>
      </Box>{" "}
    </div>
  );
}
