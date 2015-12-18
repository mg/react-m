import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple.jsx'

export class RadioButton extends React.Component {
  static propTypes = {
    value: React.PropTypes.node,
    selected: React.PropTypes.node,
    ripple: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, selected, ripple, autoId, children }= this.props

    let outerCircle= {...styles.outerCircle}
    let innerCircle= {...styles.innerCircle}
    if(value === selected) {
      outerCircle= {...outerCircle, ...styles.outerCircleOn}
      innerCircle= {...innerCircle, ...styles.innerCircleOn}
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
        <label htmlFor={autoId} style={styles.label} onClick={::this.onClick}>{children}</label>
      </div>
    )
  }

  onChange(e) {
    const { value, selected, onChange }= this.props
    if(value === selected) return
    onChange(value)
    this.setState({focused: true})
  }

  onClick(e) {
    const { value, selected, onChange }= this.props
    if(e) e.preventDefault()
    if(value === selected) return
    onChange(value)
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
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  state= {}
}

export default AutoId(Radium(RadioButton))

const styles = {
  container: {
    position: 'relative',
  },

  label: {
    color: '#757575',
    fontWeight: 400,
    paddingLeft: 24,
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',
  },

  input: {
    appearance: 'none',
    position: 'absolute',
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: 'none',
  },

  outerCircle: {
    position: 'absolute',
    top: 4,
    left: 0,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    margin: 0,
    cursor: 'pointer',
    border: '2px solid rgba(0,0,0,.54)',
    borderRadius: '50%',
    zIndex: 2,
  },

  outerCircleOn: {
    border: '2px solid #3f51b5',
  },

  innerCircle: {
    position: 'absolute',
    zIndex: 1,
    margin: 0,
    top: 8,
    left: 4,
    boxSizing: 'border-box',
    width: 8,
    height: 8,
    cursor: 'pointer',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'transform',
    transform: 'scale3d(0,0,0)',
    borderRadius: '50%',
    background: '#3f51b5',
  },

  innerCircleOn: {
    transform: 'scale3d(1,1,1)',
  },

  focus: {
    position: 'absolute',
    top: 4,
    left: 0,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: '50%',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
    backgroundColor: 'rgba(63,81,181,.26)',
  },

  ripple: {
    top: -12,
    left: -12,
    width: 36,
    height: 36,
    borderRadius: '50%',
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
