import React from 'react';
import NavbarPage from './Navbar';
import {
    BrowserRouter as Router,
   useHistory
  } from "react-router-dom";
function BranchManger(){

    let history = useHistory();

    function handleClick() {
        history.push("/BranchManager");
    }
    


    return(
        <div>
            <NavbarPage/>
            <p>This is branch manager tab</p>
        </div>
    );
}

export default BranchManger;