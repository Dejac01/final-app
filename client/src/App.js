// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// const { Route, Routes, Link } = require("react-router-dom");
// // const Login = require("./Login.jsx");
// const React = require("react");
import Header from"./Header";
import Dashboard from "./Dashboard.jsx";
// const New =require('./views/teacher_comp/New.jsx')

function App () {
  
    return (
    
          <div className="App">
            <Header />
            <Dashboard />
          </div>
     
    );
  
}

export default App;
