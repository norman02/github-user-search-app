import darkIcon from "../assets/dark-icon.svg"
export default function Toggle() {
  return (
    <div data-testid="toggle-dark-mode">
      <h2>Dark</h2>
      <img src={darkIcon} alt="dark mode" data-testid="dark-icon"/>
    </div>
  );
}
