import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple.jsx'

export class IconButton extends React.Component {
  static propTypes= {
    enabled: React.PropTypes.bool,
    color: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired,
  }

  static defaultProps= {
    enabled: true,
    color: '#000',
    ripple: false,
  }

  render() {
    const { icon, enabled, color, ripple, children }= this.props

    let styleButton= {...styles.button}

    styleButton.color= color
    let rippleColor= color
    if(color !== '#000' && enabled) {
      let c= Color(color)
      c.alpha(0.9).lighten(0.1)
      let rc= Color(color).alpha(0.7).lighten(0.2)
      rippleColor= rc.rgbString()
    }

    if(!enabled) {
      delete styleButton[':active']
      delete styleButton[':hover']

      return(
        <button
          style={[styleButton, styles.disabled]}
          disabled
          >
          <i style={styles.icon}>{children}</i>
        </button>
      )
    }

    var markupRipple
    if(ripple) {
      delete styleButton[':active']
      markupRipple= <Ripple color={rippleColor} container={styles.ripple}/>
    }

    return (
      <button
        style={[styleButton]}
        className='reactmd-button-iconbutton'
        onClick={::this.onClick}
        onMouseLeave={::this.onMouseLeave}
        ref={e => this.button= e}
        >
        <i style={styles.icon}>{children}</i>
        {markupRipple}
      </button>
    )
  }

  onClick() {
    if(this.props.onClick)
      this.props.onClick()
  }

  onMouseLeave() {
    this.button.blur()
  }
}

export default Radium(IconButton)

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  button: {
    borderRadius: '50%',
    fontSize: 24,
    height: 32,
    minWidth: 32,
    outline: 'none',
    backgroundColor: 'initial',
    border: 'none',
    willChange: 'box-shadow,transform',
    transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
    outline: 'none',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: 'rgba(158,158,158,.2)',
    },

    ':active': {
      backgroundColor: 'rgba(158,158,158,.4)',
    },
  },

  icon: {
    verticalAlign: 'middle',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-12px,-12px)',
    lineHeight: '24px',
    width: 24,
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    textTransform: 'none',
    fontFeatureSettings: '\'liga\'',
    WebkitFontFeatureSettings: '\'liga\'',
    WebkitFontSmoothing: 'antialiased',
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: '50%',
  },
})
