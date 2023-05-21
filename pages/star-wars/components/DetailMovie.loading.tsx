import React from "react";

export function DetailMovieSkeleton() {
  return (
    <div>
      <h1 className="bg-gray-200 text-gray-200 rounded-full px-2">title</h1>
      <span className="bg-gray-200 text-gray-200 rounded-full px-2">
        Release Date:
      </span>
      <br />
      <span className="bg-gray-200 text-gray-200 rounded-full px-2">
        Director:
      </span>
      <br />
      <span className="bg-gray-200 text-gray-200 rounded-full px-2">
        Producer:
      </span>
    </div>
  );
}
