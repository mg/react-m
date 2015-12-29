import React from 'react'
import Radium from 'radium'
import { IconButton } from './button'

export class Menu extends React.Component {
  static propTypes= {
    icon: React.PropTypes.string,
    direction: React.PropTypes.oneOf(['downright', 'downleft', 'upleft', 'upright']),
    over: React.PropTypes.bool,
  }

  static defaultProps= {
    icon: 'more_vert',
    direction: 'downright',
    over: false,
  }

  render() {
    const { icon, over, direction, children }= this.props
    const { menu }= this.state

    let styleMenu= {...styles.menu}
    if(menu === 0) {
      styleMenu= {...styleMenu, ...styles.menuOff}
    } else if(menu === 1) {
      styleMenu= {...styleMenu, ...styles.menuOn}
    } else {
      styleMenu= {...styleMenu, ...styles.menuHide}
    }

    switch(direction) {
      case 'downright':
        styleMenu= {...styleMenu, ...styles.downRight}
        if(menu > 0) {
          if(over) {
            styleMenu.top= 0
          }
        }
        break
      case 'downleft':
        styleMenu= {...styleMenu, ...styles.downLeft}
        if(menu > 0) {
          styleMenu.right= 0
          if(over) {
            styleMenu.top= 0
          }
        }
        break
      case 'upleft':
        styleMenu= {...styleMenu, ...styles.upLeft}
        if(menu > 0) {
          styleMenu.right= 0
          styleMenu.bottom= this.dimButton.height + 2
          if(over) {
            styleMenu.bottom= 0
          }
        }
        break
      case 'upright':
        styleMenu= {...styleMenu, ...styles.upRight}
        if(menu > 0) {
          styleMenu.bottom= this.dimButton.height + 2
          if(over) {
            styleMenu.bottom= 0
          }
        }
        break
    }

    return (
      <div style={styles.container}>
        <IconButton
          onClick={::this.onClick}
          ref={e => this.button= e}>
          {icon}
        </IconButton>
        <nav
          style={styleMenu}
          onClick={::this.onClick}
          ref={e => this.menu= e}>
          <div>
            {children}
          </div>
        </nav>
      </div>
    )
  }

  onClick() {
    const { menu }= this.state
    if(menu === 0) {
      this.setState({menu: 1})
    } else if(menu === 1) {
      this.setState({menu: 2})
      setTimeout(() => {
        this.setState({menu: 0})
      }, 400)
    }
  }

  componentDidMount() {
    this.dimButton= {
      width: this.button.button.scrollWidth,
      height: this.button.button.scrollHeight,
    }
    console.log(this.dimButton)
    console.log(this.dimMenu)
  }

  state= {
    menu: 0,
  }
}

export default Radium(Menu)

const styles= {
  container: {
    position: 'relative',
  },

  menu: {
    display: 'block',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
    margin: 0,
    padding: 0,
    borderRadius: 2,
    cursor: 'pointer',
    willChange: 'transform',
    transition: 'transform .3s cubic-bezier(.4,0,.2,1), opacity .4s cubic-bezier(.4,0,.2,1)',
  },

  menuOff: {
    position: 'fixed',
    top: -1000,
    transform: 'scale(0)',
    opacity: 1,
  },

  menuOn: {
    position: 'absolute',
    transform: 'scale(1)',
    opacity: 1,
    zIndex: 100,
  },

  menuHide: {
    position: 'absolute',
    transform: 'scale(1)',
    opacity: 0,
  },

  downRight: {
    transformOrigin: '0 0',
  },

  downLeft: {
    transformOrigin: '100% 0',
  },

  upRight: {
    transformOrigin: '0 100%',
  },

  upLeft: {
    transformOrigin: '100% 100%',
  },
}
