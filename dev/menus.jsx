import React from 'react'
import { Menu } from '../src'
import { LeftPackedRow, Space } from './layouts.jsx'

export default class Menus extends React.Component {
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
        <h3>Menu</h3>
        <LeftPackedRow>
          <Menu direction='downright'>{menu}</Menu>
          <Space/>
          <Menu direction='downleft'>{menu}</Menu>
          <Space/>
          <Menu direction='upleft'>{menu}</Menu>
          <Space/>
          <Menu direction='upright'>{menu}</Menu>
        </LeftPackedRow>
        <LeftPackedRow>
          <Menu direction='downright' over>{menu}</Menu>
          <Space/>
          <Menu direction='downleft' over>{menu}</Menu>
          <Space/>
          <Menu direction='upleft' over>{menu}</Menu>
          <Space/>
          <Menu direction='upright' over>{menu}</Menu>
        </LeftPackedRow>
      </div>
    )
  }
}
