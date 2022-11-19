import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DonateToPerson from "./pages/DonateToPerson";

export default function Home() {
  return (
    <div>
      <DonateToPerson />
    </div>
  );
}
