import React from 'react';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="container">
     <h2 className="text-center mb-5">React Compound Components</h2>
     <div className="d-flex justify-content-center">
      <LoginForm onSubmit={ (state) => console.log('SUBMITTED', state)} />
     </div>
    </div>
  );
}

export default App;
