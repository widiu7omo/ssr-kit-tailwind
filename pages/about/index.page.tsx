import React from "react";

export { Page };
export { AdminLayout as Layout } from "#app/core/layouts/AdminLayout";
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
