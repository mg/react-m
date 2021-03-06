import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class Fab extends React.Component {
  static propTypes= {
    disabled: React.PropTypes.bool,
    color: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired,
  }

  static defaultProps= {
    color: '#000',
    ripple: false,
  }

  render() {
    const { disabled, color, ripple, children }= this.props

    let styleButton= {...styles.button}
    let styleBase= {...styles.buttonBase}
    styleButton.color= color
    let rippleColor= color
    let iconColor= color
    if(color !== '#000' && !disabled) {
      let c= Color(color)
      c.alpha(0.9).lighten(0.1)
      if(ripple !== true) styleButton[':focus'].backgroundColor= c.rgbString()
      iconColor= 'white'
      styleBase.backgroundColor= color
      let rc= Color(color).alpha(0.7).lighten(0.7)
      rippleColor= rc.rgbString()
    }

    if(disabled) {
      delete styleButton[':active']
      delete styleButton[':focus']
      delete styleButton[':hover']
      return(
        <button
          style={[styleButton, styleBase, styles.disabled]}
          disabled
          >
          <Icon color='rgba(0,0,0,.26)'>{children}</Icon>
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
        <Icon color={iconColor}>{children}</Icon>
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
