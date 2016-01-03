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
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
    backgroundColor: 'transparent',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },  
}
