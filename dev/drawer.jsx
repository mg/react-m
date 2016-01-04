import React from 'react'
import { Drawer, IconButton } from '../src'
import { SpreadRow, LeftPackedRow, Space } from './layouts.jsx'

export default class DrawerPage extends React.Component {
  render() {
    const menu= (
      <ul style={{backgroundColor: 'white', margin: 0, padding: 10, listStylePosition: 'inside', width: 80}}>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item three</li>
        <li>Item four</li>
        <li>Item five</li>
      </ul>
    )

    return (
      <div>
        <h3>Drawers</h3>
        <div style={{position: 'relative', width: '100%', height: 300}}>
          <SpreadRow>
            <IconButton onClick={() => this.setState({drawerLeft: !this.state.drawerLeft})}>menu</IconButton>
            <IconButton onClick={() => this.setState({drawerRight: !this.state.drawerRight})}>menu</IconButton>
          </SpreadRow>
          <Drawer open={this.state.drawerLeft} onClose={() => this.setState({drawerLeft: false})}>
            {menu}
          </Drawer>
          <Drawer open={this.state.drawerRight} onClose={() => this.setState({drawerRight: false})} side='right'>
            {menu}
          </Drawer>
        </div>
      </div>
    )
  }

  state= {
    drawerLeft: false,
    drawerRight: false,
  }
}
