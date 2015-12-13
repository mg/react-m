import React from 'react'

export class Ripple extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
    center: React.PropTypes.bool,
  }

  static defaultProps= {
    color: '#000',
  }

  render() {
    const { color, center }= this.props

    let styleContainer= {...styles.container, ...styles.borderRadius}
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
        center,
        this.data.width, this.data.height,
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
    if(this.data === undefined) {
      const rect = e.currentTarget.parentNode.getBoundingClientRect()
      styles.borderRadius.borderTopLeftRadius= e.currentTarget.parentNode.style['border-top-left-radius']
      styles.borderRadius.borderTopRightRadius= e.currentTarget.parentNode.style['border-top-right-radius']
      styles.borderRadius.borderBottomLeftRadius= e.currentTarget.parentNode.style['border-bottom-left-radius']
      styles.borderRadius.borderBottomRightRadius= e.currentTarget.parentNode.style['border-bottom-right-radius']
      this.data= {
        width: rect.width,
        height: rect.height,
        size: Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2,
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
  container: {
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

    //background: '#000',
    //color: '#000',
    borderRadius: '50%',

    left: 0,
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },

  borderRadius: {
  },

  isAnimating: {
    transition: 'transform 0.3s cubic-bezier(0,0,.2,1),width 0.3s cubic-bezier(0,0,.2,1),height 0.3s cubic-bezier(0,0,.2,1),opacity 0.6s cubic-bezier(0,0,.2,1)',
  },

  isVisible: {
    opacity: 0.4,
  }
})
