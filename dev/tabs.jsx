import React from 'react'
import { Tabs } from '../src'
import { SpreadRow, LeftPackedRow, Space } from './layouts.jsx'

const manyTabs= [
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

const tabsWithIcons= [
  {id: 1, text: 'Chat', icon: 'chat'},
  {id: 2, text: 'Email', icon: 'email'},
  {id: 3, text: 'Phonebook', icon: 'call'},
]

export default class TabsPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Scrollable tabs</h3>
        <Tabs
          items={manyTabs}
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
          ripple
          fixed
          />

        <h3>With icons</h3>
        <Tabs
          items={tabsWithIcons}
          id={tab => tab.id}
          text={tab => tab.text}
          icon={tab => tab.icon}
          selected={this.state.tab3}
          onClick={tab3 => this.setState({tab3})}
          ripple
          fixed
          />

        <h3>Only icons</h3>
        <Tabs
          items={tabsWithIcons}
          id={tab => tab.id}
          icon={tab => tab.icon}
          selected={this.state.tab4}
          onClick={tab4 => this.setState({tab4})}
          ripple
          fixed
          />

        <h3>Smaller</h3>
        <Tabs
          size={8}
          items={tabsWithIcons}
          id={tab => tab.id}
          text={tab => tab.text}
          icon={tab => tab.icon}
          selected={this.state.tab5}
          onClick={tab5 => this.setState({tab5})}
          ripple
          fixed
          />

      </div>
    )
  }

  state= {
    tab1: manyTabs[0],
    tab2: tabs[0],
    tab3: tabsWithIcons[0],
    tab4: tabsWithIcons[0],
    tab5: tabsWithIcons[0],
  }
}
