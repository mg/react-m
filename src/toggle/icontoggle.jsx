import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple.jsx'

export class IconToggle extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, ripple, autoId, children }= this.props

    let link= {...styles.link}
    if(value) {
      link= {...link, ...styles.linkOn}
    }

    var markupRipple
    if(ripple) {
      markupRipple= <Ripple center={true} color={'#3f51b5'} container={styles.ripple}/>
    }

    var focus= styles.focus
    if(this.state.focused) {
      focus= {...focus, ...styles.focusOn}
    }

    return (
      <div style={styles.container}>
        <input
          type='checkbox'
          id={autoId}
          value={value}
          style={[styles.input]}
          tabIndex={-1}
          onChange={::this.onChange}
          />
        <a
          href='#'
          style={link}
          onClick={::this.onClick}
          onKeyUp={::this.onKeyUp}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}>
          <i style={styles.icon}>{children}</i>
          <span style={focus}/>
          {markupRipple}
        </a>
      </div>
    )
  }

  onChange(e) {
    const { value, onChange }= this.props
    onChange(!value)
    this.setState({focused: false})
  }

  onClick(e) {
    const { value, ripple, onChange }= this.props
    if(e) e.preventDefault()
    onChange(!value)

    if(!ripple) {
      this.setState({focused: true})
    }

    let frameCount= 15
    const animHandler= () => {
      frameCount--
      if(frameCount > 0) requestAnimationFrame(animHandler)
      else this.setState({focused: false})
    }
    requestAnimationFrame(animHandler)
  }

  onKeyUp(e) {
    const { value, selected, onChange }= this.props
    e.preventDefault()
    if(e.keyCode === 32) {
      onChange(!value)
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

export default AutoId(Radium(IconToggle))

const styles = {
  container: {
    position: 'relative',
    width: 32,
    height: 32,
    cursor: 'pointer',
  },

  link: {
    color: '#616161',
    display: 'block',
  },

  linkOn: {
    color: '#3f51b5',
  },

  icon: {
    lineHeight: '32px',
    fontSize: 24,
    verticalAlign: 'middle',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-12px,-12px)',
    width: 24,
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    textTransform: 'none',
    fontFeatureSettings: '\'liga\'',
    WebkitFontFeatureSettings: '\'liga\'',
    WebkitFontSmoothing: 'antialiased',
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

  focus: {
    position: 'absolute',
    top: 10,
    left: 8,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'background-color box-shadow',
  },

  focusOn: {
    backgroundColor: 'rgba(63,81,181,.26)',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
  },

  ripple: {
    top: 0,
    left: -2,
    width: 36,
    height: 36,
    borderRadius: '50%',
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
