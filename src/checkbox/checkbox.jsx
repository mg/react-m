import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple.jsx'
import styles from './styles.js'

export class Checkbox extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, ripple, autoId, children }= this.props

    let checkbox= {...styles.checkbox}
    let check= {...styles.check}
    if(value) {
      checkbox= {...checkbox, ...styles.checkboxOn}
      check= {...check, ...styles.checkOn}
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
        <label htmlFor={autoId} style={styles.label}>{children}</label>
      </div>
    )
  }

  onChange(e) {
    const { value, onChange }= this.props
    onChange(!value)
    this.setState({focused: false})
  }

  onClick(e) {
    const { value, onChange }= this.props
    if(e) e.preventDefault()
    onChange(!value)
  }

  onFocus() {
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  state= {}
}

export default AutoId(Radium(Checkbox))
