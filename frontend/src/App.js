import React from 'react';
import RecommendationForm from './components/RecommendationForm';
import './App.css';
import FashionCRM from './components/FashionCRM';
import FashionGallery from './components/FashionGallery';

function App() {
  return (
    <div className="App">
      <main>

        <FashionCRM />
        <RecommendationForm />

        <FashionGallery />
      </main>
    </div>
  );
}

export default App;