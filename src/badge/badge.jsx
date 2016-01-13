import React from 'react'
import Radium from 'radium'
import Icon from '../icon'
import styles from './styles.js'

export class Badge extends React.Component {
  static propTypes= {
    value: React.PropTypes.string.isRequired,
    icon: React.PropTypes.bool,
    onIcon: React.PropTypes.bool,
    color: React.PropTypes.string,
    align: React.PropTypes.oneOf(['left', 'right']),
    size: React.PropTypes.number,
  }

  static defaultProps= {
    icon: false,
    onIcon: false,
    align: 'right',
    color: '#ff4081',
    size: 12,
  }

  render() {
    const { value, icon, onIcon, color, align, size, children }= this.props

    let styleBadge= {...styles.badge, backgroundColor: color}

    let markup= value
    if(icon) {
      markup= <Icon color='#fff' size={size}>{value}</Icon>
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
          {markup}
        </div>
      </span>
    )
  }
}

export default Radium(Badge)
