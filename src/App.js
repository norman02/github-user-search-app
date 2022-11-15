import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";
import Toggle from "./components/Toggle";
import './scss/main.scss'

export default function App() {
  return (
    <main className="App">
      <header>
        <h1>devfinder</h1>
        <Toggle />
      </header>
      <SearchBar />
      <ProfileCard />
    </main>
  );
}
