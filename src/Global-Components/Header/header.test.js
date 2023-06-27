import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Header from "./index.js";
import { BrowserRouter } from "react-router-dom";

test("test_header_renders", () => {
  render(<Header />, { wrapper: BrowserRouter });
  const header = screen.getByText("WalkMate");
  expect(header).toBeInTheDocument();
});

test("home button clicked", () => {
  render(<Header />, { wrapper: BrowserRouter });
  const homeLink1 = screen.getByRole("link", { name: /home/i });
  fireEvent.click(homeLink1);
  expect(window.location.hash).toBe("#home");
});

test("explore button clicked", () => {
  render(<Header />, { wrapper: BrowserRouter });
  const exploreLink = screen.getByText("Explore");
  fireEvent.click(exploreLink);
  expect(window.location.hash).toBe("#explore");
});

// test to render the button
test("renders button", () => {
  render(<Header />, { wrapper: BrowserRouter });
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});


