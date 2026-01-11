// src/components/CreateCompte.js - Version avec mock temporaire
import React, { useState } from 'react';

const CreateCompte = () => {
  const [formData, setFormData] = useState({
    solde: '',
    type: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    // Simulation d'une requête GraphQL
    setTimeout(() => {
      console.log('Données envoyées:', {
        solde: parseFloat(formData.solde),
        type: formData.type,
      });
      
      setMessage(`Compte créé avec succès! (Simulation)
      Solde: ${formData.solde} €
      Type: ${formData.type}`);
      
      setFormData({
        solde: '',
        type: '',
      });
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 style={{ color: 'darkblue', marginBottom: '20px' }}>Créer un nouveau compte</h2>
      
      {loading && <p style={{ color: 'orange' }}>Enregistrement en cours... (Mode simulation)</p>}
      {message && (
        <div style={{ 
          color: 'green', 
          backgroundColor: '#e6ffe6', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '15px',
          whiteSpace: 'pre-line'
        }}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Solde:</label>
          <input
            type="number"
            name="solde"
            value={formData.solde}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }}
            placeholder="Entrez le solde"
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Type de compte:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }}
          >
            <option value="">Sélectionnez un type</option>
            <option value="COURANT">Compte courant</option>
            <option value="EPARGNE">Compte épargne</option>
            <option value="PROFESSIONNEL">Compte professionnel</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: loading ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            width: '100%',
            fontSize: '16px'
          }}
        >
          {loading ? 'Création en cours...' : 'Créer le compte (Simulation)'}
        </button>
      </form>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
        <p style={{ color: '#856404', margin: 0 }}>
          <strong>Note :</strong> Mode simulation activé. Configurez votre serveur GraphQL sur localhost:4000 pour une connexion réelle.
        </p>
      </div>
    </div>
  );
};

export default CreateCompte;