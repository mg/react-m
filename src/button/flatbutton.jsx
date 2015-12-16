import React from 'react'
import Ripple from '../ripple.jsx'

export class FlatButton extends React.Component {
  static propTypes= {
    onClick: React.PropTypes.func,
    color: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    rippleColor: React.PropTypes.string,
  }

  static defaultProps= {
    enabled: true,
    ripple: false,
    color: '#000',
    rippleColor: '#000',
  }

  render() {
    const { type, enabled, ripple, color, rippleColor, children }= this.props

    if(!enabled) {
      return(
        <button style={{...styles.button, ...styles.disabled}} disabled>
          {children}
        </button>
      )
    }

    let styleButton= {...styles.button}
    styleButton.color= color

    var markupRipple
    if(ripple)
      markupRipple= <Ripple center={false} color={rippleColor} container={styles.ripple}/>

    return (
      <button
        style={styleButton}
        className='reactmd-button-flatbutton'
        onClick={::this.onClick}
        onMouseLeave={::this.onMouseLeave}
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

  onMouseLeave() {
    this.button.blur()
  }
}

export default FlatButton

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
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
    backgroundColor: 'transparent',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
})
