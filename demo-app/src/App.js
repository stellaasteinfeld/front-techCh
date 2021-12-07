import React from "react";

import NavBar from "./components/NavBar";
import FixedTopNav from "./components/FixedTopNav";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  return (
      <>
        <FixedTopNav />
        <NavBar />
      </>
  );
}
