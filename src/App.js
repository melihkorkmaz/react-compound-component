import React from 'react';
import VerticalLogin from './VerticalLogin';
import HorizontalLogin from './HorizontalLogin'
import './style.css'

function App() {
  return (
    <div className="container">
     <h2 className="text-center mb-5">React Compound Components</h2>
     <div className="d-flex justify-content-center">
      <HorizontalLogin />
     </div>

     <div className="d-flex justify-content-center mt-5">
      <VerticalLogin />
     </div>
    </div>
  );
}

export default App;
