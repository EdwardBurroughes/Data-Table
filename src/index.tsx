import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Table } from "./components/Table";
import reportWebVitals from "./reportWebVitals";
import { data } from "./data";

// temporary to eventually allow the user to select which column to use

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Table headers={Object.keys(data[0])} tableData={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
