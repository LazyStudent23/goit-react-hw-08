import AppBar from "./AppBar";
import {Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default Layout;
