import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
 
function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    // 13469111/json/
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 23456-199</h2>
        <span>Rua Teste</span>
        <span>Complemento: Isso aí mesmo</span>
        <span>Vila do Chaves</span>
        <span>Tangamandápio</span>
      </main>
    </div>
  );
}

export default App;
