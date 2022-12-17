import React from 'react';
import './App.css';
import { NotifiCard } from './components/NotifiCard/NotifiCard';
import { AptosSignInButtons } from './components/wallet/AptosSignInButtons';

function App() {
  return (
    <div className="App">
      <AptosSignInButtons />
      <NotifiCard />
    </div>
  );
}

export default App;
