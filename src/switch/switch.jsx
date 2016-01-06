import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple'
import styles from './styles.js'

export class Switch extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, ripple, disabled, autoId, children }= this.props

    let container= styles.container
    let link= styles.link
    let track= styles.track
    let thumb= styles.thumb

    if(value) {
      link= {...link, ...styles.linkOn}
      track= {...track, ...styles.trackOn}
      thumb= {...thumb, ...styles.thumbOn}
    }

    if(disabled) {
      container= {...container, ...styles.containerDisabled}
      track= {...track, ...styles.trackDisabled}
      thumb= {...thumb, ...styles.thumbDisabled}
      link= {...link, cursor: 'default'}
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
      <div style={container}>
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
    const { value, disabled, onChange }= this.props
    if(disabled) return
    onChange(!value)
    this.setState({focused: false})
  }

  onClick(e) {
    const { value, disabled, ripple, onChange }= this.props
    if(e) e.preventDefault()
    if(disabled) return
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
    if(this.props.disabled) return    
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  state= {}
}

export default AutoId(Radium(Switch))
