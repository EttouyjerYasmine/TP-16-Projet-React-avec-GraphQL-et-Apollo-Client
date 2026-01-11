// src/components/CompteList.js
import React from 'react';

const CompteList = () => {
  return (
    <div>
      <h2 style={{ color: 'darkblue', marginBottom: '20px' }}>Liste des Comptes</h2>
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '4px',
        border: '1px dashed #ccc'
      }}>
        <p>La liste des comptes sera affichée ici.</p>
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          Connectez-vous à votre serveur GraphQL pour voir les comptes.
        </p>
      </div>
    </div>
  );
};

export default CompteList;