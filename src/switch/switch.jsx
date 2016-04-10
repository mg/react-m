import React from 'react'
import Radium from 'radium'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class Switch extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,

    size: React.PropTypes.number,

    onIcon: React.PropTypes.string,
    offIcon: React.PropTypes.string,

    thumbColorOn: React.PropTypes.string,
    thumbColorOff: React.PropTypes.string,
    trackColorOn: React.PropTypes.string,
    trackColorOff: React.PropTypes.string,
    iconColorOn: React.PropTypes.string,
    iconColorOff: React.PropTypes.string,
    labelColor: React.PropTypes.string,
    focusColor: React.PropTypes.string,
  }

  static defaultProps= {
    value: false,
    size: 16,
    thumbColorOn: '#3f51b5',
    thumbColorOff: '#fafafa',
    trackColorOn: 'rgba(63, 81, 181, 0.498039)',
    trackColorOff: 'rgba(0,0,0,.26)',
    iconColorOn: '#fff',
    iconColorOff: '#333',
    labelColor: '#757575',
    focusColor: 'rgba(63,81,181,.26)',
  }

  render() {
    const {
      value, ripple, disabled, size,
      thumbColorOn, thumbColorOff, trackColorOn, trackColorOff,
      onIcon, offIcon, iconColorOn, iconColorOff,
      focusColor, labelColor,
      children
    }= this.props

    let container= styles.container
    let link= styles.link
    let track= {...styles.track, background: trackColorOff}
    let thumb= {...styles.thumb, background: thumbColorOff}
    let label= {...styles.label, color: labelColor, fontSize: size, marginTop: 2}

    if(value) {
      track= {...track, background: trackColorOn}
      delete thumb.left
      thumb= {...thumb, ...styles.thumbOn, background: thumbColorOn}
    }

    if(disabled) {
      container= {...container, ...styles.containerDisabled}
      track= {...track, ...styles.trackDisabled}
      thumb= {...thumb, ...styles.thumbDisabled}
      link= {...link, cursor: 'default'}
      label= {...label, ...styles.labelDisabled}
    }

    var markupIcon
    if(onIcon) {
      if(!value && offIcon) {
        markupIcon= <Icon color={iconColorOff} size={size}>{offIcon}</Icon>
      } else if(!value) {
        markupIcon= <Icon color={iconColorOff} size={size}>{onIcon}</Icon>
      } else {
        markupIcon= <Icon color={iconColorOn} size={size}>{onIcon}</Icon>
      }
    }

    var markupRipple
    if(ripple) {
      markupRipple= <Ripple center={false} color={thumbColorOn} container={styles.ripple}/>
    }

    var focus= styles.focus
    if(this.state.focused) {
      focus= {...focus, backgroundColor: focusColor, boxShadow: `0 0 0 8px ${focusColor}`,}
    }

    return (
      <div style={container}>
        <div style={styles.innerContainer}>
          <input
            type='checkbox'
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
            <div style={thumb}>
              {markupIcon}
            </div>
            <span style={focus}/>
            {markupRipple}
          </a>
          <label
            style={label}
            onClick={::this.onClick}
            >
            {children}
          </label>
        </div>
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

export default Radium(Switch)
