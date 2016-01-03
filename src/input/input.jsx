import React from 'react'
import Radium from 'radium'
import { AutoId }  from 'react-autoid'

export class Input extends React.Component {
  static propTypes= {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { label, value, onChange, autoId }= this.props

    let styleInput= {...styles.input}
    let styleLabel= {...styles.label}
    let styleBorder= {...styles.border}

    if(this.state.focused || (value !== undefined && value.length > 0)) {
      styleInput={ ...styleInput, ...styles.inputFocused}
      styleLabel={ ...styleLabel, ...styles.labelFocused}
      styleBorder={ ...styleBorder, ...styles.borderFocused}
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

const styles= {
  container: {
    position: 'relative',
    width: 100,
    maxWidth: '100%',
    margin: 0,
    padding: '20px 0',
  },

  input: {
    color: '#757575',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid rgba(0,0,0,.12)',
    display: 'block',
    fontSize: 16,
    margin: 0,
    padding: '4px 0',
    width: '100%',
    background: '0 0',
    textAlign: 'left',
  },

  inputFocused: {
    outline: 'none',
  },

  label: {
    bottom: 0,
    color: 'rgba(0,0,0,.26)',
    fontSize: 16,
    left: 0,
    right: 0,
    pointerEvents: 'none',
    position: 'absolute',
    display: 'block',
    top: 24,
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textAlign: 'left',
    transitionDuration: '.2s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  },

  labelFocused: {
    color: '#3f51b5',
    fontSize: 12,
    top: 4,
    visibility: 'visible',
  },

  border: {
    backgroundColor: '#3f51b5',
    bottom: 20,
    height: 2,
    left: '45%',
    position: 'absolute',
    transitionDuration: '.2s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    visibility: 'hidden',
    width: 10,
  },

  borderFocused: {
    left: 0,
    visibility: 'visible',
    width: '100%',
  },

}
