import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class Icon extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
    size: React.PropTypes.number,
    style: React.PropTypes.object,
  }

  static defaultProps= {
    color: '#757575',
    size: 24,
    style: {},
  }

  render() {
    const { color, size, style, children }= this.props

    let styleIcon= {...styles.icon, color: color, fontSize: size, ...style }

    return (
      <div style={styleIcon}>
        {children}
      </div>
    )
  }
}

export default Radium(Icon)
