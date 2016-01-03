import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple'
import styles from './styles.js'

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
