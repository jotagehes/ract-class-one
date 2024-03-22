import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header title="Harry Potter" />
      <div style={{ display: "flex" }}>
        <Article />
        <SideBar
          houses={["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"]}
          onSelectHouse={() => console.log("House selected: ")}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
