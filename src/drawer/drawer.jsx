import React from 'react'
import Radium from 'radium'

export class Drawer extends React.Component {
  static propTypes= {
    side: React.PropTypes.oneOf(['left', 'right']),
    open: React.PropTypes.bool,
    onClose: React.PropTypes.func.isReqired,
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

const styles= {
  container: {
    position: 'absolute',
    height: '100%',
    top: 0,
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    transitionProperty: 'background-color',
    transitionDuration: '.2s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  },

  containerOn: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.1)',
  },

  containerRight: {
    right: 0,
  },

  drawer: {
    background: '#fff',

    display: 'block',
    position: 'absolute',
    top: 0,
    height: '100%',
    paddingRight: 10,

    boxShadow: '0 3px 1px -2px rgba(0,0,0,.2)',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
    transitionDuration: '.3s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'transform',
    overflow: 'visible',
    overflowY: 'auto',
  },

  drawerOffLeft: {
    transform: 'translateX(-250px)',
  },

  drawerOffRight: {
    transform: 'translateX(250px)',
  },

  drawerOn: {
    transform: 'translateX(0)',
  },

  drawerLeft: {
    left: 0,
    borderRight: '1px solid #e0e0e0',
  },

  drawerRight: {
    transformOrigin: 'right',
    right: 0,
    borderLeft: '1px solid #e0e0e0',
  },
}
