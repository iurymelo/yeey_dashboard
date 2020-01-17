import React, { Component } from 'react'

import Aux from "../../hoc/Auxiliary";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";

class Layout extends Component {


  render() {
    return (
      <Aux>
        <div  style={{
          paddingLeft: '260px',
          paddingTop: '20px',
          backgroundColor: '#FBFCFD',}}>

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