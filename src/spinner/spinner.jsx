import './styles.css'
import React from 'react'
import Radium from 'radium'

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

const styles= {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: 60,
    height: 60,
    transform: 'rotate(-90deg)',
  },

  svg: {
    width: '100%',
    height: '100%',
    animation: 'reactm-spinner-rotate 2s linear infinite',
  },

  circle: {
    animation: 'reactm-spinner-dash 1.5s ease-in-out infinite',
    strokeDasharray: '1.25,250',
    strokeDashoffset: 0,

    transition: 'stroke-dasharray .35s cubic-bezier(.4,0,.2,1)',
    fill: 'none',

    strokeLinecap: 'round',
    strokeMiterlimit: '20',
    strokeWidth: 4,
  },

}
