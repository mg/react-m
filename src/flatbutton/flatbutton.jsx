import './styles.css'
import React from 'react'
import Radium from 'radium'
import Ripple from '../ripple.jsx'
import styles from './styles.js'

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

export default Radium(FlatButton)
