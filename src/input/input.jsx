import React from 'react'
import Radium from 'radium'
import { AutoId }  from 'react-autoid'
import styles from './styles.js'

export class Input extends React.Component {
  static propTypes= {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    error: React.PropTypes.string,
  }

  render() {
    const { label, value, onChange, error, autoId }= this.props

    const errorColor= '#de3226'

    let styleInput= {...styles.input}
    let styleLabel= {...styles.label}
    let styleBorder= {...styles.border}

    if(this.state.focused || (value !== undefined && value.length > 0)) {
      styleInput={ ...styleInput, ...styles.inputFocused}
      styleLabel={ ...styleLabel, ...styles.labelFocused}
      styleBorder={ ...styleBorder, ...styles.borderFocused}
    }

    let markupError
    if(error !== undefined) {
      styleLabel= {...styleLabel, color: errorColor}
      styleBorder={ ...styleBorder, backgroundColor: errorColor}
      markupError= <div style={{...styles.error, color: errorColor}}>{error}</div>
    }

    return (
      <div style={styles.container}>
        <input
          id={autoId}
          style={styleInput}
          type='text'
          value={value}
          onChange={::this.onChange}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}
          />
        <label
          htmlFor={autoId}
          style={styleLabel}>
          {label}
        </label>
        <div
          style={styleBorder}
          />
        {markupError}
      </div>
    )
  }

  onChange(e) {
    this.props.onChange(e.target.value)
  }

  onFocus() {
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  state= {
    focused: false,
  }
}

export default AutoId(Radium(Input))
