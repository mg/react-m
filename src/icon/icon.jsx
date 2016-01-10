import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class Icon extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    color: '#757575',
    size: 24,
  }

  render() {
    const { color, size, children}= this.props

    let styleIcon= {...styles.icon, color: color, fontSize: size }

    return (
      <div style={styleIcon}>
        {children}
      </div>
    )
  }
}

export default Radium(Icon)
