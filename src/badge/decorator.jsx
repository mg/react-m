import React from 'react'
import Badge from './badge.jsx'

export default function Decorator(Component) {
  return class extends React.Component {
    render() {
      <Badge {...this.props}>
        <Component {...this.props}/>
      </Badge>
    }
  }
}
