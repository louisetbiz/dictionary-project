import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        Dictionary 
      </header>
      <main>
        <Dictionary />
      </main>

      <footer className="App-footer">
        <small>Coded by Louise open-sourced on GitHub</small>
        
      </footer>
      </div>
    </div>
  );
}
