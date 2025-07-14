import { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import Home from './components/section/Home'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-black text-gray-100`}
      >
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
