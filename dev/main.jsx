import React from 'react'
import { Link } from 'react-router'
import { UseAutoId } from 'react-autoid'

const links= [
  { to: '/buttons', label: 'Buttons' },
  { to: '/toggles', label: 'Toggles' },
  { to: '/sliders', label: 'Sliders' },
  { to: '/progress', label: 'Progress' },
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
  <div>
    <Menu/>
    {children}
  </div>

export default UseAutoId(Main)

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  ul: {
    display: 'flex',
    margin: 0,
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
})
