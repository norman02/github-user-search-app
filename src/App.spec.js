import { render, screen } from "@testing-library/react";
import App from "./App";

const setup = () => {
  render(<App />);
};

beforeEach(setup);

describe("App", () => {
  describe("Layout", () => {
    it("should have a header", () => {
      const header = screen.getByRole("heading", { name: "devfinder" });
      expect(header).toBeInTheDocument();
    });
    it("should have toggle dark mode", () => {
      const toggle = screen.getByTestId("toggle-dark-mode");
      expect(toggle).toBeInTheDocument();
    });
    it("should have search bar", () => {
      const searchBar = screen.getByTestId("search-bar");
      expect(searchBar).toBeInTheDocument();
    });
    it("should have profile card", () => {
      const profileCard = screen.getByTestId("profile-card");
      expect(profileCard).toBeInTheDocument();
    });
  });
});
