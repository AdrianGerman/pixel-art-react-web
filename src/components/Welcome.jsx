import { useState, useEffect } from 'react';
import '@fontsource/press-start-2p';

export default function Welcome() {
  const [visible, setVisible] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showCoins, setShowCoins] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
    setTimeout(() => setShowSecondText(true), 2000);
    setTimeout(() => setShowThirdText(true), 3500);
    setTimeout(() => setShowButton(true), 5000);
    setTimeout(() => setShowCoins(true), 5500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-950 text-white p-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div 
              key={i} 
              className={`bg-${['yellow', 'green', 'indigo', 'cyan'][i % 4]}-${300 + ((i * 100) % 400)}`}
              style={{ opacity: Math.random() * 0.5 + 0.1 }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative border-4 border-yellow-400 bg-indigo-900/90 p-8 max-w-4xl w-full shadow-[8px_8px_0px_0px_rgba(250,204,21,0.5)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(250,204,21,0.4)] backdrop-blur-sm">
        <h1 
          className={`font-['Press_Start_2P'] text-center text-4xl md:text-5xl bg-gradient-to-r from-yellow-300 via-green-300 to-yellow-300 text-transparent bg-clip-text transform transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          PIXEL FINANCE
        </h1>
        
        <div 
          className={`h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-6 transition-all duration-1000 ${
            visible ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
        />
        
        <p 
          className={`font-['Press_Start_2P'] text-center text-xl text-green-300 my-6 transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          ¡Bienvenido Aventurero!
        </p>
        
        <p 
          className={`font-['Press_Start_2P'] text-center text-sm md:text-base text-yellow-200 my-4 transition-all duration-1000 ${
            showSecondText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Controla tus monedas de oro y
          <br/>administra tu tesoro personal
        </p>
        
        <p 
          className={`font-['Press_Start_2P'] text-center text-xs md:text-sm text-cyan-300 my-4 transition-all duration-1000 ${
            showThirdText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          ¡Tu aventura financiera comienza ahora!
        </p>
        
        <div className="flex justify-center mt-8">
          <button 
            className={`font-['Press_Start_2P'] text-sm bg-green-500 border-b-4 border-r-4 border-green-800 px-6 py-3 text-white hover:bg-green-600 active:translate-y-1 active:translate-x-1 active:border-b-0 active:border-r-0 transition-all duration-100 ${
              showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            COMENZAR
          </button>
        </div>
        
        <div className={`transition-all duration-1000 ${showCoins ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute -top-8 -left-8 w-8 h-8 bg-yellow-400 rounded-full border-4 border-yellow-600 transform rotate-12"></div>
          <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-yellow-400 rounded-full border-4 border-yellow-600 transform -rotate-12"></div>
        </div>
        
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400"></div>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400"></div>
      </div>
      
      <div className="fixed bottom-4 right-4 w-8 h-8 bg-yellow-400 animate-bounce"></div>
      <div className="fixed top-4 left-4 w-6 h-6 bg-green-400 animate-ping"></div>
      
      <div className={`fixed bottom-8 left-8 transition-all duration-1000 ${showCoins ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="w-4 h-4 bg-yellow-500"></div>
        <div className="w-4 h-4 bg-yellow-300 ml-4 -mt-2"></div>
        <div className="w-4 h-4 bg-yellow-400 ml-2 mt-3"></div>
      </div>
      
      <div className={`fixed top-8 right-8 transition-all duration-1000 ${showCoins ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-end h-12">
          <div className="w-3 h-5 bg-green-400 mr-1"></div>
          <div className="w-3 h-8 bg-green-400 mr-1"></div>
          <div className="w-3 h-3 bg-red-400 mr-1"></div>
          <div className="w-3 h-10 bg-green-400 mr-1"></div>
        </div>
      </div>
    </div>
  );
}