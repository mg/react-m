import React from 'react'
import Radium from 'radium'
import Ripple from '../ripple'
import styles from './styles.js'

export class Slider extends React.Component {
  static propTypes= {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    step: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    let { min, max, value, disabled, ripple, onChange }= this.props

    if(value === undefined) {
      value= (max - min) / 2
    }

    var markupSliderLower
    var markupSliderHigher
    var markupTracker
    if(this.state.width !== undefined) {
      const x= this.xFromValue(value)
      const percent= (x - this.state.left) / this.state.width

      var markupMouseTracker
      let stylesTracker= {...styles.tracker, left: x - this.state.left - styles.tracker.width / 2}
      if(disabled) {
        stylesTracker= {...stylesTracker, ...styles.disabledTracker}
      }
      if(this.state.track) {
        stylesTracker= {...stylesTracker, ...styles.trackerOn}
        markupMouseTracker= (
          <div
            style={styles.mouseTracker}
            onMouseMove={::this.onTrack}
            onMouseUp={::this.onTrackEnd}
            onMouseLeave={::this.onTrackEnd}
            />
        )
      }
      let stylesLower= {...styles.backgroundLower, width: percent * this.state.width}
      let stylesHigher= {...styles.backgroundHigher,  width: (1 - percent) * this.state.width}

      if(disabled) {
        stylesLower= {...stylesLower, ...styles.disabledBackgroundLower}
        stylesHigher= {...stylesHigher, ...styles.disabledBackgroundHigher}
      }

      markupSliderLower= <div style={stylesLower} onMouseDown={e => e.preventDefault()}/>
      markupSliderHigher= <div style={stylesHigher} onMouseDown={e => e.preventDefault()}/>

      let focus= {...styles.focus, left: x - this.state.left - styles.focus.width / 2}
      if(this.state.focused && !this.state.track) {
        focus= {...focus, ...styles.focusOn}
      }

      markupTracker= (
        <a href='#'
          onClick={e => e.preventDefault()}
          onKeyDown={::this.onKeyDown}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}
          >
          <div
            style={stylesTracker}
            onMouseDown={::this.onTrackStart}
            />
          <div style={focus}/>
          {markupMouseTracker}
        </a>
      )
    }

    let stylesBackground= styles.background
    if(disabled) {
      stylesBackground= {...stylesBackground, ...styles.disabledBackground}
    }

    return (
      <div style={styles.container}>
        <input
          type='number'
          min={min}
          max={max}
          value={value}
          tabIndex={-1}
          style={styles.slider}
          readOnly
          />

        <div style={stylesBackground} ref={e => this.slider= e} onClick={::this.onClick} onMouseDown={e => e.preventDefault()}>
          {markupSliderLower}
          {markupSliderHigher}
        </div>
        {markupTracker}
      </div>
    )
  }

  componentDidMount() {
    let rect= this.slider.getBoundingClientRect()

    this.setState({
      left: rect.left,
      right: rect.right,
      width: rect.width,
    })
  }

  onTrackStart(e) {
    e.preventDefault()
    if(this.props.disabled) return
    this.setState({track: true})
  }

  onTrack(e) {
    if(this.state.track) {
      const { onChange }= this.props
      const x= this.xFromEvent(e)
      onChange(this.valueFromX(x))
    }
  }

  onTrackEnd(e) {
    this.setState({track: false})
  }

  onClick(e) {
    const { step, disabled, onChange }= this.props

    if(disabled) return
    const x= this.xFromEvent(e)
    let v= this.valueFromX(x)

    onChange(v)
  }

  onKeyDown(e) {
    let { value, min, max, step, onChange }= this.props

    value= value || (max - min) / 2
    step= step || 1

    if(e.keyCode === 37) {
      if(value > min) onChange(value - step)
      else onChange(min)
    } else if(e.keyCode === 39) {
      if(value < max) onChange(value + step)
      else onChange(max)
    }
  }

  onFocus() {
    if(this.props.disabled) return
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  xFromEvent(e) {
    let x = e.clientX ? e.clientX : e.touches[0].clientX;
    if(x < this.state.left)
      x= this.state.left
    else if(x > this.state.width + this.state.left)
      x= this.state.width + this.state.left
    return x
  }

  valueFromX(x) {
    const { min, max, step }= this.props
    const percent= (x - this.state.left) / this.state.width
    let value= min + (max - min) * percent
    if(step !== undefined) {
      let remainder= value % step
      if(remainder !== 0) {
        let div= Math.floor(value / step);
        if(remainder > step) return (div * step) + 1
        return div * step
      }
    }
    return value
  }

  xFromValue(value) {
    const { min, max }= this.props
    const percent= (value - min) / (max - min)
    return this.state.left + (this.state.width) * percent
  }
}

export default Radium(Slider)
