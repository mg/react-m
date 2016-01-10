import './styles.css'
import React from 'react'
import Radium from 'radium'
import styles from './styles.js'

export class ProgressBar extends React.Component {
  static propTypes= {
    progress: React.PropTypes.number,
    loaded: React.PropTypes.number,
    indeterminate: React.PropTypes.bool,
    query: React.PropTypes.bool,
    size: React.PropTypes.number,
  }

  static defaultProps= {
    progress: 0,
    loaded: 1,
    size: 4
  }

  render() {
    let { progress, loaded, indeterminate, query, size }= this.props

    let styleContainer= {...styles.container, height: size}

    if(indeterminate) {
      styleContainer= {...styleContainer, ...styles.indeterminatedContainer}
      loaded= 1
      progress= 0
    } else{
      styleContainer= {...styleContainer, ...styles.determinatedContainer}
      if(progress > loaded) {
        progress= loaded
      }
    }

    let styleProgress= {...styles.bar, ...styles.progress}
    let styleLoaded= {...styles.bar, ...styles.loaded,}
    let styleLoading= {...styles.bar, ...styles.loading}

    if(indeterminate) {
      styleProgress= {...styleProgress, ...styles.animation, top: 0, left: 0, ...styles.indeterminate1, position: 'absolute'}
      styleLoading= {...styleProgress, ...styles.animation, right: 0, ...styles.indeterminate2}
    } else if(query) {
      styleProgress= {...styleProgress, ...styles.query, width: '100%', position: 'absolute', height: size}
      styleLoaded= {...styleLoaded, width: '100%'}
      //styleLoading= {...styleProgress, ...styles.query, right: 0}
    } else {
      styleProgress= {...styleProgress, width: `${progress * 100}%`}
      styleLoaded= {...styleLoaded, width: `${(loaded - progress) * 100}%`}
      styleLoading= {...styleLoading, width: `${(1 - loaded) * 100}%`}
    }

    return (
      <div style={styleContainer}>
        <div style={styleProgress}/>
        <div style={styleLoaded}/>
        <div style={styleLoading}/>
      </div>
    )
  }
}

export default Radium(ProgressBar)
