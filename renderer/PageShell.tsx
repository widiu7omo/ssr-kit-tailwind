import React from "react";
import { PageContextProvider, usePageContext } from "./usePageContext";
import type { PageContext } from "./types";
import { PublicLayout } from "../core/layouts/PublicLayout";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: JSX.Element }) {
  const pageContext = usePageContext();
  const Layout = pageContext.exports.Layout || PublicLayout;
  return <Layout>{children}</Layout>;
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className="p-[20px] pb-[50px] min-h-scren">
        {children}
      </div>
    </div>
  );
}
