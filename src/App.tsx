import React from 'react';
import { GlobalStyles } from './ui/globalstyles';
import RegisterForm from './components/Forms/Register';
import LoginForm from './components/Forms/Login';
import ProductCards from './components/Card';

const App: React.FC = () => {
  return (
    <div className="App">
      <style>{GlobalStyles}</style>
      <header className="App-header">
        <h1>Hello noobs</h1>
        <p>
          hello noobs
        </p>
      </header>
      <RegisterForm/>
      <LoginForm/>
      <ProductCards/>
    </div>
  );
}

export default App;
