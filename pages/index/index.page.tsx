import React from "react";
import { Counter } from "./Counter";

export { Page };
export { AdminLayout as Layout } from "#app/core/layouts/AdminLayout";
function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
