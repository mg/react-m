import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple'
import styles from './styles.js'

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
        onClick={::this.onClick}
        onKeyUp={::this.onKeyUp}
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

  onKeyUp(e) {
    e.preventDefault()
    if(e.keyCode === 32) {
      this.props.onClick()
    }
  }

  onMouseLeave() {
    this.button.blur()
  }
}

export default Radium(IconButton)
