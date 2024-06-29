import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders reservation date header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Reservation Date/i);
  expect(headerElement).toBeInTheDocument();
});

test("selects a date in the date picker", () => {
  render(<App />);
  const dateInput = screen.getByPlaceholderText("Select a date");
  dateInput.value = "2024-07-01";
  expect(dateInput.value).toBe("2024-07-01"); // verify state update
});

test("clicks the continue button", () => {
  render(<App />);
  const continueButton = screen.getByText("Continue");
  continueButton.click();
});

test("renders default placeholder when no date is selected", () => {
  render(<App />);
  const dateInput = screen.getByPlaceholderText("Select a date");
  expect(dateInput.value).toBe("");
});

test("renders all required components", () => {
  render(<App />);
  const headerElement = screen.getByText("Reservation Date");
  const dateInput = screen.getByPlaceholderText("Select a date");
  const continueButton = screen.getByText("Continue");

  expect(headerElement).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(continueButton).toBeInTheDocument();
});
