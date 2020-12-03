import React from "react";
import "./App.css";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

const App = () => {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <div className="App1">
        <LaunchList handleIdChange={handleIdChange} />
      </div>
      <div className="App2">
        <LaunchProfile id={id} />
      </div>
    </div>
  );
};

export default App;

// import React from 'react';
// import LaunchList from './components/LaunchList';
// import LaunchProfile from './components/LaunchProfile';

// import './App.css';

// const App = () => {
//   const [id, setId] = React.useState(42);
//   const handleIdChange = React.useCallback(newId => {
//     setId(newId);
//   }, []);

//   return (
//     <div className="App">
//       <LaunchList handleIdChange={handleIdChange} />
//       <LaunchProfile id={id} />
//     </div>
//   );
// };

// export default App;
