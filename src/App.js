import React from 'react';
import {BrowserRouter, 
  Redirect, 
  Route, 
  Switch
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import { HomePage, Contacts } from './pages';

class App extends React.Component{


  render(){
    return (
        <>
            {/*<Header/>*/}
            <Menu items={[
                {
                    title: "Home",
                    link: "/"
                },
                {
                    title: "Shop",
                    link: "/shop"
                }
            ]}/>
              <React.StrictMode>
                  <BrowserRouter hi>
                      <Switch>
                          <Route exact path="/" component={HomePage}/>
                          <Route exact path="/contacts" component={Contacts}/>
                      </Switch>
                  </BrowserRouter>
              </React.StrictMode>
        </>
    );
  }
}

export default App;
