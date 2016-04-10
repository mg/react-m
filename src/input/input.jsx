import React from 'react'
import Radium from 'radium'
import { AutoId }  from 'react-autoid'
import Icon from '../icon'
import styles from './styles.js'

export class Input extends React.Component {
  static propTypes= {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    icon: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    error: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    value: '',
    size: 16,
  }

  render() {
    const { label, value, icon, onChange, error, disabled, size, autoId }= this.props

    const errorColor= '#de3226'
    let iconColor= styles.label.color

    let styleInput= {...styles.input}
    let styleLabel= {...styles.label, fontSize: size}
    let styleBorder= {...styles.border}

    if(this.state.focused || (value !== undefined && value.length > 0)) {
      styleInput={ ...styleInput, ...styles.inputFocused}
      styleLabel={ ...styleLabel, ...styles.labelFocused, fontSize: size - 4}
      styleBorder={ ...styleBorder, ...styles.borderFocused}
      iconColor= styles.labelFocused.color
    }

    let markupError
    if(error !== undefined) {
      styleLabel= {...styleLabel, color: errorColor}
      styleBorder={ ...styleBorder, backgroundColor: errorColor}
      markupError= <div style={{...styles.error, color: errorColor, fontSize: size - 4}}>{error}</div>
      iconColor= errorColor
    }

    if(disabled) {
      styleInput={ ...styleInput, ...styles.disabled}
      styleLabel={ ...styleLabel, ...styles.disabled}
    }

    var markupIcon
    if(icon) {
      markupIcon= (
        <div style={styles.icon}>
          <Icon color={disabled ? 'rgba(0,0,0,.26)' : iconColor} size={size+4}>
            {icon}
          </Icon>
        </div>
      )
    }

    return (
      <div style={styles.container}>
        {markupIcon}
        <div style={styles.innerContainer}>
          <input
            id={autoId}
            style={styleInput}
            type='text'
            value={value}
            readOnly={disabled}
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
      </div>
    )
  }

  onChange(e) {
    const { disabled, onChange }= this.props
    if(disabled) return
    this.props.onChange(e.target.value)
  }

  onFocus() {
    if(this.props.disabled) return
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
