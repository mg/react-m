import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple'
import styles from './styles.js'

export class RadioButton extends React.Component {
  static propTypes = {
    value: React.PropTypes.node,
    selected: React.PropTypes.node,
    ripple: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, selected, disabled, ripple, autoId, children }= this.props

    let outerCircle= styles.outerCircle
    let innerCircle= styles.innerCircle
    let label= styles.label

    if(value === selected) {
      outerCircle= {...outerCircle, ...styles.outerCircleOn}
      innerCircle= {...innerCircle, ...styles.innerCircleOn}
    }

    if(disabled) {
      label= {...label, ...styles.disabledLabel}
      outerCircle= {...outerCircle, ...styles.disabledOuterCircle}
      innerCircle= {...innerCircle, ...styles.disabledInnerCircle}
    }

    var markupRipple
    if(ripple) {
      markupRipple= <Ripple center={true} color={'#3f51b5'} container={styles.ripple}/>
    }

    var markupFocus
    if(this.state.focused) {
      markupFocus= <span style={styles.focus}/>
    }

    return (
      <div style={styles.container}>
        <input
          type='radio'
          id={autoId}
          style={[styles.input]}
          value={value}
          checked={value === selected}
          tabIndex={-1}
          />
        {markupFocus}
        <a
          href='#'
          onClick={::this.onClick}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}
          onKeyDown={::this.onKeyDown}
          onKeyUp={::this.onKeyUp}>
          <span style={outerCircle} onClick={::this.onClick}>
            {markupRipple}
          </span>
        </a>
        <span style={innerCircle} onClick={::this.onClick}/>
        <label htmlFor={autoId} style={label} onClick={::this.onClick}>{children}</label>
      </div>
    )
  }

  onChange(e) {
    const { value, selected, disabled, onChange }= this.props
    if(disabled) return
    if(value === selected) return
    onChange(value)
    this.setState({focused: true})
  }

  onClick(e) {
    const { value, selected, disabled, onChange }= this.props
    if(e) e.preventDefault()
    if(disabled) return
    if(value === selected) return
    onChange(value)

    let frameCount= 15
    const animHandler= () => {
      frameCount--
      if(frameCount > 0) requestAnimationFrame(animHandler)
      else this.setState({focused: false})
    }
    requestAnimationFrame(animHandler)
  }

  onKeyDown(e) {
    if(e.keyCode === 13) {
      e.preventDefault()
    }
  }

  onKeyUp(e) {
    const { value, selected, onChange }= this.props
    e.preventDefault()
    if(e.keyCode === 32 && value !== selected) {
      onChange(value)
    }
  }

  onFocus() {
    if(this.props.disabled) return
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  state= {}
}

export default AutoId(Radium(RadioButton))
