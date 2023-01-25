import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "INSERT RENDER HERE"
    : "http://localhost:4000";

function App(): JSX.Element {
  return (
    <div className="app">
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
