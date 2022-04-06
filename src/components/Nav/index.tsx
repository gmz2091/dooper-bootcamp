import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd"
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/register">SignUp</Link>
        <Link href="/login">Login</Link>
        <Link href="/profile">Pofile</Link>
      </nav>
    </>
  );
};

export default Nav;
