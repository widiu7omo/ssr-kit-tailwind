import React from "react";
import { useAsync } from "react-streaming";

type DetailMovieProps = {
  id: string;
};
async function fetchDetailMovie(id: string) {
  await sleep(1000); // Simulate slow network
  const response = await fetch(
    `https://star-wars.brillout.com/api/films/${id}.json`
  );
  return response.json();
}
export function DetailMovie({ id }: DetailMovieProps) {
  const key = ["star-wars-movies", id];
  const movie = useAsync(key, () => fetchDetailMovie(id));
  return (
    <div>
      <h1>{movie.title}</h1>
      Release Date: {movie.release_date}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
    </div>
  );
}
function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds));
}
