import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

const setup = () => render(<ProfileCard />);

beforeEach(setup);

describe("Profile card", () => {
  describe("Layout", () => {
    describe("User section", () => {
      it("should have user section", () => {
        const user = screen.getByTestId("user");
        expect(user).toBeInTheDocument();
      });
      it("should have avatar", () => {
        const avatar = screen.getByTestId("avatar");
        expect(avatar).toBeInTheDocument();
      });
      it("should have name", () => {
        const name = screen.getByTestId("name");
        expect(name).toBeInTheDocument();
      });
      it("should have username", () => {
        const username = screen.getByTestId("username");
        expect(username).toBeInTheDocument();
      });
      it("should have date joined", () => {
        const date = screen.getByTestId("date-joined");
        expect(date).toBeInTheDocument();
      });
    });
    it("it should have bio section", () => {
      const bio = screen.getByTestId("bio");
      expect(bio).toBeInTheDocument();
    });
    describe("statistics", () => {
      it("should have statistics section", () => {
        const statistics = screen.getByTestId("statistics");
        expect(statistics).toBeInTheDocument();
      });
      it("should display number of repositories", () => {
        const repos = screen.getByTestId("repos");
        expect(repos).toBeInTheDocument();
      });
      it("should display number of followers", () => {
        const followers = screen.getByTestId("followers");
        expect(followers).toBeInTheDocument();
      });
      it("should display number being followed", () => {
        const following = screen.getByTestId("following");
        expect(following).toBeInTheDocument();
      });
    });
    describe("contact", () => {
      it("should have a contact section", () => {
        const contact = screen.getByTestId("contact");
        expect(contact).toBeInTheDocument();
      });
      it("should have location", () => {
        const location = screen.getByTestId("location");
        expect(location).toBeInTheDocument();
      });
      it("should have website link", () => {
        const link = screen.getByTestId("website-link");
      });
      it("should have twitter link", () => {
        const twitter = screen.getByTestId("twitter-link");
        expect(twitter).toBeInTheDocument();
      });
      it("should have company", () => {
        const company = screen.getByTestId("company");
        expect(company).toBeInTheDocument();
      });
    });
  });
});
