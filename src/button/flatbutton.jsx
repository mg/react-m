import React from 'react'

const FlatButton= ({onClick, type, enabled= true, children}) => {
  if(!enabled) {
    return(
      <button style={{...styles.button, ...styles.disabled}} disabled>
        {children}
      </button>
    )
  }

  return (
    <button style={styles.button} className='reactmd-button-flatbutton' onClick={onClick}>
      {children}
    </button>
  )
}

FlatButton.propTypes= {
  onClick: React.PropTypes.func,
  enabled: React.PropTypes.bool,
}

export default FlatButton

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  button: {
    color: '#000',

    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 0,

    height: 36,
    minWidth: 64,
    lineHeight: '36px',
    padding: '0 16px',

    border: 'none',
    borderRadius: 2,
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    willChange: 'box-shadow,transform',
    transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
    backgroundColor: 'transparent',
  },
})
