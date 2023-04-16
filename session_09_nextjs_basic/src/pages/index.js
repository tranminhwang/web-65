import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    // call api here
  }, []);
  const onLogout = () => {};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <button onClick={onLogout}>Logout</button>
          <div className="students-wrapper">
            {students.map(({ name, class: classOfStudent, _id, age }) => {
              return (
                <div key={_id}>
                  <h2>Name: {name}</h2>
                  <h2>Age: {age}</h2>
                  <h2>Class: {classOfStudent}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}