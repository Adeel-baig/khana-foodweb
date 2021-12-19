import React from 'react';
import NavbarPage from './Navbar';
import {
    BrowserRouter as Router,
   useHistory
  } from "react-router-dom";
function AppandRej(){

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }
    


    return(
        <div>
            <NavbarPage/>
            <p>This is Appect and Reject tab</p>
        </div>
    );
}

export default AppandRej;