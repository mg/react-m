import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class IconToggle extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    label: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    colorOn: React.PropTypes.string,
    colorOff: React.PropTypes.string,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    value: false,
    colorOn: '#3f51b5',
    colorOff: '#616161',
    size: 24,
  }

  render() {
    const { value, label, ripple, disabled, autoId, size, colorOn, colorOff, children }= this.props

    let container= styles.container
    let link= styles.link

    let color= value ? colorOn : colorOff

    if(disabled) {
      container= {...container, ...styles.containerDisabled}
      link= {...link, ...styles.linkDisabled}
      color= 'rgba(0,0,0,.26)'
    }

    var markupLabel
    if(label) {
      let styleLabelContainer= {...styles.labelContainer, top: size}
      let styleLabel= { ...styles.label, fontSize: size * 0.4, color: color }
      if(disabled) styleLabel= {...styleLabel, ...styles.disabledLabel}
      markupLabel= <div style={styleLabelContainer}><label style={styleLabel}>{label}</label></div>
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
      <div style={container}>
        <input
          type='checkbox'
          id={autoId}
          value={value}
          style={[styles.input]}
          tabIndex={-1}
          onChange={() => {}}
          />
        <a
          href='#'
          style={link}
          onClick={::this.onClick}
          onKeyUp={::this.onKeyUp}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}>
          <Icon size={size} color={color}>{children}</Icon>
          <span style={focus}/>
          {markupRipple}
          {markupLabel}
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
    const { value, ripple, disabled, onChange }= this.props
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

export default AutoId(Radium(IconToggle))
