import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import handleClick from './RequestTab'

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        return (

                <MDBNavbar color="blue" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Admin Panel</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem >
                                <MDBNavLink to="/Login" >Login</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav right>
                            <MDBNavItem >
                                <MDBNavLink to="/" >Request Tab</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/AppandRej">Approved and Rejected Request</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/BranchManager">Branch Manager Tab</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>


                    </MDBCollapse>
                </MDBNavbar>
        );
    }

}


   
export default NavbarPage;