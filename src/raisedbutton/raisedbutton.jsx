import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class RaisedButton extends React.Component {
  static propTypes= {
    onClick: React.PropTypes.func,
    icon: React.PropTypes.string,
    color: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    enabled: true,
    ripple: false,
    color: '#000',
    rippleColor: '#000',
    size: 14,
  }

  render() {
    let { icon, disabled, ripple, color, size, children }= this.props

    let styleButton= {...styles.button, fontSize: size}

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
      color= 'white'
    }

    var markupIcon
    if(icon) {
      markupIcon= (
        <div style={styles.icon}>
          <Icon color={disabled ? 'rgba(0,0,0,.26)' : color} size={size+4}>
            {icon}
          </Icon>
        </div>
      )
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
          {markupIcon}
          {children}
        </button>
      )
    }

    var markupRipple
    if(ripple) {
      delete styleButton[':active']
      delete styleButton[':focus'].backgroundColor
      markupRipple= <Ripple center={false} color={rippleColor} container={styles.ripple} ref={e => this.ripple = e}/>
    } else if(color === '#000') {
      delete styleButton[':focus'].backgroundColor
    }

    return (
      <button
        style={styleButton}
        onClick={::this.onClick}
        onKeyUp={::this.onKeyUp}
        onMouseLeave={::this.onEnd}
        onMouseUp={::this.onEnd}
        onTouchEnd={::this.onEnd}
        ref={e => this.button= e}
        >
        {markupIcon}
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

  onKeyUp(e) {
    if(e.keyCode === 32 && this.ripple) {
      this.ripple.onKeyUp(e)
    }
  }
}

export default Radium(RaisedButton)
