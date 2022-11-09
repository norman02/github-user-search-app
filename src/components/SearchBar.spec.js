import { render, screen } from "@testing-library/react";
import App from "../App";

const setup = () => render(<App />);

beforeEach(setup);

describe("Search bar", () => {
  describe("layout", () => {
    it("should have text area", () => {
      const textArea = screen.getByPlaceholderText("Search GitHub username...");
      expect(textArea).toBeInTheDocument();
    });
    it("should have search icon", () => {
      const searchIcon = screen.getByTestId("search-icon");
      expect(searchIcon).toBeInTheDocument();
    });
    it("should have search button", () => {
      const button = screen.getByRole("button", { name: "Search" });
      expect(button).toBeInTheDocument();
    });
  });
});
