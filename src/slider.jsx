import React from 'react'
import Radium from 'radium'
import Ripple from './ripple.jsx'

function interpolate(n, min, max) {
  return min * (1 - n) + max * n
}

export class Slider extends React.Component {
  static propTypes= {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    step: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    let { min, max, value, ripple, onChange }= this.props

    if(value === undefined) {
      value= (max - min) / 2
    }
    console.log(value)

    var markupSliderLower
    var markupSliderHigher
    var markupTracker
    if(this.state.width !== undefined) {
      const x= this.xFromValue(value)
      const percent= (x - this.state.left) / this.state.width

      var markupMouseTracker
      let stylesTracker= {...styles.tracker, left: x - this.state.left - styles.tracker.width / 2}
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

      markupSliderLower= <div style={stylesLower}/>
      markupSliderHigher= <div style={stylesHigher}/>

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

        <div style={styles.background} ref={e => this.slider= e} onClick={::this.onClick}>
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
    const { step, onChange }= this.props
    const x= this.xFromEvent(e)
    let v= this.valueFromX(x)
    onChange(v)
  }

  onKeyDown(e) {
    let { value, min, max, step, onChange }= this.props
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

const styles= {
  container: {
    background: '0 0',
    height: 18,
    position: 'relative',
    margin: '0 20px',
    width: '30vw',
    maxWidth: 260,
  },

  slider: {
    display: 'none',
  },

  background: {
    position: 'absolute',
    top: 0,
    height: 10,
    width: 'calc(100% - 52px)',
    left: 0,
    padding: '5px 0 0 0',
    overflow: 'hidden',
    border: 0,
    transform: 'translate(0,-1px)',
    background: '0 0',
    display: 'flex',
    color: '#757575',
    cursor: 'pointer',
  },

  backgroundLower: {
    position: 'relative',
    border: 0,
    height: 2,
    marginTop: 5,
    background: '#3f51b5',
    cursor: 'pointer',
  },

  backgroundHigher: {
    background: 'rgba(0,0,0,.26)',
    transition: 'left .18s cubic-bezier(.4,0,.2,1)',
    position: 'relative',
    border: 0,
    height: 2,
    marginTop: 5,
    padding: 0,
    cursor: 'pointer',
  },

  tracker: {
    zIndex: 1,
    cursor: 'pointer',
    position: 'absolute',
    marginTop: 2,
    marginLeft: 0,
    top: 0,
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#3f51b5',
    transition: 'top .2s cubic-bezier(.4,0,.2,1), margin-left .2s cubic-bezier(.4,0,.2,1), width .2s cubic-bezier(.4,0,.2,1), height .2s cubic-bezier(.4,0,.2,1)',
  },

  trackerOn: {
    marginLeft: -2,
    top: -2,
    width: 20,
    height: 20,
  },

  focus: {
    position: 'absolute',
    display: 'inline-block',
    boxSizing: 'border-box',

    height: 20,
    width: 20,
    borderRadius: '50%',

    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'background-color box-shadow .28s cubic-bezier(.4,0,.2,1)',
  },

  focusOn: {
    backgroundColor: 'rgba(63,81,181,.26)',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
  },

  mouseTracker: {
    zIndex: 10,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: 'calc(100% + 100px)',
    height: 200,
    top: -50,
    left: -75,
  },
}
