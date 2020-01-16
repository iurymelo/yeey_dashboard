import React, { Component } from 'react'

import Aux from "../../hoc/Auxiliary";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";
import Router from 'next/router';

import classes from './Layout.css';

class Layout extends Component {


  render() {
    return (
      <Aux>
        <div  className={classes.Layout}>
        <SideDrawer pathName={this.props.pathName} />
        <main>
          {this.props.children}
        </main>
        </div>
      </Aux>
    )
  }
}
export default Layout;