import React from 'react'
import Radium from 'radium'
import Ripple from '../ripple'
import Icon from '../icon'
import styles from './styles.js'

export class Slider extends React.Component {
  static propTypes= {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    step: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,

    icon: React.PropTypes.string,
    size: React.PropTypes.number,

    thumbColor: React.PropTypes.string,
    thumbHighlightColor: React.PropTypes.string,
    trackOnColor: React.PropTypes.string,
    trackOffColor: React.PropTypes.string,
    thumbColorDisabled: React.PropTypes.string,
    trackColorDisabled: React.PropTypes.string,
  }

  static defaultProps= {
    size: 20,
    thumbColor: '#3f51b5',
    thumbHighlightColor: 'rgba(63,81,181,.26)',
    trackOnColor: '#3f51b5',
    trackOffColor: 'rgba(0,0,0,.26)',
    thumbColorDisabled: '#757575',
    trackColorDisabled: 'rgba(0,0,0,.26)',
  }

  render() {
    let {
      min, max, value, disabled, ripple, onChange,
      icon, size, thumbColor, thumbHighlightColor,
      trackOnColor, trackOffColor, thumbColorDisabled, trackColorDisabled,
    }= this.props

    if(value === undefined) {
      value= (max - min) / 2
    }

    var markupSliderLower
    var markupSliderHigher
    var markupThumb
    if(this.state.width !== undefined) {
      const x= this.xFromValue(value)
      const percent= (x - this.state.left) / this.state.width

      var markupMouseTracker
      let styleThumbContainer= {
        ...styles.thumbContainer,
        width: size,
        left: x - this.state.left - size / 2,
      }

      let styleThumb= {
        ...styles.thumb,
        width: size * 0.75,
        height: size * 0.75,

        backgroundColor: thumbColor
      }

      if(disabled) {
        styleThumb= {...styleThumb, ...styles.disabledThumb, backgroundColor: thumbColorDisabled}
      }
      if(this.state.track) {
        styleThumb= {...styleThumb, width: size, height: size}
        markupMouseTracker= (
          <div
            style={styles.mouseTracker}
            onMouseMove={::this.onTrack}
            onMouseUp={::this.onTrackEnd}
            onMouseLeave={::this.onTrackEnd}
            />
        )
      }
      let stylesLower= {...styles.trackLower, width: percent * this.state.width, background: trackOnColor}
      let stylesHigher= {...styles.trackHigher,  width: (1 - percent) * this.state.width, background: trackOffColor}

      if(disabled) {
        stylesLower= {...stylesLower, ...styles.disabledTrackLower, background: trackColorDisabled}
        stylesHigher= {...stylesHigher, ...styles.disabledTrackHigher, background: trackColorDisabled}
      }

      markupSliderLower= <div style={stylesLower} onMouseDown={e => e.preventDefault()}/>
      markupSliderHigher= <div style={stylesHigher} onMouseDown={e => e.preventDefault()}/>

      if(this.state.focused && !this.state.track) {
        styleThumb= {
          ...styleThumb,
          ...styles.thumbFocus,
          boxShadow: `0 0 0 8px ${thumbHighlightColor}`,
        }
      }

      var markupIcon
      if(icon) {
        markupIcon= <Icon size={this.state.track ? size * 0.8 : size*0.5} color='#fff'>{icon}</Icon>
      }

      markupThumb= (
        <div style={styleThumbContainer}>
          <div
            style={styleThumb}
            onMouseDown={::this.onTrackStart}>
            <a
              href='#'
              style={styles.link}
              onClick={e => e.preventDefault()}
              onKeyDown={::this.onKeyDown}
              onFocus={::this.onFocus}
              onBlur={::this.onBlur}
              >
              {markupIcon}
            </a>
          </div>
          {markupMouseTracker}
        </div>
      )
    }

    let stylesBackground= styles.background
    if(disabled) {
      stylesBackground= {...stylesBackground, ...styles.disabledBackground}
    }

    return (
      <div style={{...styles.container, height: size}}>
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
        {markupThumb}
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
        let div= Math.floor((value + step/2) / step);
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
