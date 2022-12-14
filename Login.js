import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom" ;
import { auth } from './firebase.js'


function Login() {
    const history=useHistory();
    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
    const login= (event) =>{
        event.preventDefault();
        // login logic

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");

        })
        .catch((e)=>alert(e.message));

        
    };

    const register= (event) =>{
        event.preventDefault();
        // register Logic
         auth.createUserWithEmailAndPassword(email,password)
         .then(auth=>{
            history.push("/");

         })
         .catch((e)=>alert(e.message));
    };
   
   

  return (
    <div className='login'>
        <Link to="/">

        <img className='login__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>

            <form>
            <h5>E-mail</h5>
            <input  value={email} type="email" onChange={event=>setEmail(event.target.value)} />
            <h5>Password</h5>
            <input value={password} type="password" onChange={event=>setPassword(event.target.value)} />
            <button onClick={login} type="submit" className='login__signInButton'>Sign In</button>

            </form>
            <p>By singing-in you agree to amazons condition</p>
            <buuton  onClick={register} className="login__registerButton" >Create Your Amazon Account</buuton>


        </div>

        
    </div>
  )
}

export default Login;