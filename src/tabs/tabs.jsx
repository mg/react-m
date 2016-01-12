import React from 'react'
import Radium from 'radium'
import Color from 'color'
import Ripple from '../ripple'
import styles from './styles.js'

class Tab extends React.Component {
  render() {
    let {
      tab, id, text, selected, isDisabled, fixed, ripple, onClick,
      colorText, colorBackground, colorSelected, colorTextUnselected
    }= this.props

    let styleTab= {...styles.tab, ...styles.transition, backgroundColor: colorBackground, borderBottom: `2px solid ${colorBackground}`}
    let styleLink= {...styles.link, ...styles.transition, color: colorTextUnselected}

    if(fixed) {
      styleTab= {...styleTab, ...styles.tabFixed}
    } else {
      styleTab= {...styleTab, ...styles.tabScrollable}
    }

    if(id(tab) === id(selected)) {
      styleTab= {...styleTab, ...styles.tabSelected, borderBottom: `2px solid ${colorSelected}`}
      styleLink= {...styleLink, color: colorText}
    } else if(isDisabled(tab)) {
      styleTab= {...styleTab, ...styles.tabDisabled}
      if(onClick !== undefined) onClick= () => {}
    }

    var markupRipple
    if(ripple) {
      markupRipple= <Ripple center={false} color={'white'} container={styles.ripple}/>
    }

    if(onClick === undefined) {
      return (
        <li style={styleTab}>
          <a style={styleLink} href={id(tab)} onKeyUp={::this.onKeyUp}>
            {markupRipple}
            {text(tab)}
          </a>
        </li>
      )
    } else {
      return (
        <li style={styleTab}>
          <a style={styleLink} href='#' onClick={::this.onClick} onKeyUp={::this.onKeyUp}>
            {markupRipple}
            {text(tab)}
          </a>
        </li>
      )
    }
  }

  onClick(e) {
    const { onClick, tab }= this.props
    e.preventDefault()
    onClick(tab)
  }

  onKeyUp(e) {
    const { onClick, tab }= this.props
    e.preventDefault()
    if(e.keyCode === 32) {
      if(onClick) onClick(tab)
    }
  }
}

class Tabs extends React.Component {
  static propTypes= {
    items: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    id: React.PropTypes.func.isRequired,
    text: React.PropTypes.func.isRequired,
    selected: React.PropTypes.object,
    isDisabled: React.PropTypes.func,
    onClick: React.PropTypes.func,
    fixed: React.PropTypes.bool,
    ripple: React.PropTypes.bool,

    colorText: React.PropTypes.string,
    colorSelected: React.PropTypes.string,
    colorBackground: React.PropTypes.string,
  }

  static defaultProps= {
    fixed: false,
    isDisabled: () => {},

    colorText: 'white',
    colorBackground: '#3f51b5',
    colorSelected: '#ff4081',
  }

  render() {
    const { items, id, fixed, colorText, colorBackground }= this.props

    if(items === undefined || !(items.size > 0 || items.length > 0)) {
      return null
    }

    let styleContainer= {...styles.container, backgroundColor: colorBackground}
    let styleTabs= {...styles.tabs}
    if(fixed) {
      styleTabs= {...styleTabs, ...styles.tabsFixed}
    } else {
      styleContainer= {...styleContainer, ...styles.containerScrollable}
      styleTabs= {...styleTabs, ...styles.tabsScrollable}
    }

    let colorTextUnselected= Color(colorText).alpha(0.6).rgbString()

    return (
      <nav style={styleContainer}>
        <ul style={styleTabs}>
          {items.map(
            tab => <Tab tab={tab} colorTextUnselected={colorTextUnselected} {...this.props} key={id(tab)}/>
          )}
        </ul>
      </nav>
    )
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.selected !== this.props.selected) return true
    if(this.props.items.size === undefined) return true
    return this.props.items !== nextProps.items
  }
}

export { Tabs, Tab }
export default Radium(Tabs)
