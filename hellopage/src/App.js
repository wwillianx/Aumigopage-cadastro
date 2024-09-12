import React, { useState } from 'react';
import './App.css';

function App() {
  const [role, setRole] = useState('');

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Au-migo</h1>
        <p>Conectando você a passeadores de cães confiáveis.</p>
        <img src={`${process.env.PUBLIC_URL}/Pet1.png`} alt="Minha Imagem" className="img" />
      </header>

      <div className="form-container">
        <h2>Cadastro</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="form-group">
            <label>Eu sou:</label>
            <div className="role-buttons">
              <button type="button" onClick={() => handleRoleChange('Pet Walker')} className={role === 'Pet Walker' ? 'active' : ''}>
                Pet Walker
              </button>
              <button type="button" onClick={() => handleRoleChange('Tutor')} className={role === 'Tutor' ? 'active' : ''}>
                Tutor
              </button>
            </div>
          </div>

          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
