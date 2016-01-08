import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple'
import styles from './styles.js'

export class RaisedButton extends React.Component {
  static propTypes= {
    onClick: React.PropTypes.func,
    color: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
  }

  static defaultProps= {
    enabled: true,
    ripple: false,
    color: '#000',
    rippleColor: '#000',
  }

  render() {
    const { type, disabled, ripple, color, children }= this.props

    let styleButton= {...styles.button}

    styleButton.color= color
    let rippleColor= color
    if(color !== '#000' && !disabled) {
      let c= Color(color)
      c.alpha(0.9).lighten(0.1)
      if(ripple !== true) {
        styleButton[':focus'].backgroundColor= c.rgbString()
      }
      styleButton.color= 'white'
      styleButton.backgroundColor= color
      let rc= Color(color).alpha(0.7).lighten(0.7)
      rippleColor= rc.rgbString()
    }

    if(disabled) {
      delete styleButton[':active']
      delete styleButton[':focus']
      delete styleButton[':hover']
      return(
        <button
          style={[styleButton, styles.disabled]}
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
      markupRipple= <Ripple center={false} color={rippleColor} container={styles.ripple}/>
    } else if(color === '#000') {
      delete styleButton[':focus'].backgroundColor      
    }

    return (
      <button
        style={styleButton}
        onClick={::this.onClick}
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
