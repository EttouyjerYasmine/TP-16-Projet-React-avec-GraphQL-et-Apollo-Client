// src/App.js - Version sans Apollo (temporaire)
import React from 'react';
import './App.css';
import CreateCompte from './components/CreateCompte';
import CompteList from './components/CompteList';

function App() {
  return (
    <div className="App" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>Gestion des Comptes</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Mode démonstration - Interface fonctionnelle</p>
      
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap',
        marginTop: '30px'
      }}>
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <CreateCompte />
        </div>
        
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <CompteList />
        </div>
      </div>
    </div>
  );
}

export default App;