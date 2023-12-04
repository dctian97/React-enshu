import React from 'react';
import Header from './Header';
import Content from './CatContent';
import Footer from './Footer';
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
