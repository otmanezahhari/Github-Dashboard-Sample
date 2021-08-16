import { useEffect } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";


import Header from "components/Header";
import SearchPage from "./SearchPage";
import UserReposDetailsPage from "./UserReposDetailsPage";
import DetailsReposPage from "./DetailsReposPage";

import "./GlobalStyle.scss";



function App() {


  useEffect(()=>{


  },[])


  return (
    <div className="App">
     
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path ="/" exact>
          <SearchPage />
        </Route>

        <Route path ="/user-details-repos">
          <UserReposDetailsPage />
        </Route>

        <Route path ="/repos-details">
          <DetailsReposPage/>
        </Route>

      </Switch>
      
    </BrowserRouter>
      
    </div>
  );
}

export default App;
