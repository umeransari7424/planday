import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ideas from './Components/Elements/Ideas';
import Base from './Components/Layout/Base';
import Roster from './Components/Elements/Roster';
// import Header from './Components/Layout/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Ideas />} />
          <Route  path="/roster" element={<Roster />} />
        </Routes>
      </Base>
    </BrowserRouter>    
    </div>
      
     
      
    
  );
}

export default App;
