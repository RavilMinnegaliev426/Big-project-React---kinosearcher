import { Lenta } from "./Intermediary";
import React, { useState, useEffect } from "react";
import "./App1.css";
import { Lenta2 } from "./Intermediary2";
import { Search } from "./inter/Search.js";
import { Search_input } from "./inter/Search_input";
function App1() {
  return (
    <>
      {<Lenta2 />}
      {<Lenta />}
    </>
  );
}
export default App1;
