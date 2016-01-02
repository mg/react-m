import React from 'react'
import { Tabs } from '../src'
import { SpreadRow, LeftPackedRow, Space } from './layouts.jsx'

const manytabs= [
  {id: 1, text: 'Tab one'},
  {id: 2, text: 'Tab two'},
  {id: 3, text: 'Tab three'},
  {id: 4, text: 'Tab four'},
  {id: 5, text: 'Tab five'},
  {id: 6, text: 'Tab six'},
  {id: 7, text: 'Tab seven'},
  {id: 8, text: 'Tab eight'},
]

const tabs= [
  {id: 1, text: 'Tab one'},
  {id: 2, text: 'Tab two'},
  {id: 3, text: 'Tab three'},
]

export default class TabsPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Scrollable tabs</h3>
        <Tabs
          items={manytabs}
          id={tab => tab.id}
          text={tab => tab.text}
          selected={this.state.tab1}
          onClick={tab1 => this.setState({tab1})}
          />

        <h3>Fixed tabs</h3>
        <Tabs
          items={tabs}
          id={tab => tab.id}
          text={tab => tab.text}
          selected={this.state.tab2}
          onClick={tab2 => this.setState({tab2})}
          fixed
          />
      </div>
    )
  }

  state= {
    tab1: tabs[0],
    tab2: tabs[0],
  }
}
