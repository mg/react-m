import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class IconButton extends React.Component {
  static propTypes= {
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    color: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    size: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired,
  }

  static defaultProps= {
    color: '#000',
    ripple: false,
    size: 24,
  }

  render() {
    const { label, size, disabled, color, ripple, children }= this.props

    let styleButton= {...styles.button}

    styleButton.color= color
    let rippleColor= color
    if(color !== '#000' && !disabled) {
      let c= Color(color)
      c.alpha(0.9).lighten(0.1)
      let rc= Color(color).alpha(0.7).lighten(0.2)
      rippleColor= rc.rgbString()
    }

    var markupLabel
    if(label) {
      let styleLabelContainer= {...styles.labelContainer, top: size + styleButton.padding * 2}
      let styleLabel= { ...styles.label, fontSize: size * 0.4, color: color }
      if(disabled) styleLabel= {...styleLabel, ...styles.disabledLabel}
      markupLabel= <div style={styleLabelContainer}><label style={styleLabel}>{label}</label></div>
    }
    if(disabled) {
      delete styleButton[':active']
      delete styleButton[':hover']

      return(
        <button
          style={[styleButton, styles.disabled]}
          disabled
          >
          <Icon size={size}>{children}</Icon>
          {markupLabel}
        </button>
      )
    }

    var markupRipple
    if(ripple) {
      delete styleButton[':active']
      markupRipple= <Ripple color={rippleColor} container={styles.ripple} ref={e => this.ripple= e}/>
    }

    return (
      <button
        style={[styleButton]}
        onClick={::this.onClick}
        onKeyUp={::this.onKeyUp}
        onMouseLeave={::this.onMouseLeave}
        ref={e => this.button= e}
        >
        <Icon size={size} color={color}>{children}</Icon>
        {markupRipple}
        {markupLabel}
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
      if(this.ripple) {
        this.ripple.onKeyUp(e)
      }
    }
  }

  onMouseLeave() {
    this.button.blur()
  }
}

export default Radium(IconButton)
