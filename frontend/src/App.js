import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from './component/Home';
import Managepage from './component/Managepage';
import Addpage from './component/Addpage';
import Editpage from './component/Editpage';

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
         <Route exact path="/"  element={ <Home />} />
         <Route exact path="/managepage"  element={ <Managepage/> } />
         <Route exact path="/addpage"  element={ <Addpage/> } />
         <Route exact path="/editpage/:id"  element={ <Editpage/> } />
      </Routes>
    </>
  );
}

export default App;
