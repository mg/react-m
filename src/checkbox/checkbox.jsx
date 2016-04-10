import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple'
import styles from './styles.js'

export class Checkbox extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  static defaultProps= {
    value: false,
  }

  render() {
    const { value, ripple, disabled, autoId, children }= this.props

    let checkbox= styles.checkbox
    let check= styles.check
    let label= styles.label

    if(value) {
      checkbox= {...checkbox, ...styles.checkboxOn}
      check= {...check, ...styles.checkOn}
    }

    if(disabled) {
      checkbox= {...checkbox, ...styles.disabledCheckbox}
      label= {...label, ...styles.disabledLabel}
      if(value) check= {...check, ...styles.checkOnDisabled}
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
          type='checkbox'
          id={autoId}
          value={value}
          onChange={::this.onChange}
          style={[styles.input]}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}
          />
        {markupFocus}
        <span style={checkbox} onClick={::this.onClick}>
          <span style={check}/>
          {markupRipple}
        </span>
        <label htmlFor={autoId} style={label}>{children}</label>
      </div>
    )
  }

  onChange(e) {
    const { value, onChange, disabled }= this.props
    if(disabled) return
    onChange(!value)
    this.setState({focused: false})
  }

  onClick(e) {
    const { value, onChange, disabled }= this.props
    if(disabled) return
    if(e) e.preventDefault()
    onChange(!value)
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

export default AutoId(Radium(Checkbox))
