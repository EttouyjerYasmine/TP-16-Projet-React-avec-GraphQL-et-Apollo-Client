// src/test-graphql.js (à exécuter séparément)
const testConnection = async () => {
  try {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query { __typename }`
      })
    });
    
    const data = await response.json();
    console.log('Connexion réussie:', data);
    return true;
  } catch (error) {
    console.error('Échec de connexion:', error);
    return false;
  }
};

testConnection();