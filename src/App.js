import './App.css';
import Main from "./components/Pages/main";
import Header from "./components/UI/Header";
import React from "react";

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
        <div className="container px-4 h-full">
            <Header/>
            <Main/>
        </div>
    </div>
  );
}

export default App;
