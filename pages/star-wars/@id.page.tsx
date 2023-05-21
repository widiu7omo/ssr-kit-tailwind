import React, { Suspense } from "react";
import fetch from "cross-fetch";
import { filterMovieData } from "./filterMovieData";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import type { MovieDetails } from "./types";
import { usePageContext } from "#app/renderer/usePageContext";
import { DetailMovie } from "./components/DetailMovie";
import { DetailMovieSkeleton } from "./components/DetailMovie.loading";

export { Page };
export { onBeforeRender };
export { AdminLayout as Layout } from "#app/core/layouts/AdminLayout";
function Page({ movie }: { movie: MovieDetails }) {
  const pageContext = usePageContext();
  return (
    <>
      <h1>This is stream component</h1>
      <Suspense fallback={<DetailMovieSkeleton />}>
        <DetailMovie id={pageContext.pageProps.id} />
      </Suspense>
      <h1>This is ssr component</h1>
      <h1>{movie.title}</h1>
      Release Date: {movie.release_date}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
    </>
  );
}

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const response = await fetch(
    `https://star-wars.brillout.com/api/films/${pageContext.routeParams.id}.json`
  );
  let movie = (await response.json()) as MovieDetails;

  // We remove data we don't need because we pass `pageContext.movie` to
  // the client; we want to minimize what is sent over the network.
  movie = filterMovieData(movie);

  const { title } = movie;

  return {
    pageContext: {
      pageProps: {
        movie,
        id: pageContext.routeParams.id,
      },
      documentProps: {
        // The page's <title>
        title,
      },
    },
  };
}
