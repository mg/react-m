import React from 'react'
import Radium from 'radium'
import Color from 'color'
import styles from './styles'

const Dot= ({selected, size, inactiveSize, color, inactiveColor, spread}) => {
  let dot= {...styles.dot, backgroundColor: inactiveColor, width: inactiveSize, height: inactiveSize}
  if(selected) {
    dot= {...dot, ...styles.activeDot, backgroundColor: color, width: size, height: size}
  }

  return (
    <div style={{...styles.dotContainer, height: size, width: size, marginLeft: spread}}>
      <div style={dot}/>
    </div>
  )
}

export class Dots extends React.Component {
  static propTypes= {
    count: React.PropTypes.number.isRequired,
    active: React.PropTypes.number.isRequired,
    color: React.PropTypes.string,
    size: React.PropTypes.number,
    inactiveColor: React.PropTypes.string,
    inactiveSize: React.PropTypes.number,
    spread: React.PropTypes.number,
  }

  static defaultProps= {
    color: '#000',
    size: 18,
  }

  render() {
    let { count, active, color, inactiveColor, size, inactiveSize, spread }= this.props

    if(inactiveSize === undefined) {
      inactiveSize= size * 0.6
    }

    if(inactiveColor === undefined) {
      let c= Color(color)
      c.alpha(0.7).lighten(0.6)
      inactiveColor= c.rgbString()
    }

    if(spread === undefined) {
      spread= size * 0.2
    }

    let dots= []
    for(let i=0; i < count; i++) {
      dots.push(
        <Dot
          key={i}
          selected={i === active}
          color={color}
          inactiveColor={inactiveColor}
          size={size}
          inactiveSize={inactiveSize}
          spread={i === 0 ? 0 : spread}
          />
      )
    }

    return (
      <div style={styles.container}>
        <div style={styles.dots}>
          {dots}
        </div>
      </div>
    )
  }
}

export default Radium(Dots)
