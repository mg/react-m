import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class Badge extends React.Component {
  static propTypes= {
    value: React.PropTypes.string.isRequired,
    icon: React.PropTypes.bool,
    onIcon: React.PropTypes.bool,
    color: React.PropTypes.string,
    align: React.PropTypes.oneOf(['left', 'right'])
  }

  static defaultProps= {
    icon: false,
    onIcon: false,
    align: 'right',
    color: '#ff4081',
  }

  render() {
    const { value, icon, onIcon, color, align, children }= this.props

    let styleBadge= {...styles.badge, backgroundColor: color}
    if(icon) {
      styleBadge= {...styleBadge, ...styles.icon}
    }

    if(onIcon) {
      styleBadge= {...styleBadge, right: -12}
    }

    if(align === 'left') {
      delete styleBadge.right
      if(onIcon) {
        styleBadge= {...styleBadge, left: -12}
      } else {
        styleBadge= {...styleBadge, left: -24}
      }
    }

    return (
      <span style={styles.container}>
        {children}
        <div style={styleBadge}>
          {value}
        </div>
      </span>
    )
  }
}

export default Radium(Badge)
