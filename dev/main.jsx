import React from 'react'
import { Link } from 'react-router'
import { UseAutoId } from 'react-autoid'

const links= [
  { to: '/badge', label: 'Badge' },
  { to: '/checkbox', label: 'Checkbox' },
  { to: '/drawer', label: 'Drawer' },
  { to: '/fab', label: 'Fab' },
  { to: '/flatbutton', label: 'FlatButton' },
  { to: '/icon', label: 'Icon' },
  { to: '/iconbutton', label: 'IconButton' },
  { to: '/icontoggle', label: 'IconToggle' },
  { to: '/input', label: 'Input' },
  { to: '/menu', label: 'Menu' },
  { to: '/progressbar', label: 'ProgressBar' },
  { to: '/radiobutton', label: 'RadioButton' },
  { to: '/raisedbutton', label: 'RaisedButton' },
  { to: '/slider', label: 'Slider' },
  { to: '/spinner', label: 'Spinner' },
  { to: '/switch', label: 'Switch' },
  { to: '/tabs', label: 'Tabs' },
  { to: '/tooltip', label: 'Tooltip' },
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
    <div style={{flexGrow: 1, minWidth: 200}}>
      {children}
    </div>
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
