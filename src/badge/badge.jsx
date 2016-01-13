import React from 'react'
import Radium from 'radium'
import Icon from '../icon'
import styles from './styles.js'

import { offsetsText, offsetsIcon } from './offsets.js'

export class Badge extends React.Component {
  static propTypes= {
    value: React.PropTypes.string.isRequired,
    icon: React.PropTypes.bool,
    onIcon: React.PropTypes.bool,
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    left: React.PropTypes.bool,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    icon: false,
    onIcon: false,
    align: 'right',
    color: '#fff',
    backgroundColor: '#ff4081',
    size: 12,
  }

  render() {
    const {
      value, icon, color, backgroundColor,
      onIcon, left, size, children
    }= this.props

    let styleBadge= {
      ...styles.badge,
      fontSize: size,
      width: size + 10,
      height: size + 10,
      color: color,
      backgroundColor: backgroundColor,
    }

    let markup= value
    if(icon) {
      markup= <Icon color='#fff' size={size}>{value}</Icon>
    }

    if(left) {
      if(onIcon) {
        styleBadge= {...styleBadge, left: -offsetsIcon.get(size).get('horz'), top: -offsetsIcon.get(size).get('vert')}
      } else {
        styleBadge= {...styleBadge, left: -offsetsText.get(size).get('horz'), top: -offsetsText.get(size).get('vert')}
      }
    } else {
      if(onIcon) {
        styleBadge= {...styleBadge, right: -offsetsIcon.get(size).get('horz'), top: -offsetsIcon.get(size).get('vert')}
      } else {
        styleBadge= {...styleBadge, right: -offsetsText.get(size).get('horz'), top: -offsetsText.get(size).get('vert')}
      }
    }

    return (
      <div style={styles.container}>
        {children}
        <div style={styleBadge}>
          {markup}
        </div>
      </div>
    )
  }
}

export default Radium(Badge)
