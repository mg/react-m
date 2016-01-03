import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class Icon extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
  }

  static defaultProps= {
    color: '#757575',
  }

  render() {
    const { color, background, children}= this.props

    let styleIcon= {...styles.icon, color: color }

    return (
      <div style={styleIcon}>
        {children}
      </div>
    )
  }
}

export default Radium(Icon)
