import './styles.css'
import React from 'react'
import Radium from 'radium'

export class ProgressBar extends React.Component {
  static propTypes= {
    progress: React.PropTypes.number,
    loaded: React.PropTypes.number,
    indeterminate: React.PropTypes.bool,
  }

  static defaultProps= {
    progress: 0,
    loaded: 1,
    indeterminate: false,
  }

  render() {
    let { progress, loaded, indeterminate  }= this.props

    let styleContainer= {...styles.container}

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
      styleProgress= {...styleProgress, ...styles.animation, left: 0, ...styles.indeterminate1}
      styleProgress= {...styleProgress, top: 0, left: 0, position: 'absolute'}
      styleLoading= {...styleProgress, ...styles.animation, right: 0, ...styles.indeterminate2}
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

const styles= {
  container: {
    height: 4,
    width: '50vw',
    maxWidth: 260,
  },

  determinatedContainer: {
    display: 'flex',
  },

  indeterminatedContainer: {
    position: 'relative',
  },

  bar: {
    height: '100%',
    transition: 'width .2s cubic-bezier(.4,0,.2,1)',
  },

  indeterminatedBar: {
    position: 'static',
    top: 0,
  },

  progress: {
    backgroundColor: '#3f51b5',
  },

  loaded: {
    backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',
  },

  loading: {
    width: 0,
    backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',
    mask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")'
  },

  animation: {
    top: 0,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: 'indeterminate1',
  },

  indeterminate1: {
    animationName: 'progressbar-indeterminate1',
  },

  indeterminate2: {
    animationName: 'progressbar-indeterminate2',
  },
}
