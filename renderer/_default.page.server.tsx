import { renderToStream } from "react-streaming/server";
import React from "react";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import logoUrl from "./logo.svg";
import type { PageContextServer } from "./types";

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "documentProps"];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    { disable: false }
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite + vite-plugin-ssr";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en" class="h-full bg-gray-50">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body class="h-full scroll-smooth">
        <div id="page-view">${stream}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
