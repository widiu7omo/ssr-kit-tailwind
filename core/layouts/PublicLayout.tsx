import React from "react";
import { Link } from "../../renderer/Link";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";

export { PublicLayout };
function PublicLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Sidebar>
        <Logo />
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/star-wars">
          Data Fetching
        </Link>
        <Link className="navitem" href="/about">
          About
        </Link>
      </Sidebar>
      <div>{children}</div>
    </div>
  );
}
