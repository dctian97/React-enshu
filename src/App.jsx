import React from 'react';
import Header from './Header';
import Content from './CatContent';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Content />
      </div>
    </div>
  );
}

export default App;
