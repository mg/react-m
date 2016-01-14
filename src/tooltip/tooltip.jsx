import './styles.css'
import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

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
        styleTooltip= {...styleTooltip, bottom: dimContainer.height + margin, left: (dimContainer.width-dimTooltip.width - styleTooltip.padding) / 2 }
        break
        case 'bottom':
        styleTooltip= {...styleTooltip, top: dimContainer.height + margin, left: (dimContainer.width-dimTooltip.width) / 2 - styleTooltip.padding}
        break
        case 'left':
        styleTooltip= {...styleTooltip, top: (dimContainer.height - dimTooltip.height - styleTooltip.padding * 2) / 2, left: -dimTooltip.width - styleTooltip.padding * 2 - margin}
        break
        case 'right':
        styleTooltip= {...styleTooltip, top: (dimContainer.height - dimTooltip.height - styleTooltip.padding * 2) / 2, left: dimContainer.width + margin}
      }
    } else {
      styleTooltip= {...styleTooltip, ...styles.tooltipHide}
    }

    if(this.state.show) {
      styleTooltip.animation= `pulse 200ms cubic-bezier(0,0,.2,1)forwards`
    }

    return (
      <div style={styles.container}>
        <div
          onMouseMove={::this.onMouseMove}
          onMouseLeave={::this.onMouseLeave}
          >
          <div ref={e => this.container= e} onFocus={::this.onMouseMove} onBlur={::this.onMouseLeave}>
            {children}
          </div>
        </div>
        <div style={styleTooltip} ref={e => this.tooltip= e}>
          {tooltip}
        </div>
      </div>
    )
  }

  calcDimentions() {
    if(this.dimTooltip === undefined) {
      const rectTooltip= this.tooltip.getBoundingClientRect()
      this.dimTooltip= {
        width: rectTooltip.width,
        height: rectTooltip.height,
      }

      const rectContainer= this.container.getBoundingClientRect()
      this.dimContainer= {
        width: rectContainer.width,
        height: rectContainer.height,
      }
    }
  }

  onMouseMove() {
    this.calcDimentions()
    this.setState({show: true})
  }

  onMouseLeave() {
    this.setState({show: false})
  }
}

export default Radium(Tooltip)
