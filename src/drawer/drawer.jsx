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

    if(open) {
      styleContainer= {...styleContainer, ...styles.containerOn}
      styleDrawer= {...styleDrawer, ...styles.drawerOn}
    }

    switch(side) {
      case 'left':
        if(!open) {
          styleDrawer= {...styleDrawer, ...styles.drawerOffLeft}
        }
        styleDrawer= {...styleDrawer, ...styles.drawerLeft}
        break
      case 'right':
        styleContainer= {...styleContainer, ...styles.containerRight}
        if(!open) {
          styleDrawer= {...styleDrawer, ...styles.drawerOffRight}
        }
        styleDrawer= {...styleDrawer, ...styles.drawerRight}
        break
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
}

export default Radium(Drawer)
