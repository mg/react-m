import React from 'react'
import Radium from 'radium'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class FlatButton extends React.Component {
  static propTypes= {
    onClick: React.PropTypes.func,
    color: React.PropTypes.string,
    icon: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    rippleColor: React.PropTypes.string,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    color: '#000',
    rippleColor: '#000',
    size: 14,
  }

  render() {
    const { type, disabled, icon, ripple, color, rippleColor, size, children }= this.props

    let styleButton= {...styles.button, fontSize: size}

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

    styleButton.color= color

    var markupRipple
    if(ripple)
      markupRipple= <Ripple center={false} color={rippleColor} container={styles.ripple}/>

    return (
      <button
        style={styleButton}
        onClick={::this.onClick}
        onMouseLeave={::this.onMouseLeave}
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

  onMouseLeave() {
    this.button.blur()
  }
}

export default Radium(FlatButton)
