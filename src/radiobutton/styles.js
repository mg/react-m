export default {
  container: {
    position: 'relative',
  },

  label: {
    color: '#757575',
    fontWeight: 400,
    paddingLeft: 24,
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',
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

  outerCircle: {
    position: 'absolute',
    top: 4,
    left: 0,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    margin: 0,
    cursor: 'pointer',
    border: '2px solid rgba(0,0,0,.54)',
    borderRadius: '50%',
    zIndex: 2,
  },

  outerCircleOn: {
    border: '2px solid #3f51b5',
  },

  innerCircle: {
    position: 'absolute',
    zIndex: 1,
    margin: 0,
    top: 8,
    left: 4,
    boxSizing: 'border-box',
    width: 8,
    height: 8,
    cursor: 'pointer',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'transform',
    transform: 'scale3d(0,0,0)',
    borderRadius: '50%',
    background: '#3f51b5',
  },

  innerCircleOn: {
    transform: 'scale3d(1,1,1)',
  },

  focus: {
    position: 'absolute',
    top: 4,
    left: 0,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: '50%',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
    backgroundColor: 'rgba(63,81,181,.26)',
  },

  disabledLabel: {
    cursor: 'text',
    color: 'rgba(0,0,0,.26)',
  },

  disabledOuterCircle: {
    cursor: 'text',
    border: '2px solid rgba(0,0,0,.26)',
  },

  disabledOuterCircleOn: {
    cursor: 'text',
    border: '2px solid rgba(0,0,0,.26)',
  },

  disabledInnerCircle: {
    background: 'rgba(0,0,0,.26)',
  },

  ripple: {
    top: -12,
    left: -12,
    width: 36,
    height: 36,
    borderRadius: '50%',
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
