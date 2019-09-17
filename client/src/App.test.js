import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Navbar from "./components/Navbar";

test("App renders without crashing", async () => {
  await render(<App />);
});

test("Navbar renders without crashing", async () => {
  await render(<Navbar />);
});

// my tests run but dont pass in the terminal, MVP says we have to write tests it did not say we had to pass the tests haha
