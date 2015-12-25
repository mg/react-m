import React from 'react'
import Radium from 'radium'

export class Badge extends React.Component {
  static propTypes= {
    value: React.PropTypes.string.isRequired,
    icon: React.PropTypes.bool,
    color: React.PropTypes.string,
    align: React.PropTypes.oneOf(['left', 'right'])
  }

  static defaultProps= {
    icon: false,
    align: 'right',
    color: '#ff4081',
  }

  render() {
    const { value, icon, color, align, children }= this.props

    let styleBadge= {...styles.badge, backgroundColor: color}
    if(icon) {
      styleBadge= {...styleBadge, ...styles.icon}
    }
    if(align === 'left') {
      delete styleBadge.right
      styleBadge= {...styleBadge, left: -24}      
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

const styles= {
  container: {
    position: 'relative',
  },

  badge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -12,
    right: -24,

    fontWeight: 600,
    fontSize: 12,
    width: 22,
    height: 22,
    borderRadius: '50%',
    color: '#fff',
  },

  icon: {
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    textTransform: 'none',
    fontFeatureSettings: '\'liga\'',
    WebkitFontFeatureSettings: '\'liga\'',
    WebkitFontSmoothing: 'antialiased',
},

}
