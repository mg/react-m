import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple.jsx'

export class Fab extends React.Component {
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
    const { enabled, color, ripple, children }= this.props

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
          <i style={styles.icon}>{children}</i>
        </button>
      )
    }

    var markupRipple
    if(ripple) {
      delete styleButton[':active']
      delete styleButton[':focus'].backgroundColor
      markupRipple= <Ripple center={false} color={rippleColor} container={styles.ripple}/>
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
        <i style={styles.icon}>{children}</i>
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

export default Radium(Fab)

const styles= {
  button: {
    //color: '#000',


    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontSize: 24,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 0,

    height: 56,
    minWidth: 64,
    lineHeight: '36px',
    padding: '0 16px',

    border: 'none',
    borderRadius: '50%',
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

}
