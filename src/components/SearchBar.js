import searchIcon from "../assets/search-icon.svg";
export default function SearchBar() {
  return (
    <div data-testid="search-bar">
      <img src={searchIcon} alt="" data-testid="search-icon" />
      <textarea placeholder="Search GitHub username..."></textarea>
      <button>Search</button>
    </div>
  );
}
