import React from "react";
import './App.css';
import {BrowserRouter as Router,Route ,Switch} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import {useEffect } from "react";




function App() {
  const[{user},dispatch]=useStateValue();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        });
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    });

    return () =>{
      unsubscribe();
    }
  });

  console.log("USER IS >>>" ,user);



  return (
    <Router>
      <div>
        <Router>
        <Route path='/checkout'>
        <Header />
        <Checkout />
          
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/'>
          <Header />
          <Home />
        </Route>

        
        </Router>
      </div>
    </Router>
      
  );
}

export default App;
