import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class Ripple extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
    center: React.PropTypes.bool,
    container: React.PropTypes.object,
  }

  static defaultProps= {
    color: '#000',
  }

  render() {
    const { color, center, container }= this.props

    let styleContainer= {...styles.container, ...container}
    let styleRipple= {...styles.ripple}

    styleRipple.color= color
    styleRipple.background= color

    if(this.data !== undefined) {
      styleRipple.width= this.data.size
      styleRipple.height= this.data.size
      if(this.state.visible) {
        styleRipple= {...styleRipple, ...styles.isVisible}
      }
      if(!this.state.start) {
        styleRipple= {...styleRipple, ...styles.isAnimating}
      }
      styleRipple.transform= transform(
        this.state.start,
        this.data.x, this.data.y,
      )
    }

    return (
      <div
        style={styleContainer}
        onMouseDown={::this.onStart}
        onMouseUp={::this.onEnd}
        onMouseLeave={::this.onEnd}
        onTouchEnd={::this.onEnd}
        onBlur={::this.onEnd}
        >
        <div
          style={styleRipple}
          ref={e => this.ripple= e}
          ></div>
      </div>
    )
  }

  onStart(e) {
    const { center }= this.props

    if(this.data === undefined) {
      const rect = e.currentTarget.getBoundingClientRect()
      this.data= {
        size: Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2,
      }
    }

    const bound = e.currentTarget.getBoundingClientRect()

    // Check if we are handling a keyboard click.
    if (center || (e.clientX === 0 && e.clientY === 0)) {
      this.data.x= Math.round(bound.width / 2)
      this.data.y= Math.round(bound.height / 2)
    } else {
      const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
      this.data.x= Math.round(clientX - bound.left)
      this.data.y= Math.round(clientY - bound.top)
    }

    this.setState({visible: true})
    this.setState({start: true})

    let frameCount= 1
    const animHandler= () => {
      frameCount--
      if(frameCount > 0) requestAnimationFrame(animHandler)
      else this.setState({start: false})
    }
    requestAnimationFrame(animHandler)
  }

  onEnd(e) {
    if (e && e.detail !== 2) {
      this.setState({visible: false})
    } else {
      setTimeout(() => {
        this.setState({visible: false})
      }, 1)
    }
  }

  constructor() {
    super()
    this.state= {
      visible: false,
      start: false,
    }
  }
}

function transform(start, x, y) {
  var transformString
  var scale
  var offset= `translate(${x}px, ${y}px)`

  if (start) {
    scale= 'scale(0.0001, 0.0001)'
  } else {
    scale= ''
  }

  return `translate(-50%, -50%) ${offset} ${scale}`
}

export default Radium(Ripple)
