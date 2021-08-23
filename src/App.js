import React from "react";
//component and pages
import Home from "./pages/home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/globalStyles";
//Router
import {Route} from 'react-router-dom';


function App() {
  
  return (
    
      <div className="App">
          <GlobalStyles/>
          <Nav />
          <Route path={["/game/:id", "/"]}>
            <Home/>
          </Route>
      </div>
     
  );
}

export default App;
