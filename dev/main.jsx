import React from 'react'
import { Link } from 'react-router'
import { UseAutoId } from 'react-autoid'

const links= [
  { to: '/fab', label: 'Fab' },
  { to: '/flatbutton', label: 'FlatButton' },
  { to: '/raisedbutton', label: 'RaisedButton' },
  { to: '/iconbutton', label: 'IconButton' },
  { to: '/checkbox', label: 'Checkbox' },
  { to: '/radiobutton', label: 'RadioButton' },
  { to: '/icontoggle', label: 'IconToggle' },
  { to: '/switch', label: 'Switch' },
  { to: '/sliders', label: 'Sliders' },
  { to: '/progress', label: 'Progress' },
  { to: '/badges', label: 'Badges' },
  { to: '/tooltips', label: 'Tooltips' },
  { to: '/menus', label: 'Menus' },
  { to: '/tabs', label: 'Tabs' },
  { to: '/inputs', label: 'Inputs' },
]

const Menu= () =>
  <ul style={styles.ul}>
    {links.map((link, idx) =>
      <li style={styles.li} key={idx}>
        <Link style={styles.link} activeStyle={styles.activeLink} {...link}>{link.label}</Link>
      </li>
    )}
  </ul>

const Main= ({children}) =>
  <div style={{display: 'flex'}}>
    <Menu/>
    {children}
  </div>

export default UseAutoId(Main)

let styles = {
  ul: {
    width: 150,
    margin: 0,
    marginRight: 20,
    padding: 0,
  },

  li: {
    listStyleType: 'none',
    padding: 2,
    marginRight: 5,
  },

  liLocale: {
    marginTop: 2,
  },

  link: {
    color: 'black',
    textDecoration: 'none',
    display: 'block',
    padding: '4px 8px',
  },

  activeLink: {
    color: 'white',
    backgroundColor: 'black',
  },
}
