import React from 'react'
import { Dots } from '../src'
import { LeftPackedRow, DoubleSpace } from './layouts.jsx'

export default class DotsPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Dots</h3>
        <LeftPackedRow>
          <Dots active={1} count={5} size={10} spread={10}/>
        </LeftPackedRow>

        <h3>Cycling</h3>
        <LeftPackedRow>
          <Dots active={this.state.active} count={3}/>
        </LeftPackedRow>
      </div>
    )
  }

  componentDidMount() {
      this.interval= setInterval(() => {
        let active= this.state.active
        active++
        if(active > 2) active= 0
        this.setState({active})
      }, 2000)
  }
  componentWillUnmount() {
      clearInterval(this.interval)
  }

  state= {
    active: 0,
  }
}
