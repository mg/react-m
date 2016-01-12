export default {
  button: {
    position: 'relative',
    borderRadius: '50%',
    outline: 'none',
    backgroundColor: 'initial',
    border: 'none',
    willChange: 'box-shadow,transform',
    transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
    outline: 'none',
    cursor: 'pointer',
    padding: 5,

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

  labelContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
  },

  label: {
    color: '#757575',
    fontWeight: 300,
    cursor: 'pointer',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',
  },

  disabled: {
    color: 'rgba(0,0,0,.26)',
    cursor: 'default',
  },

  disabledLabel: {
    cursor: 'default',
    color: 'rgba(0,0,0,.26)',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: '50%',
  },
}
