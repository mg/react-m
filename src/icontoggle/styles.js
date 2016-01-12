export default {
  container: {
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
  },

  link: {
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
  },

  input: {
    appearance: 'none',
    position: 'absolute',
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: 'none',
  },

  focus: {
    position: 'absolute',
    top: 4,
    left: 4,
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'background-color box-shadow',
  },

  focusOn: {
    backgroundColor: 'rgba(63,81,181,.26)',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
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

  containerDisabled: {
    cursor: 'default',
  },

  linkDisabled: {
    cursor: 'default',
  },

  disabledLabel: {
    cursor: 'text',
    color: 'rgba(0,0,0,.26)',
  },

  ripple: {
    top: -6,
    left: -6,
    width: 36,
    height: 36,
    borderRadius: '50%',
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
