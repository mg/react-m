import React from 'react'

export class Ripple extends React.Component {
  static propTypes= {
    center: React.PropTypes.bool,
  }
  
  render() {
    const { center }= this.props

    let styleRipple= {...styles.ripple}
    if(this.data !== undefined) {
      styleRipple.width= this.data.width * 3.5
      styleRipple.height= this.data.height * 3.5
      if(this.state.visible) {
        styleRipple= {...styleRipple, ...styles.isVisible}
      }
      if(!this.state.start) {
        styleRipple= {...styleRipple, ...styles.isAnimating}
      }
      styleRipple.transform= transform(
        this.state.start,
        this.data.x, this.data.y,
        center,
        this.data.width, this.data.height,
      )
    }

    return (
      <div
        style={styles.rippleContainer}
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
    if(this.data === undefined) {
      const rect = this.ripple.getBoundingClientRect()
      this.data= {
        width: rect.width,
        height: rect.height,
      }
    }

    const bound = e.currentTarget.getBoundingClientRect()

    // Check if we are handling a keyboard click.
    if (e.clientX === 0 && e.clientY === 0) {
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

function transform(start, x, y, center, boundWidth, boundHeight) {
  var transformString
  var scale
  var offset= `translate(${x}px, ${y}px)`

  if (start) {
    scale= 'scale(0.0001, 0.0001)'
  } else {
    scale= ''
    if(center) {
      offset= `translate(${boundWidth / 2}px, ${boundHeight / 2}px)`
    }
  }

  return `translate(-50%, -50%) ${offset} ${scale}`
}

export default Ripple

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  rippleContainer: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },

  ripple: {
    width: 50,
    height: 50,
    transform: 'translate(-50%, -50%)',

    background: '#000',
    color: '#000',
    borderRadius: '50%',

    left: 0,
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },

  isAnimating: {
    transition: 'transform 0.3s cubic-bezier(0,0,.2,1),width 0.3s cubic-bezier(0,0,.2,1),height 0.3s cubic-bezier(0,0,.2,1),opacity 0.6s cubic-bezier(0,0,.2,1)',
  },

  isVisible: {
    opacity: 0.4,
  }
})
