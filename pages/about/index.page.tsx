import React from "react";
import "./code.css";

export { Page };
export { AdminLayout as Layout } from "../../core/layouts/AdminLayout";
function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  );
}
