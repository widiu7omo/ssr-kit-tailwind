import React from "react";
export { AuthLayout };

function AuthLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
