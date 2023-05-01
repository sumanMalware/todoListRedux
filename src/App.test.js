import { render, screen } from "@testing-library/react";
import TodoLanding from "./TodoLanding";

test("renders learn react link", () => {
  render(<TodoLanding />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
