export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

import "./css/global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { getPageTitle } from "./getPageTitle";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";
let root: ReactDOMClient.Root;
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = ReactDOMClient.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOMClient.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
}
function onHydrationEnd() {
  console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
  console.log("Page transition start");
  document.querySelector("body")!.classList.add("page-is-transitioning");
}
function onPageTransitionEnd() {
  console.log("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
}
