import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from './ripple.jsx'

export class RaisedButton extends React.Component {
  static propTypes= {
    onClick: React.PropTypes.func,
    color: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
  }

  static defaultProps= {
    enabled: true,
    ripple: false,
    color: '#000',
    rippleColor: '#000',
  }

  render() {
    const { type, enabled, ripple, color, children }= this.props

    let styleButton= {...styles.button}
    let styleBase= {...styles.buttonBase}
    styleButton.color= color
    let rippleColor= color
    if(color !== '#000' && enabled) {
      let c= Color(color)
      c.alpha(0.9).lighten(0.1)
      if(ripple !== true) styleButton[':focus'].backgroundColor= c.rgbString()
      styleBase.color= 'white'
      styleBase.backgroundColor= color
      let rc= Color(color).alpha(0.7).lighten(0.7)
      rippleColor= rc.rgbString()
    }

    if(!enabled) {
      delete styleButton[':active']
      delete styleButton[':focus']
      delete styleButton[':hover']
      return(
        <button
          style={[styleButton, styleBase, styles.disabled]}
          disabled
          >
          {children}
        </button>
      )
    }

    var markupRipple
    if(ripple) {
      delete styleButton[':active']
      delete styleButton[':focus'].backgroundColor
      markupRipple= <Ripple center={false} color={rippleColor}/>
    }

    return (
      <button
        style={[styleButton, styleBase]}
        onClick={::this.onClick}
        className='reactmd-button-raisedbutton'
        onMouseLeave={::this.onEnd}
        onMouseUp={::this.onEnd}
        onTouchEnd={::this.onEnd}
        ref={e => this.button= e}
        >
        {children}
        {markupRipple}
      </button>
    )
  }

  onClick() {
    if(this.props.onClick)
      this.props.onClick()
  }

  onEnd() {
    this.button.blur()
  }
}

export default Radium(RaisedButton)

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  button: {
    //color: '#000',



    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 0,

    height: 36,
    minWidth: 64,
    lineHeight: '36px',
    padding: '0 16px',

    border: 'none',
    borderRadius: 2,
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    willChange: 'box-shadow,transform',
    transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',

    ':active': {
      backgroundColor: 'rgba(158,158,158,.4)',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
    },

    ':focus': {
      boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
    },

    ':hover': {
      boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
    },

    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
  },

  buttonBase: {
    backgroundColor: 'rgba(158,158,158,.2)',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
  },
})
