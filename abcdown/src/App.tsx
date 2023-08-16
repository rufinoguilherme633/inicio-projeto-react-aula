import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navibar from './components/layout/Navibar/Navibar'
import Home from './components/pages/Home';
import Turmas from './components/pages/Turmas';
import Comunidade from './components/pages/Comunidade';
import Configuracoes from './components/pages/Configuracoes';
import Header from './components/layout/Header'

function App() {
  const divStyle: React.CSSProperties = {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box', // Correção aqui
    backgroundColor: 'lightgray',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
     height: '100vh',
  };

  return (
    <div style={divStyle}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turmas" element={<Turmas />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
