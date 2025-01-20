import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Todo from './components/component/Todo';

function App() {
  return (
    <>
      <div className="h-[480px] w-[700px] max-w-sm rounded-lg flex justify-center items-center  shadow-lg p-6 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://tse3.mm.bing.net/th?id=OIP.ISIT0SCIVTAKVIG5WkoCyAHaLH&pid=Api&P=0&h=220')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 backdrop-blur-lg"></div>
        
        
        <div className="relative z-10">
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
