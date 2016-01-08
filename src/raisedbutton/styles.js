export default {
  button: {
    //color: '#000',



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

    backgroundColor: 'rgba(158,158,158,.2)',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',

    ':active': {
      backgroundColor: 'rgba(158,158,158,.4)',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
    },

    ':focus': {
      backgroundColor: 'rgba(158, 158, 158, 0.2)',
      boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
    },

    ':hover': {
      boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
    },
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
}
