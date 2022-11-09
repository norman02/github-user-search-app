import { render, screen } from "@testing-library/react";
import App from "../App";

const setup = () => render(<App />);
beforeEach(setup);

describe("Toggle", () => {
  describe("Layout", () => {
    it("should have header", () => {
      const heading = screen.getByRole("heading", { name: "Dark" });
      expect(heading).toBeInTheDocument();
    });
    it("sould have dark icon", () => {
      const darkIcon = screen.getByTestId("dark-icon");
      expect(darkIcon).toBeInTheDocument();
    });
  });
});
