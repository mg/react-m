import './styles.css'
import React from 'react'
import Radium from 'radium'

export class Tooltip extends React.Component {
  static propTypes= {
    tooltip: React.PropTypes.node.isRequired,
    align: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    margin: React.PropTypes.number,
  }

  static defaultProps= {
    align: 'bottom',
    margin: 8,
  }

  render() {
    const { tooltip, delay, align, margin, children }= this.props

    let styleTooltip= {...styles.tooltip}

    if(this.state.show && this.dimTooltip !== undefined) {
      let dimContainer= this.dimContainer
      let dimTooltip= this.dimTooltip

      styleTooltip= {...styleTooltip, ...styles.tooltipCalced}
      switch(align) {
        case 'top':
        styleTooltip= {...styleTooltip, bottom: dimContainer.height + margin, left: dimContainer.width-dimTooltip.width}
        break
        case 'bottom':
        styleTooltip= {...styleTooltip, top: dimContainer.height + margin, left: dimContainer.width-dimTooltip.width}
        break
        case 'left':
        styleTooltip= {...styleTooltip, top: (dimContainer.height - dimTooltip.height), left: -dimTooltip.width - dimContainer.width/2 - margin}
        break
        case 'right':
        styleTooltip= {...styleTooltip, top: (dimContainer.height - dimTooltip.height), right: -(dimContainer.width + dimContainer.width + margin)}
      }
    } else {
      styleTooltip= {...styleTooltip, ...styles.tooltipHide}
    }

    if(this.state.show) {
      styleTooltip.animation= `pulse 200ms cubic-bezier(0,0,.2,1)forwards`
    }

    return (
      <div style={styles.container} ref={e => this.container= e}>
        <div
          onMouseMove={::this.onMouseMove}
          onMouseLeave={::this.onMouseLeave}
          >
          {children}
        </div>
        <div style={styleTooltip} ref={e => this.tooltip= e}>
          {tooltip}
        </div>
      </div>
    )
  }

  componentDidMount() {
    const padding= styles.tooltipCalced.padding
    this.dimTooltip= {
      width: this.tooltip.scrollWidth + padding - padding / 2,
      height: this.tooltip.scrollHeight + padding + padding / 2,
    }
    this.forceUpdate()
  }

  onMouseMove() {
    if(this.dimContainer === undefined) {
      this.dimContainer= {
        width: this.container.scrollWidth,
        height: this.container.scrollHeight,
      }
    }
    this.setState({show: true})
  }

  onMouseLeave() {
    this.setState({show: false})
  }
}

export default Radium(Tooltip)

const styles= {
  container: {
    position: 'relative',
  },

  tooltip: {
    transformOrigin: 'top center',
    willChange: 'transform',
    zIndex: 999,
    background: 'rgba(97,97,97,.9)',
    borderRadius: 2,
    color: '#fff',
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '14px',
    maxWidth: 170,
    textAlign: 'center',
  },

  tooltipHide: {
    position: 'fixed',
    top: -500,
  },

  tooltipCalced: {
    position: 'absolute',
    padding: 8,
    transform: 'scale(0)',
  }
}
