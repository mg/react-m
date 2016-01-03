import './styles.css'
import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class Spinner extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
    multicolor: React.PropTypes.bool,
  }

  static defaultProps= {
    color: '#3f51b5',
    multicolor: false,
  }

  render() {
    const { color, multicolor }= this.props

    let styleCircle= {...styles.circle, stroke: color}
    if(multicolor) {
      styleCircle.animation += ', reactm-spinner-colors 6s ease-in-out infinite'
    }

    return (
      <div style={styles.container}>
        <svg style={styles.svg}>
          <circle cx={30} cy={30} r={26} style={styleCircle}/>
        </svg>
      </div>
    )
  }
}

export default Radium(Spinner)
