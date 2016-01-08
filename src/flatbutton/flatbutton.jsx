import React from 'react'
import Radium from 'radium'
import Ripple from '../ripple'
import styles from './styles.js'

export class FlatButton extends React.Component {
  static propTypes= {
    onClick: React.PropTypes.func,
    color: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    rippleColor: React.PropTypes.string,
  }

  static defaultProps= {
    color: '#000',
    rippleColor: '#000',
  }

  render() {
    const { type, disabled, ripple, color, rippleColor, children }= this.props

    let styleButton= {...styles.button}

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
