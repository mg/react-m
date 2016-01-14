import React from 'react'
import Tooltip from './tooltip.jsx'

export default function Decorator(Component) {
  return class extends React.Component {
    render() {
      <Tooltip {...this.props}>
        <Component {...this.props}/>
      </Tooltip>
    }
  }
}
