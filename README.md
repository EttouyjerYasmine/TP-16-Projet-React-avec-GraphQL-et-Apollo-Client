# Gestion des Comptes - Application Web

Application web de gestion de comptes bancaires développée avec React, Apollo Client et GraphQL, connectée à un backend microservices.

## 📋 Table des matières
- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Architecture technique](#-architecture-technique)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Démarrage](#-démarrage)
- [Structure du projet](#-structure-du-projet)
- [Endpoints GraphQL](#-endpoints-graphql)
- [Dépannage](#-dépannage)
- [Auteurs](#-auteurs)

## 🚀 Présentation

Cette application permet la gestion de comptes bancaires à travers une interface web moderne et réactive. Elle communique avec un backend GraphQL pour les opérations CRUD sur les comptes.

## ✨ Fonctionnalités

- ✅ Création de nouveaux comptes (courant, épargne, professionnel)
- ✅ Visualisation de la liste des comptes
- ✅ Interface utilisateur responsive et moderne
- ✅ Gestion des états avec React Hooks
- ✅ Communication GraphQL avec Apollo Client
- ✅ Messages d'erreur et de confirmation
- ✅ Mode simulation (sans backend)

## 🏗️ Architecture technique

### Stack technique
- **Frontend**: React 19.2.3
- **État**: React Hooks (useState, useEffect)
- **GraphQL Client**: Apollo Client 4.0.11
- **CSS**: CSS-in-JS avec styles inline
- **Build Tool**: Create React App
- **Serveur de développement**: Webpack Dev Server

### Diagramme d'architecture
```
┌─────────────────┐     GraphQL     ┌─────────────────┐
│   Application   │◄────────────────►│   Serveur       │
│     React       │   HTTP/WebSocket │   GraphQL       │
│   (Frontend)    │                 │   (Backend)     │
└─────────────────┘                 └─────────────────┘
         │                                    │
         │                                    │
         ▼                                    ▼
┌─────────────────┐                 ┌─────────────────┐
│   Navigateur    │                 │   Base de       │
│   (Client)      │                 │   Données       │
└─────────────────┘                 └─────────────────┘
```

## ⚙️ Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Serveur GraphQL (optionnel pour le mode complet)

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone [URL_DU_PROJET]
cd gestion-comptes-web
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'environnement**
```bash
# Copier le fichier d'environnement
cp .env.example .env
```

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env` à la racine du projet :

```env
REACT_APP_GRAPHQL_URI=http://localhost:4000/graphql
REACT_APP_API_TIMEOUT=10000
REACT_APP_ENABLE_MOCK=true
```

### Configuration Apollo Client
L'application utilise Apollo Client 4 avec la configuration suivante :
- **URI GraphQL** : `http://localhost:4000/graphql`
- **Cache** : InMemoryCache
- **Link** : HttpLink

## 🚀 Démarrage

### Mode développement
```bash
# Démarrer l'application
npm start

# L'application sera accessible à :
# http://localhost:3001
```

### Mode production
```bash
# Construire l'application
npm run build

# Servir l'application constru
````

### Démonstration

<img width="475" height="491" alt="CreatCompte" src="https://github.com/user-attachments/assets/cb830559-3620-4e9b-921b-5de8ddd4987c" />

<img width="959" height="506" alt="Create2" src="https://github.com/user-attachments/assets/ec0d6a3d-e724-4dca-962f-9968770e29c8" />



### Auteurs

Réalisé par : Ettouyjer yasmine.

Encadré par : Mr.Mohamed Mechgar.
