import React from 'react';
import NavbarPage from './Navbar';
import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

function RequestTab() {

    let history = useHistory();

    function handleClick() {
        history.push("/AppandRej");
    }




    return (
        <div>

            <NavbarPage />
            <MDBCol className='p-3'>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardBody >
                        <MDBCardTitle>Request Form </MDBCardTitle>
                        <MDBCardText> Name:  </MDBCardText>
                        <MDBCardText> Father name: </MDBCardText>
                        <MDBCardText> CNIC #:   </MDBCardText>
                        <MDBCardText> Date:  </MDBCardText>
                        <MDBBtn href="#">Accept</MDBBtn>
                        <MDBBtn href="#">Reject</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </div>
    );
}

export default RequestTab;