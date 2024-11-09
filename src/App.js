import React from 'react';
import MyComponent from './MyComponent/MyComponents';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <MyComponent />  {/* Используем новый компонент */}
      </header>
    </div>
  );
}

export default App;
