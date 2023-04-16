import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginPageStyle from "@/styles/Login.module.css";

const inlineStyle = {
  logginWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  formLabe: {
    display: "flex",
    flexDirection: "column",
  },
};

function Login() {
  console.log("loginPageStyle", loginPageStyle);
  return (
    <div
      style={inlineStyle.logginWrapper}
      className={[
        loginPageStyle.loginForm,
        loginPageStyle["text-red"],
        loginPageStyle["text-center"],
      ].join(" ")}
    >
      <h1>Login Page</h1>
      <Link href="/register">Go to register page</Link>
    </div>
  );
}

export default Login;

// 1: Nam, Luân, Tín
// 2: Huy, Hiếu , Thanh, Vũ
