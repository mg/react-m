export default {
  button: {
    borderRadius: '50%',
    fontSize: 24,
    height: 32,
    minWidth: 32,
    outline: 'none',
    backgroundColor: 'initial',
    border: 'none',
    willChange: 'box-shadow,transform',
    transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
    outline: 'none',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: 'rgba(158,158,158,.2)',
    },

    ':focus': {
      backgroundColor: 'rgba(158,158,158,.2)',
    },

    ':active': {
      backgroundColor: 'rgba(158,158,158,.4)',
    },
  },

  icon: {
    verticalAlign: 'middle',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-12px,-12px)',
    lineHeight: '24px',
    width: 24,
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    textTransform: 'none',
    fontFeatureSettings: '\'liga\'',
    WebkitFontFeatureSettings: '\'liga\'',
    WebkitFontSmoothing: 'antialiased',
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
    borderRadius: '50%',
  },
}
