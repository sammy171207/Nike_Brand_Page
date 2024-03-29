import React from 'react';
import Navigation from './Component/Navigation';
import Hero from './Component/Hero';
import "./App.css";

function App() {
  

  return (
    <div> {/* Added a common parent div */}
      <Navigation />
      <Hero />
    </div>
  );
}
export default App;
