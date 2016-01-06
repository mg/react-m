import React from 'react'
import Radium from 'radium'
import styles from './styles'

export class Drawer extends React.Component {
  static propTypes= {
    side: React.PropTypes.oneOf(['left', 'right']),
    open: React.PropTypes.bool,
    onClose: React.PropTypes.func.isRequired,
  }

  static defaultProps= {
    side: 'left',
    open: false,
  }

  render() {
    const { side, open, children }= this.props

    let styleContainer= {...styles.container}
    let styleDrawer= {...styles.drawer}

    if(side === 'right') {
      styleContainer= {...styleContainer, ...styles.containerRight}
    }

    if(open) {
      styleContainer= {...styleContainer, ...styles.containerOn}
    }

    if(!this.state.width) {
      styleDrawer= {...styleDrawer, ...styles.drawerCalc}
    } else {
      if(!open) {
        styleDrawer= {...styleDrawer, ...styles.drawerClosed}
      } else {
        styleDrawer= {...styleDrawer, width: this.state.width}
      }
      switch(side) {
        case 'left':
          styleDrawer= {...styleDrawer, ...styles.drawerLeft}
          break
        case 'right':
          styleDrawer= {...styleDrawer, ...styles.drawerRight}
          //styleDrawer= {...styleDrawer, right: -this.state.width}
          break
      }
    }

    return (
      <div style={styleContainer} onClick={::this.onClick}>
        <nav
          style={styleDrawer}
          onClick={::this.onClick}
          ref={e => this.drawer= e}>
          {children}
        </nav>
      </div>
    )
  }

  onClick() {
    this.props.onClose()
  }

  componentDidMount() {
    this.setState({width: this.drawer.scrollWidth})
  }

  state: {}
}

export default Radium(Drawer)
