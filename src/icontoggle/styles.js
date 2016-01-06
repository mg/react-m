export default {
  container: {
    position: 'relative',
    width: 32,
    height: 32,
    cursor: 'pointer',
  },

  link: {
    color: '#616161',
    display: 'block',
  },

  linkOn: {
    color: '#3f51b5',
  },

  icon: {
    lineHeight: '32px',
    fontSize: 24,
    verticalAlign: 'middle',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-12px,-12px)',
    width: 24,
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    textTransform: 'none',
    fontFeatureSettings: '\'liga\'',
    WebkitFontFeatureSettings: '\'liga\'',
    WebkitFontSmoothing: 'antialiased',
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
    top: 10,
    left: 8,
    display: 'inline-block',
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

  containerDisabled: {
    cursor: 'default',    
  },

  linkDisabled: {
    cursor: 'default',
    color: 'rgba(0,0,0,.26)',
  },

  ripple: {
    top: 0,
    left: -2,
    width: 36,
    height: 36,
    borderRadius: '50%',
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
