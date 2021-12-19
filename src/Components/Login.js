import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import firebase from 'firebase/app';
import { useState } from "react";
import NavbarPage from "./Navbar";

const FormPage = () => {
    function register() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("Login successfull!")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            setEmail('')
            setPassword('')
            
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
      <div>
          <NavbarPage />
    <MDBContainer>
       
      <MDBRow className='justify-content-center p-4'>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h2 blue-text text-center py-4">Login :</p>
                <div className="blue-text">
                 
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                  />
                  
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn onClick={register} color="blue" type="submit" >
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;