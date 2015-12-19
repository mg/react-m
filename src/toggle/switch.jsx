import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple.jsx'

export class Switch extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, ripple, autoId, children }= this.props

    let link= {...styles.link}
    let track= {...styles.track}
    let thumb= {...styles.thumb}
    if(value) {
      link= {...link, ...styles.linkOn}
      track= {...track, ...styles.trackOn}
      thumb= {...thumb, ...styles.thumbOn}
    }

    var markupRipple
    if(ripple) {
      markupRipple= <Ripple center={false} color={'#3f51b5'} container={styles.ripple}/>
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
          <div style={track}/>
          <div style={thumb}/>
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

export default AutoId(Radium(Switch))

const styles = {
  container: {
    position: 'relative',
    width: 37,
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

  track: {
    background: 'rgba(0,0,0,.26)',
    position: 'absolute',
    left: 0,
    top: 5,
    height: 14,
    width: 36,
    borderRadius: 14,
    cursor: 'pointer',
  },

  trackOn: {
    background: 'rgba(63,81,181,.5)',
  },

  thumb: {
    background: '#fafafa',
    position: 'absolute',
    left: 0,
    top: 2,
    height: 20,
    width: 20,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'left',
  },

  thumbOn: {
    background: '#3f51b5',
    left: 16,
    boxShadow: '0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)',
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
    top: 4,
    left: 2,
    display: 'inline-block',
    boxSizing: 'border-box',

    height: 18,
    width: 34,
    borderRadius: 14,

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
    height: 24,
    width: 34,
    borderRadius: 14,
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
